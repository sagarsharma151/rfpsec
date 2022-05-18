import React, {useState} from "react";
import { Row, Col, Button, Tabs } from 'antd';
import { StarOutlined } from '@ant-design/icons';
import "../../../teamingpartner.css";
import Profiles from "./Profiles";
import AwardDetails from "./AwardDetails";
import Experience from "./Experience";
import AwardSummary from "./AwardSummary";

const TeamingProfile = () => {

    const { TabPane } = Tabs;

    function callback(key) {
        console.log(key);
    }

    const [favorites, setFavorite] = useState("red");
    const handleClick = () => {
        setFavorite(favorites);
      }


    return (
        <React.Fragment>
            <Row>
                <Col  sm={24} xs={24} md={12} lg={12} xl={12}>
                    <h2>Teaming Partners /  Engenius Consulting Group INC.</h2>
                </Col>
            </Row>
            <Row gutter={[16, 16]} className="mt-3">
                <Col sm={16} xs={24} md={16} lg={16} xl={16}>
                    <span style={{ display: "flex" }}>
                        <h4 className="mt-1"><StarOutlined 
                        
                        onClick={()=>handleClick()}
                        color={favorites ? 'red': 'blue'}
                        /> &nbsp;Engenius Consulting Group INC.</h4>
                        <Button className="contract-action-button ml-5">Division: CORPORATE HEADQUARTERS</Button>
                    </span>
                </Col>
            </Row>
            <Row gutter={[16, 16]} className="mt-3">
                <Col sm={24} xs={24} md={24} lg={24} xl={24}>
            <Tabs onChange={callback} type="card" >
                <TabPane tab="Profile" key="1" className='tabpannel'>
                    <Profiles />
                </TabPane>
                <TabPane tab="Award Summary" key="2">
                <AwardSummary />
                </TabPane>
                <TabPane tab="Award Details" key="3">
                <AwardDetails />
                </TabPane>
                <TabPane tab="Experience" key="4">
                    <Experience />
                </TabPane>
            </Tabs>
            </Col>
            </Row>
        </React.Fragment>
    )
};

export default TeamingProfile;