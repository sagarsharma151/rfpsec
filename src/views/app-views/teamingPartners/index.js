import React from "react";
import { Row, Col, Input, Button, Card } from 'antd';
import navigationConfig from "configs/NavigationConfig";
import utils from 'utils';
import PageHeader from 'components/layout-components/PageHeader';
import { useHistory } from "react-router";
import "./teamingpartner.css"
import { LeftOutlined, StarOutlined } from '@ant-design/icons';

const { Search } = Input;

const TeamingPartners = (props) => {

    const currentRouteInfo = utils.getRouteInfo(navigationConfig, props.location.pathname)


    const onSearch = () => {
        history.push("/app/temaingParters/SearchButton")
    }

    const history = useHistory();

    const handleAdvance = () => {
        history.push("/app/temaingParters/AdvanceButton")
    }

    const handleDashboard = () => {
        history.push("/app/dashboards")
    }

    return (
        <React.Fragment>
            <Row gutter={[16, 16]}>
                <Col sm={24} xs={24} md={24} lg={24} xl={24}>
                    <div className="">
                        <Row>
                            <Col span={12}>
                                <PageHeader display={currentRouteInfo?.breadcrumb} title={currentRouteInfo?.title} />
                                <h2>Teaming Partners</h2>
                            </Col>
                        </Row>
                    </div>
                    <Row gutter={[16, 16]} className="mt-5">
                        <Col sm={24} xs={24} md={16} lg={16} xl={16} className="d-flex">
                            <p className="m-2">Search</p>
                            <Search
                                placeholder="input search text"
                                allowClear
                                enterButton="Search"

                                onSearch={onSearch}
                            />

                        </Col>
                        <Col sm={24} xs={24} md={8} lg={8} xl={8}>

                            <Button className="float-right text-info mb-1"><StarOutlined />Favorites</Button>
                            <Button className="mr-3 float-right text-info" onClick={handleAdvance}>Advanced</Button>
                        </Col>
                    </Row>

                    <Row gutter={[16, 16]}>
                        <Col sm={24} xs={24} md={24} lg={24} xl={24}>
                            <Card className="mt-5 back-dashboard">
                                <Row gutter={[16, 16]}>
                                    <Col sm={24} xs={24} md={4} lg={4} xl={4} className="">
                                        <Button className="back-button" onClick={handleDashboard}><LeftOutlined />Back to Dashboard</Button>
                                    </Col>
                                    <Col sm={24} xs={24} md={20} lg={20} xl={20}>
                                        <p className="ml-5 mt-2">Search for the company you wish to add click "Add to Team"</p>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>

                </Col>
            </Row>
        </React.Fragment>
    )
};

export default TeamingPartners;