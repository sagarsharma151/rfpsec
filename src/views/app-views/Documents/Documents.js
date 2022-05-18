import React from 'react';
import { Card, Row, Col, Input, Collapse, Button, Tabs } from 'antd';
import { ControlOutlined, FolderOutlined, DashOutlined } from '@ant-design/icons';
import "./documents.css";
import Overview from './tabs/Overview';
import AddDocument from './tabs/AddDocument';

const { Search } = Input;
const { Panel } = Collapse;
const { TabPane } = Tabs;

const Documents = () => {

    function callback(key) {
        console.log(key);
    }

    const onSearch = value => console.log(value);

    const suffix = (
        <ControlOutlined
            style={{
                fontSize: 16,
                color: '#1F4173',
            }}
        />
    )

    return (
        <React.Fragment>
            <Row gutter={[16, 16]}>
                <Col sm={24} xs={24} md={12} lg={12} xl={12}>
                    <h2>Documents Details</h2>
                </Col>
                <Col sm={24} xs={24} md={12} lg={12} xl={12}>
                    <div style={{ textAlign: 'right', marginBottom: 15 }}>
                        <Search placeholder="Search" suffix={suffix} onSearch={onSearch} style={{ width: 300 }} className="search-input-color" />
                    </div>
                </Col>
            </Row>
            <Row gutter={[16, 16]} className='mt-4'>
                <Col sm={24} xs={24} md={24} lg={6} xl={6}>
                    <Card>
                        <div className='Government-background'>
                            <h5 className='p-2 text-light'>Government Provided Document (17)</h5>
                        </div>
                        <div>
                            <ul className='list-group list-style-none'>
                                <li className='list-group-item'>Research</li>
                                <li className='list-group-item'> RFI Response</li>
                                <li className='list-group-item'> RFP/RFQ Response (1)</li>
                            </ul>
                        </div>
                        <div className='Government-background'>
                            <h5 className='p-2 text-light'>Reviews/Data Calls (10)</h5>
                        </div>
                        <div>
                            <Collapse onChange={callback}>
                                <Panel header={<p><FolderOutlined className='pr-2 icon-color' />Research</p>} key="1">
                                    <p><FolderOutlined className='pr-2 icon-color' />Research</p>
                                    <p><FolderOutlined className='pr-2 icon-color' /> RFI Response</p>
                                </Panel>
                                <Panel header={<p> <FolderOutlined className='pr-2 icon-color' />RFI Response</p>} key="2">
                                    <p><FolderOutlined className='pr-2 icon-color' />Research</p>
                                    <p><FolderOutlined className='pr-2 icon-color' /> RFI Response</p>
                                </Panel>
                                <Panel header={<p> <FolderOutlined className='pr-2 icon-color' />RFP/RFQ Response (1)</p>} key="3">
                                    <p><FolderOutlined className='pr-2 icon-color' />Research</p>
                                    <p><FolderOutlined className='pr-2 icon-color' /> RFI Response</p>
                                </Panel>
                            </Collapse>

                        </div>
                    </Card>
                </Col>
                <Col sm={24} xs={24} md={24} lg={18} xl={18}>
                    <Row gutter={[16, 16]}>
                        <Col sm={24} xs={24} md={24} lg={24} xl={24} className='text-right'>
                            <Button className='open-background mb-2'>Open Documantation</Button>
                            <Button className='open-background mb-2 ml-2'>Setup Details</Button>
                            <Button className='open-background mb-2 ml-2'><DashOutlined /></Button>
                        </Col>
                        <Col sm={24} xs={24} md={24} lg={24} xl={24}>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                                Exercitation veniam consequat sunt nostrud amet.</p>
                        </Col>
                    </Row>
                    <Tabs defaultActiveKey="1" onChange={callback}>
                        <TabPane tab="Overview" key="1">
                            <Overview />
                        </TabPane>
                        <TabPane tab="+Add Document" key="2">
                           <AddDocument />
                        </TabPane>
                    </Tabs>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Documents;
