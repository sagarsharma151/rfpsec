import React from 'react';
import { FolderAddOutlined, DownOutlined } from '@ant-design/icons';
import { Col, Row, Input, Button, Menu, Dropdown, notification, Upload } from 'antd';
import Overview from './Overview';
import { BaseUrl } from 'services/BaseurlConst';
import { connect } from 'react-redux';
// import { post } from 'axios'

const { Search } = Input;

const AddDocument = (props) => {

    const token = localStorage.getItem('auth_token');

    const onSearch = value => console.log(value);

    const fileup = {
        name: 'doc',
        action: BaseUrl + `/pipeline/uploadsdocuments?`,
        headers: {
            Authorization: `${token}`,
            mimeType: 'multipart/form-data'
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                let reader = new FileReader();
                reader.onload = (e) => {
                }
                reader.readAsText(info.file.originFileObj);
            }
            if (info.file.status === "done") {
                notification['success']({
                    message: 'file uploaded successfully',
                });
            } else if (info.file.status === "error") {
                notification['error']({
                    message: 'file upload failed.',
                });
            }
        },
    };

    const menu = (
        <Menu>
            <Menu.Item key="0">
                <Menu.Item key="3">1rd menu item</Menu.Item>
            </Menu.Item>
            <Menu.Item key="1">
                <Menu.Item key="3">2rd menu item</Menu.Item>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="3">3rd menu item</Menu.Item>
        </Menu>
    );

    return (
        <>
            <div>
                <Row gutter={[16, 16]} className="mt-5 mb-5">
                    <Col sm={18} xs={18} md={18} lg={18} xl={18} className="d-flex">

                        <Search
                            placeholder="Search for documant..."
                            allowClear
                            enterButton="Search"

                            onSearch={onSearch}
                        />

                    </Col>
                    <Col sm={6} xs={6} md={6} lg={6} xl={6}>
                        <Button className="ml-3 float-right">Attachment</Button>
                        <Button className="float-right">Filters</Button>
                    </Col>
                </Row>
            </div>
            <Row gutter={[16, 16]}>
                <Col sm={6} xs={6} md={6} lg={6} xl={6} className='mb-4' >
                    <Button>
                        <Dropdown overlay={menu} trigger={['click']}>
                            <a className="ant-dropdown-link" href='/#'>
                                Document Name<DownOutlined className='pt-2 pl-3 pr-3' />
                            </a>
                        </Dropdown>
                    </Button>
                </Col>
                <Col sm={6} xs={6} md={6} lg={6} xl={6} className='mb-4' >
                    <Button>
                        <Dropdown overlay={menu} trigger={['click']}>
                            <a className="ant-dropdown-link" href='/#'>
                                Document Type<DownOutlined className='pt-2 pl-3 pr-3' />
                            </a>
                        </Dropdown>
                    </Button>
                </Col>
                <Col sm={6} xs={6} md={6} lg={6} xl={6} className='mb-4' >

                    <Button>
                        <Dropdown overlay={menu} trigger={['click']}>
                            <a className="ant-dropdown-link" href='/#'>
                                Document Date<DownOutlined className='pt-2 pl-3 pr-3' />
                            </a>
                        </Dropdown>
                    </Button>
                </Col>
                <Col sm={6} xs={6} md={6} lg={6} xl={6} className='mb-4' >
                    <Button>
                        <Dropdown overlay={menu} trigger={['click']}>
                            <a className="ant-dropdown-link" href='/#'>
                                Solicitation Number<DownOutlined className='pt-2 pl-3 pr-3' />
                            </a>
                        </Dropdown>
                    </Button>

                </Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col sm={24} xs={24} md={24} lg={24} xl={24} className='d-flex m-auto' >
                    <div className='upload_contant_div d-flex m-auto'>
                        <Upload {...fileup} accept=".pdf, .txt, .csv" style={{ width: '100%' }}>

                            <div className='text-center'>
                                <FolderAddOutlined />
                                <p>Drop your documents here, or select</p>
                                <h5>Click to browse</h5>
                            </div>


                        </Upload>
                    </div>
                </Col>
                <Col sm={24} xs={24} md={24} lg={24} xl={24} className='mt-3'>
                    <Overview />
                </Col>
            </Row>

        </>
    )
};

const mapStateToProps = ({ auth }) => {
    const { token } = auth;
    return { token }
}


export default connect(mapStateToProps, null)(AddDocument);