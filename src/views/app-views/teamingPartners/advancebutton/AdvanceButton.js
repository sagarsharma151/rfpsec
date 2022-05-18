import React, { useState } from "react";
import { useHistory } from "react-router";
import { Row, Col, Input, Button, Card } from 'antd';
import navigationConfig from "configs/NavigationConfig";
import utils from 'utils';
import PageHeader from 'components/layout-components/PageHeader';
import "../teamingpartner.css"
import { LeftOutlined, StarOutlined, RedoOutlined, PlusSquareOutlined, CloseCircleOutlined } from '@ant-design/icons';

const { Search } = Input;

const AdvanceButton = (props) => {

    const [advancereset, setAdvancereset] = useState(true)

    const onClick = () =>{
        setAdvancereset(false)
    }

    const history = useHistory();

    const onDashboard = () =>{
        history.push("/app/dashboards")
    }

    const currentRouteInfo = utils.getRouteInfo(navigationConfig, props.location.pathname)
    console.log('currentRouteInfo', currentRouteInfo);

    const onSearch = () => {
        history.push("/app/temaingParters/SearchButton")
    }

    return (
        <React.Fragment>
            <Row>
                <Col sm={24} xs={24} md={24} lg={24} xl={24}>
                    <Row>
                        <Col span={12}>
                            <PageHeader display={currentRouteInfo?.breadcrumb} title={currentRouteInfo?.title} />
                            <h2>Teaming Partners</h2>
                        </Col>
                    </Row>
                    <Row gutter={[16, 16]} className="mt-5">
                        <Col sm={24} xs={24} md={16} lg={16} xl={16} className="d-flex">
                            <p className="m-2">Search</p>
                            <Search
                                placeholder="input search text"
                                allowClear
                                enterButton="Search"
                                size="large"
                                onSearch={onSearch}
                            />

                        </Col>
                        <Col sm={24} xs={24} md={8} lg={8} xl={8}>

                            <Button className="float-right"><StarOutlined />Favorites</Button>
                            <Button className="mr-3 float-right" onClick={onClick}><RedoOutlined />Reset</Button>
                        </Col>
                    </Row>
                    <Card className="mt-5 back-dashboard">
                        <Row gutter={[16, 16]}>
                            <Col sm={4} xs={4} md={4} lg={4} xl={4}>
                                <Button className="back-button" onClick={() => onDashboard()}><LeftOutlined />Back to Dashboard</Button>
                            </Col>
                        </Row>
                    </Card>
                    { advancereset ?  
                    <Card>
                        <Row gutter={[16, 16]}>
                            <Col sm={24} xs={24} md={6} lg={6} xl={6}>
                                <div className="business-type">
                                    <p>Business Type: Minority Owned Business &nbsp;<CloseCircleOutlined /></p>
                                </div>
                            </Col>
                            <Col sm={24} xs={24} md={6} lg={6} xl={6}>
                                <div className="business-type">
                                    <p>Business Type: Minority Owned Business &nbsp;<CloseCircleOutlined /></p>
                                </div>
                            </Col>
                            <Col sm={24} xs={24} md={6} lg={6} xl={6}>
                                <div className="business-type">
                                    <p>Business Type: Minority Owned Business &nbsp;<CloseCircleOutlined /></p>
                                </div>
                            </Col>
                        </Row>
                        <h4 className="heading-advance mt-3">Advanced</h4>
                        <Row gutter={[16, 16]}>
                            <Col sm={24} xs={24} md={12} lg={12} xl={12} className="vertical-border">
                                <h3 className="p-1">Filter by company profile</h3>
                                <Row gutter={[16, 16]} className="mt-5">
                                    <Col sm={12} xs={24} md={12} lg={12} xl={12}>
                                        <h5 className="p-1">Business Type</h5>
                                        <table className="table advance-table-font">
                                            <tbody>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">Minerity Owned Bueiness</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">For Profil Organization</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">Self Certified Small Disadvantaged Business</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">Limited Liability Comapny</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">Woman Owned Small Business</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">Hispanic American Owned</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">Subchapter S Corporation</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <Button className="more-plus"><PlusSquareOutlined />More</Button>
                                    </Col>
                                    <Col sm={12} xs={24} md={12} lg={12} xl={12}>
                                        <h5 className="p-1">Primary NAICS</h5>
                                        <table className="table">
                                            <tbody>
                                                <tr className="advance-button-tr">
                                                    <th className="pt-2 pb-2"><a href="/#">[blank]</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">541611 - Adminstrative management and General m...</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">236200 - Commercial and Institutional Building Const..</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">541511 - Custom Computer Programming Services</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">541330 - Engineering Services</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">541512 - Computer Systems Design Services</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">561720 - Janitorial Services</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">238210 - Electrical Contracters and Other Wining Inst...</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">541519 - Other Computer Related Services</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">611430 - Professional and Management Development..</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <Button className="more-plus"><PlusSquareOutlined />More</Button>
                                    </Col>
                                </Row>
                                <Row gutter={[16, 16]} className="mt-5">
                                    <Col sm={12} xs={24} md={12} lg={12} xl={12}>
                                        <h5 className="p-1">NAICS Code</h5>
                                        <table className="table">
                                            <tbody>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">Minerity Owned Bueiness</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">For Profil Organization</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">Self Certified Small Disadvantaged Business</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">Limited Liability Comapny</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">Woman Owned Small Business</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">Hispanic American Owned</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">Subchapter S Corporation</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <Button className="more-plus"><PlusSquareOutlined />More</Button>
                                    </Col>
                                    <Col sm={12} xs={24} md={12} lg={12} xl={12}>
                                        <h5 className="p-1">PSC Code</h5>
                                        <table className="table">
                                            <tbody>
                                                <tr className="advance-button-tr">
                                                    <th className="pt-2 pb-2"><a href="/#">[blank]</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">541611 - Adminstrative management and General m...</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">236200 - Commercial and Institutional Building Const..</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">541511 - Custom Computer Programming Services</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">541330 - Engineering Services</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">541512 - Computer Systems Design Services</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">561720 - Janitorial Services</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">238210 - Electrical Contracters and Other Wining Inst...</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">541519 - Other Computer Related Services</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">611430 - Professional and Management Development..</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <Button className="more-plus"><PlusSquareOutlined />More</Button>
                                    </Col>
                                </Row>
                                <Row gutter={[16, 16]} className="mt-5">
                                    <Col sm={12} xs={24} md={12} lg={12} xl={12}>
                                        <h5 className="p-1">SBA Certifications</h5>
                                        <table className="table">
                                            <tbody>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">Minerity Owned Bueiness</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">For Profil Organization</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">Self Certified Small Disadvantaged Business</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <Button className="more-plus"><PlusSquareOutlined />More</Button>
                                    </Col>
                                    <Col sm={12} xs={24} md={12} lg={12} xl={12}>
                                        <h5 className="p-1">Socio-Economic Status<span><Button>Company Profile</Button></span></h5>
                                        <table className="table">
                                            <tbody>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">Minerity Owned Bueiness</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">For Profil Organization</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">Self Certified Small Disadvantaged Business</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <Button className="more-plus"><PlusSquareOutlined />More</Button>
                                    </Col>
                                </Row>
                                <Row gutter={[16, 16]} className="mt-5">
                                    <Col sm={12} xs={24} md={12} lg={12} xl={12}>
                                        <h5 className="p-1">Core Competencies<span><Button>Company Profile</Button></span></h5>
                                        <table className="table">
                                            <tbody>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">Minerity Owned Bueiness</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">For Profil Organization</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">Self Certified Small Disadvantaged Business</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">Limited Liability Comapny</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">Woman Owned Small Business</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">Hispanic American Owned</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">Subchapter S Corporation</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <Button className="more-plus"><PlusSquareOutlined />More</Button>
                                    </Col>
                                    <Col sm={12} xs={24} md={12} lg={12} xl={12}>
                                        <h5 className="p-1">Corporate Certification<span><Button>Company Profile</Button></span></h5>
                                        <table className="table">

                                            <tbody>
                                                <tr className="advance-button-tr">
                                                    <th className="pt-2 pb-2"><a href="/#">[blank]</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <Button className="more-plus"><PlusSquareOutlined />More</Button>
                                    </Col>
                                </Row>
                                <Row gutter={[16, 16]} className="mt-5">
                                    <Col sm={12} xs={24} md={12} lg={12} xl={12}>
                                        <h5 className="p-1">Contact Vehicles<span><Button>Company Profile</Button></span></h5>
                                        <table className="table">

                                            <tbody>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">Minerity Owned Bueiness</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">For Profil Organization</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>

                                            </tbody>
                                        </table>
                                        <Button className="more-plus"><PlusSquareOutlined />More</Button>
                                    </Col>
                                    <Col sm={12} xs={24} md={12} lg={12} xl={12}>
                                        <h5 className="p-1">Locations<span><Button>Company Profile</Button></span></h5>
                                        <table className="table">

                                            <tbody>
                                                <tr className="advance-button-tr">
                                                    <th className="pt-2 pb-2"><a href="/#">[blank]</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">541611 - Adminstrative management and General m...</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">236200 - Commercial and Institutional Building Const..</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>

                                            </tbody>
                                        </table>
                                        <Button className="more-plus"><PlusSquareOutlined />More</Button>
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm={24} xs={24} md={12} lg={12} xl={12}>
                                <h3 className="p-1">Filter by award data</h3>
                                <Row gutter={[16, 16]} className="mt-5">
                                    <Col sm={12} xs={24} md={12} lg={12} xl={12}>
                                        <h5 className="p-1">Agency</h5>
                                        <table className="table">
                                            <tbody>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">Minerity Owned Bueiness</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">For Profil Organization</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">Self Certified Small Disadvantaged Business</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">Limited Liability Comapny</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">Woman Owned Small Business</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">Hispanic American Owned</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">Subchapter S Corporation</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <Button className="more-plus"><PlusSquareOutlined />More</Button>
                                    </Col>
                                    <Col sm={12} xs={24} md={12} lg={12} xl={12}>
                                        <h5 className="p-1">Contracting Office Agency</h5>
                                        <table className="table">
                                            <tbody>
                                                <tr className="advance-button-tr">
                                                    <th className="pt-2 pb-2"><a href="/#">[blank]</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">541611 - Adminstrative management and General m...</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">236200 - Commercial and Institutional Building Const..</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">541511 - Custom Computer Programming Services</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">541330 - Engineering Services</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">541512 - Computer Systems Design Services</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">561720 - Janitorial Services</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">238210 - Electrical Contracters and Other Wining Inst...</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">541519 - Other Computer Related Services</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">611430 - Professional and Management Development..</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <Button className="more-plus"><PlusSquareOutlined />More</Button>
                                    </Col>
                                </Row>
                                <Row gutter={[16, 16]} className="mt-5">
                                    <Col sm={12} xs={24} md={12} lg={12} xl={12}>
                                        <h5 className="p-1">Contracting Office</h5>
                                        <table className="table">
                                            <tbody>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">Minerity Owned Bueiness</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">For Profil Organization</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">Self Certified Small Disadvantaged Business</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">Limited Liability Comapny</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">Woman Owned Small Business</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">Hispanic American Owned</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">Subchapter S Corporation</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <Button className="more-plus"><PlusSquareOutlined />More</Button>
                                    </Col>
                                    <Col sm={12} xs={24} md={12} lg={12} xl={12}>
                                        <h5 className="p-1">Contracting Office Agency</h5>
                                        <table className="table">
                                            <tbody>
                                                <tr className="advance-button-tr">
                                                    <th className="pt-2 pb-2"><a href="/#">[blank]</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">541611 - Adminstrative management and General m...</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">236200 - Commercial and Institutional Building Const..</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">541511 - Custom Computer Programming Services</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">541330 - Engineering Services</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">541512 - Computer Systems Design Services</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">561720 - Janitorial Services</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">238210 - Electrical Contracters and Other Wining Inst...</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">541519 - Other Computer Related Services</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">611430 - Professional and Management Development..</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <Button className="more-plus"><PlusSquareOutlined />More</Button>
                                    </Col>
                                </Row>
                                <Row gutter={[16, 16]} className="mt-5">
                                    <Col sm={12} xs={24} md={12} lg={12} xl={12}>
                                        <h5 className="p-1">PSC Code</h5>
                                        <table className="table">
                                            <tbody>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">Minerity Owned Bueiness</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">For Profil Organization</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">Self Certified Small Disadvantaged Business</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <Button className="more-plus"><PlusSquareOutlined />More</Button>
                                    </Col>
                                    <Col sm={12} xs={24} md={12} lg={12} xl={12}>
                                        <h5 className="p-1">Types of Set-Aside</h5>
                                        <table className="table">
                                            <tbody>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">Minerity Owned Bueiness</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">For Profil Organization</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">Self Certified Small Disadvantaged Business</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <Button className="more-plus"><PlusSquareOutlined />More</Button>
                                    </Col>
                                </Row>
                                <Row gutter={[16, 16]} className="mt-5">
                                    <Col sm={12} xs={24} md={12} lg={12} xl={12}>
                                        <h5 className="p-1">Contact Action Type</h5>
                                        <table className="table">
                                            <tbody>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">Minerity Owned Bueiness</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">For Profil Organization</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">Self Certified Small Disadvantaged Business</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <Button className="more-plus"><PlusSquareOutlined />More</Button>
                                    </Col>
                                    <Col sm={12} xs={24} md={12} lg={12} xl={12}>
                                        <h5 className="p-1">Type of Contact Pricing</h5>
                                        <table className="table">
                                            <tbody>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">Minerity Owned Bueiness</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">For Profil Organization</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">Self Certified Small Disadvantaged Business</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <Button className="more-plus"><PlusSquareOutlined />More</Button>
                                    </Col>
                                </Row>
                                <Row gutter={[16, 16]} className="mt-5">
                                    <Col sm={12} xs={24} md={12} lg={12} xl={12}>
                                        <h5 className="p-1">Socio Economic Indicator</h5>
                                        <table className="table">

                                            <tbody>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">Minerity Owned Bueiness</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">For Profil Organization</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">Self Certified Small Disadvantaged Business</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <Button className="more-plus"><PlusSquareOutlined />More</Button>
                                    </Col>
                                    <Col sm={12} xs={24} md={12} lg={12} xl={12}>
                                        <h5 className="p-1">Minority Owned</h5>
                                        <table className="table">

                                            <tbody>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">Minerity Owned Bueiness</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">For Profil Organization</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                                <tr>
                                                    <th className="pt-2 pb-2"><a href="/#">Self Certified Small Disadvantaged Business</a></th>
                                                    <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <Button className="more-plus"><PlusSquareOutlined />More</Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Card>
                    : null}
                </Col>
            </Row>
        </React.Fragment>
    )
};

export default AdvanceButton;