import React from 'react';
import { Row, Col, Tabs } from 'antd';
import Profile from './tabs/Profile';
import Users from './tabs/Users';
import Subscription from './tabs/Subscription';
import "./UserProfile.css"
import SettingProfile from './tabs/Settings';

const { TabPane } = Tabs;
function callback(key) {
    console.log(key);
}

const UserProfile = () => {

    return (
        <>
            <React.Fragment>
                <div className="card-container">
                    <Row gutter={[16, 16]}>
                        <Col span={24}>
                            <Tabs defaultActiveKey="1" type="card" onChange={callback} className='active_tab'>
                                <TabPane tab="Profile" key="1" style={{ marginBottom: 0 }} className='tabpannel'>
                                    <Profile />
                                </TabPane>
                                <TabPane tab="Users" key="2">
                                    <Users />
                                </TabPane>
                                <TabPane tab="Subscription" key="3">
                                   <Subscription />
                                </TabPane>
                                <TabPane tab="Settings" key="4">
                                    <SettingProfile />
                                </TabPane>
                            </Tabs>
                        </Col>
                    </Row>
                </div>
            </React.Fragment>
        </>
    )
};

export default UserProfile;