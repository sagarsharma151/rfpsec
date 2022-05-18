import React from 'react';
import { Row, Col, Tabs, Button } from 'antd';
import MoreDetails from './MoreDetails';
import RequestBid from './RequestBid';
import PWIN from './Pwin';
import AgencyContact from './AgencyContact';
import TeamingPartners from './TeamingPartners';
import Incumbent from './Incumbent';
import CompanyDocument from './CompanyDocument';

const { TabPane } = Tabs;
function callback(key) {
    console.log(key);
}

const UserProfile = ({ ...props }) => {


    const viewModerData = props.location.state

    return (
        <>
            <React.Fragment>
                <Row gutter={[16, 16]}>
                    <Col xs={24} sm={24} md={24} lg={24} xxl={18}>
                        <div className="live_opportunites_heading">
                            <div><h1>Live Opportunities</h1></div>
                            <div className="live_opportunites_heading_button ">
                                <div><Button className="heading_buttons_more_details">Add to Pipeline</Button></div>
                                <div><Button className="heading_buttons_more_details">Email Opportunity</Button></div>
                                {/* <div><Button className="heading_buttons_more_details">Gate Review Report</Button></div> */}
                            </div>

                        </div>
                    </Col>
                </Row>

                <div className="card-container">
                    <Row gutter={[16, 16]}>
                        <Col span={24}>
                            <Tabs defaultActiveKey="1" type="card" onChange={callback} className='active_tab'>
                                <TabPane tab="Snapshot" key="1" style={{ marginBottom: 0 }} className='tabpannel'>
                                    <MoreDetails data={viewModerData} />
                                </TabPane>
                                <TabPane tab="Request Bid/No Bid Decision Support" key="2">
                                    <RequestBid />
                                </TabPane>
                                <TabPane tab="PWIN%" key="3">
                                    <PWIN />
                                </TabPane>
                                <TabPane tab="Agency Contact" key="4">
                                    <AgencyContact />
                                </TabPane>
                                <TabPane tab="Teaming Partners" key="5">
                                    <TeamingPartners />
                                </TabPane>
                                <TabPane tab="Incumbent" key="6">
                                    <Incumbent />
                                </TabPane>
                                <TabPane tab="Company Document" key="7">
                                    <CompanyDocument />
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