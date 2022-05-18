import React, { useEffect, useState } from "react";
import { Button, Table, Menu, Dropdown, Row, Col } from 'antd';
import { DownloadOutlined, DownOutlined } from '@ant-design/icons';
import { useDispatch, connect } from "react-redux";
import { documentRequest } from "redux/actions/Document";
// import { getProfile } from "redux/actions/Auth";
// import { useHistory } from "react-router-dom";

const Overview = (props) => {
    console.log('props', props);
    // let history = useHistory();

    const [docdata, setDocdata] = useState([]);

    const dispatch = useDispatch();
    const Documents = props.documentData;

    useEffect(() => {
        if (Documents !== '' && Documents !== undefined && Documents !== null) {
            setDocdata(Documents)
        }

        // eslint-disable-next-line
    }, [Documents])

    useEffect(() => {
        dispatch(documentRequest());
    }, [dispatch])

    // useEffect(() => {
    //     const allRequest = {
	// 		route: history,
	// 	}
    //     dispatch(getProfile(allRequest));
    // }, [dispatch])


    const columns = [
        {
            title: 'Name',
            width: 100,
            dataIndex: 'name',
        },
        {
            title: 'Created',
            dataIndex: 'created',
        },
        {
            title: 'Description',
            dataIndex: 'description',
        },
        {
            title: 'Solicitation Number',
            dataIndex: 'solicitation',
        },
        {
            title: '',
            dataIndex: 'action',
        },
    ];

    const data = docdata.map((item, i) => {
        return {
            key: item.id,
            // name:<><img src={item.documents_path.split("https://rfpintelsbucket.s3.us-east-2.amazonaws.com/rfpintelsupload/")}></img></>,
            name: item.documents_path.split("https://rfpintelsbucket.s3.us-east-2.amazonaws.com/rfpintelsupload/"),
            created: item.created_at,
            description: 'Aliqua id fugiat nostrud irure ex.',
            solicitation: 'W9126Z18TEIS',
            action: <>
                <a href={item.documents_path} download className="download-button" >Download<DownloadOutlined className="ml-2 pt-1" /></a>
            </>
        }
    })

    const menu = (
        <Menu>
            <Menu.Item key="0">
                <Menu.Item key="3">3rd menu item</Menu.Item>
            </Menu.Item>
            <Menu.Item key="1">
                <Menu.Item key="3">3rd menu item</Menu.Item>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="3">3rd menu item</Menu.Item>
        </Menu>
    );

    return (
        <React.Fragment>
            <Row gutter={[16, 16]}>
                <Col sm={24} xs={24} md={24} lg={24} xl={24}>
                    <h4 className="">Government Provided Documents </h4>
                </Col>
                <Col sm={24} xs={24} md={24} lg={24} xl={24}>
                    <span className="float-right mb-1">
                        <Button type="primary">
                            <Dropdown overlay={menu} trigger={['click']}>
                                <a className="ant-dropdown-link" href="/#">
                                    Opportunities<DownOutlined className='pt-2 pl-3 pr-3' />
                                </a>
                            </Dropdown>
                        </Button>
                    </span>
                </Col>
                <Col sm={24} xs={24} md={24} lg={24} xl={24}>
                    <Table columns={columns} dataSource={data} className="overflow-auto table-striped-rows" size="middle" />
                </Col>
            </Row>
        </React.Fragment>
    )
};

const mapStateToProps = ({ document }) => {
    const { documentData, token, loading, message } = document;
    return { documentData, token, loading, message }
};
const mapDispatchToProps = {
    documentRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Overview);