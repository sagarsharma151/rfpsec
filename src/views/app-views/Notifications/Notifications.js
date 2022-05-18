import React from 'react';
import { Card, Row, Col, Input, Button } from 'antd';
import { ControlOutlined, CloseSquareOutlined } from '@ant-design/icons';
import "./Notifications.css";
import NotificationContent from './NotificationContent';

const { Search } = Input;

const Notifications = () => {

    const suffix = (
        <ControlOutlined
            style={{
                fontSize: 16,
                color: '#1F4173',
            }}
        />
    );
    const onSearch = value => console.log(value);

    return (
        <React.Fragment>
            <Row>
                <Col sm={12} xs={24} md={12} lg={12} xl={12}>
                    <h2>Notifications</h2>
                </Col>
                <Col sm={12} xs={24} md={12} lg={12} xl={12}>
                    <div style={{ textAlign: 'right', marginBottom: 15 }}>
                        <Search suffix={suffix} placeholder="Search" onSearch={onSearch} style={{ width: 300 }} className="search-input-color" />
                    </div>
                </Col>
            </Row>
            <Card>

                <Row gutter={[16, 16]} className='mt-4 justify-content-between'>
                    <Col sm={4} xs={24} md={4} lg={4} xl={4} >
                        <span className='d-flex'>
                            <div className='notification_first_icon'>
                                <CloseSquareOutlined />
                            </div>
                            <Button type='primary'>Joined New User</Button>
                        </span>
                    </Col>
                    <Col sm={3} xs={24} md={3} lg={3} xl={3} className='ml-1'>
                        <p className='ml-4 mt-3'>March 23, 2013</p>
                    </Col>
                </Row>
                <Row gutter={[16, 16]}>
                    <Col sm={24} xs={24} md={24} lg={24} xl={24}>
                        <p className='notification_first_row_inside_card'> New Registration: Finibus Bonorum et Malorum</p>
                    </Col>
                </Row>
                <Row gutter={[16, 16]}>
                    <Col sm={24} xs={24} md={24} lg={24} xl={24}>
                        <p className='notification_first_row_Para_inside_card'> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </Col>
                </Row>               
                        <hr></hr>
                < NotificationContent />
                < NotificationContent />
                < NotificationContent />
                < NotificationContent />
                < NotificationContent />
            </Card>
        </React.Fragment>
    )

}

export default Notifications;
