import React from 'react';
import { Row, Col, Button } from 'antd';
import { CloseSquareOutlined } from '@ant-design/icons';
import "./Notifications.css";




const NotificationContent = () => {
    return (
        <>
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
                <Col span={10}>
                    <p className='notification_first_row_inside_card'> New Registration: Finibus Bonorum et Malorum</p>
                </Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col span={24}>
                    <p className='notification_first_row_Para_inside_card'> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <hr></hr>

                </Col>
            </Row>

        </>
    );
}

export default NotificationContent;