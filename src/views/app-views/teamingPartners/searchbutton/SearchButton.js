import React, { useState } from "react";
import { Row, Col, Input, Button, Card, Collapse, Image } from 'antd';
import "../teamingpartner.css"
import { LeftOutlined, StarOutlined, PlusSquareOutlined, CloseCircleOutlined, MailOutlined, PhoneOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { Link, useHistory } from "react-router-dom";


const { Search } = Input;

const { Panel } = Collapse;

const SearchButton = (props) => {


    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };

    const [showResults, setShowResults] = useState(true);
    // const onClick = () => setShowResults(false)
    const onClick = () => {
        setShowResults(!showResults);
    };

    const history = useHistory();

    const handleDashboard = () => {
        history.push("/app/dashboards")
    }
    const handleAdvance = () => {
        history.push("/app/temaingParters/AdvanceButton")
    }

    const text = (
        <>

            <Row gutter={[16, 16]}>
                <Col sm={18} xs={24} md={18} lg={16} xl={18}>
                    <h5>Capability Brlefing</h5>
                    <p>enGenius Corporate Capability Bried,pdf</p>
                    <h5>Website</h5>
                    <p><a href="/#">http://www.wngwniusinc.com</a> </p>
                    <h5>Address</h5>
                    <p>28B Highgate Road, London, NW5 1NS</p>
                    <h5>Locations</h5>
                    <ul className="list-padding-remove">
                        <li>Huntsville, AL, United States</li>
                        <li>Suwance, GA, United States</li>
                        <li>Tampa, Florida, United States</li>
                    </ul>

                    <h5>Government Business POC</h5>
                    <Row gutter={[16, 16]}>
                        <Col sm={24} xs={24} md={24} lg={6} xl={8}>
                            <h5>randell batman</h5>
                        </Col>
                        <Col sm={24} xs={24} md={24} lg={10} xl={8}>
                            <p><MailOutlined />nathan.roberts@example.com</p>
                        </Col>
                        <Col sm={24} xs={24} md={24} lg={8} xl={8}>
                            <p><PhoneOutlined />+7 (903) 880-91-85 </p>
                        </Col>
                    </Row>
                </Col>
                <Col sm={24} xs={24} md={24} lg={8} xl={6} className="d-flex m-auto">
                    <div>
                        <Image className="image-paint" width={200} src="/img/Rectangle 4290.png"></Image>
                    </div>
                </Col>
            </Row>
            <hr></hr>
            <Row gutter={[16, 16]}>
                <Col sm={7} xs={24} md={7} lg={7} xl={7}>
                    <h5>Primary NAICS Code</h5>
                    <ul className="list-padding-remove">
                        <li>541511 - Custom Computer Programming Services</li>

                    </ul>
                </Col>
                <Col sm={7} xs={24} md={7} lg={7} xl={7}>
                    <h5>Primary NAICS Code</h5>
                    <ul className="list-padding-remove">
                        <li>Business Type</li>
                        <li>Business Type</li>
                        <li>Business Type</li>
                        <li>Business Type</li>
                    </ul>
                </Col>
                <Col sm={3} xs={24} md={3} lg={3} xl={3}>
                    <p style={{ color: "#C4C4C4" }} className="mr-1">SBA Certification listed</p>
                </Col>
                <Col sm={24} xs={24} md={7} lg={7} xl={7}>
                    <h5>Contract Vehicles</h5>
                    <p>GSA  ALLSB - Alliant Small Business (ASB)</p>
                    <p>GSA Schedule 70 - GENERAL PURPOSE COMMERCIAL INFORMATION TECHNOLOGY EQUIPMENT, SOFTWARE, AND SERVICES</p>
                </Col>
            </Row>
        </>
    );


    const onSearch = value => console.log(value);

    return (
        <React.Fragment>
            <Row>
                <Col sm={24} xs={24} md={12} lg={12} xl={12}>
                    <h2>Teaming Partners /Company #1</h2>
                </Col>
            </Row>
            <Row gutter={[16, 16]} className="mt-5">
                <Col sm={24} xs={24} md={16} lg={16} xl={16} className="d-flex">
                    <p className="m-2">Search</p>
                    <Search
                        className="input-color"
                        placeholder="input search text"
                        allowClear
                        enterButton="Search"
                        size="large"
                        onSearch={onSearch}
                    />

                </Col>
                <Col sm={24} xs={24} md={8} lg={8} xl={8}>

                    <div className="float-right"><Button onClick={toggleClass} className={isActive ? 'favorite favoriteactive' : null}>
                        <StarOutlined />Favorites</Button></div>
                    {
                        !showResults &&
                        <Button className="show-hide-button" onClick={handleAdvance}>Advance</Button>
                    }
                    {
                        showResults &&
                        <Button className="show-hide-button" onClick={onClick}>Reset</Button>
                    }
                    {/* <Button className="mr-3 float-right" onClick={onClick}><RedoOutlined />Reset</Button> */}
                </Col>
            </Row>
            <Card className="mt-5 back-dashboard">
                <Row gutter={[16, 16]}>
                    <Col sm={4} xs={4} md={4} lg={4} xl={4}>
                        <Button className="back-button" onClick={handleDashboard}><LeftOutlined />Back to Dashboard</Button>
                    </Col>

                </Row>
            </Card>
            {showResults ?
                <div>

                    <Row gutter={[16, 16]}>
                        <Col sm={8} xs={24} md={6} lg={6} xl={6}>
                            <div className="business-type">
                                <p>Business Type: Minority Owned Business &nbsp;<CloseCircleOutlined /></p>
                            </div>
                        </Col>
                        <Col sm={8} xs={24} md={6} lg={6} xl={6}>
                            <div className="business-type">
                                <p>Business Type: Minority Owned Business &nbsp;<CloseCircleOutlined /></p>
                            </div>
                        </Col>
                        <Col sm={8} xs={24} md={6} lg={6} xl={6}>
                            <div className="business-type">
                                <p>Business Type: Minority Owned Business &nbsp;<CloseCircleOutlined /></p>
                            </div>
                        </Col>
                    </Row>
                    <Row gutter={[16, 16]}>
                        <Col sm={24} xs={24} md={6} lg={6} xl={6}>
                            <h5>Refine</h5>
                            <Card>
                                <h5 className="p-1">Profile</h5>
                                <h5 className="p-1 mt-4">Business Type</h5>
                                <table className="table advance-table-font">

                                    <tbody>
                                        <tr>
                                            <th className="pt-2 pb-2"><a href="/#">Contracts and Grants</a></th>
                                            <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                        </tr>
                                        <tr>
                                            <th className="pt-2 pb-2"><a href="/#">For Profit Organization</a></th>
                                            <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                        </tr>
                                        <tr>
                                            <th className="pt-2 pb-2"><a href="/#">Grants</a></th>
                                            <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                        </tr>
                                        <tr>
                                            <th className="pt-2 pb-2"><a href="/#">Self Certified Small Disadvantages Business</a></th>
                                            <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                        </tr>
                                        <tr>
                                            <th className="pt-2 pb-2"><a href="/#">Limited Liability Company</a></th>
                                            <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                        </tr>
                                        <tr>
                                            <th className="pt-2 pb-2"><a href="/#">Woman Owned Business</a></th>
                                            <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                        </tr>
                                        <tr>
                                            <th className="pt-2 pb-2"><a href="/#">Subchapter S Corporation</a></th>
                                            <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                        </tr>
                                        <tr>
                                            <th className="pt-2 pb-2"><a href="/#">Non-Profit Organization</a></th>
                                            <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                        </tr>
                                        <tr>
                                            <th className="pt-2 pb-2"><a href="/#">Minority Owned Business</a></th>
                                            <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                        </tr>
                                        <tr>
                                            <th className="pt-2 pb-2"><a href="/#">Woman Owned Small Business</a></th>
                                            <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                        </tr>
                                    </tbody>
                                </table>
                                <Button className="more-plus"><PlusSquareOutlined />More</Button>
                                <h5 className="p-1 mt-4">Business Type</h5>
                                <table className="table advance-table-font">

                                    <tbody>
                                        <tr>
                                            <th className="pt-2 pb-2"><a href="/#">Contracts and Grants</a></th>
                                            <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                        </tr>
                                        <tr>
                                            <th className="pt-2 pb-2"><a href="/#">For Profit Organization</a></th>
                                            <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                        </tr>
                                        <tr>
                                            <th className="pt-2 pb-2"><a href="/#">Grants</a></th>
                                            <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                        </tr>
                                        <tr>
                                            <th className="pt-2 pb-2"><a href="/#">Self Certified Small Disadvantages Business</a></th>
                                            <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                        </tr>
                                        <tr>
                                            <th className="pt-2 pb-2"><a href="/#">Limited Liability Company</a></th>
                                            <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                        </tr>
                                        <tr>
                                            <th className="pt-2 pb-2"><a href="/#">Woman Owned Business</a></th>
                                            <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                        </tr>
                                        <tr>
                                            <th className="pt-2 pb-2"><a href="/#">Subchapter S Corporation</a></th>
                                            <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                        </tr>
                                        <tr>
                                            <th className="pt-2 pb-2"><a href="/#">Non-Profit Organization</a></th>
                                            <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                        </tr>
                                        <tr>
                                            <th className="pt-2 pb-2"><a href="/#">Minority Owned Business</a></th>
                                            <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                        </tr>
                                        <tr>
                                            <th className="pt-2 pb-2"><a href="/#">Woman Owned Small Business</a></th>
                                            <th className="pt-2 pb-2"><a href="/#">358,792</a></th>
                                        </tr>
                                    </tbody>
                                </table>
                                <Button className="more-plus"><PlusSquareOutlined />More</Button>
                            </Card>
                        </Col>
                        <Col sm={24} xs={24} md={18} lg={18} xl={18}>
                            <h5>Results 17</h5>
                            <Card className="card-color">
                                <Row gutter={[16, 16]}>
                                    <Col sm={16} xs={16} md={16} lg={16} xl={16}>
                                        <h4><StarOutlined className={isActive ? 'favorite' : null}
                                            onClick={toggleClass} /> &nbsp;Engenius Consulting Group INC. </h4>
                                    </Col>
                                    <Col sm={8} xs={24} md={8} lg={8} xl={8}>
                                        <Button className="back-button mr-2 mb-2"><PlusSquareOutlined />Add to opportunity</Button>
                                        <Link to="/app/TeamingProfile"><Button type="primary" className="ml-1 mb-2">Profile<ArrowRightOutlined /></Button></Link>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={24} xs={24} md={24} lg={24} xl={24} >
                                        <Collapse collapsible="header" className="collapse-color">
                                            <Panel header="Cage Code: 1j8T5 Entity  &nbsp; &nbsp; Structure:Corporate Entity (Not Tax Exempt)  &nbsp; &nbsp; DBA: enGenius" key="1">
                                                <p>{text}</p>
                                            </Panel>
                                        </Collapse>
                                    </Col>
                                </Row>
                            </Card>
                            <Card className="card-color">
                                <Row>
                                    <Col sm={17} xs={17} md={17} lg={17} xl={17}>
                                        <h4><StarOutlined className={isActive ? 'favorite' : null}
                                            onClick={toggleClass} /> &nbsp; Engenius Consulting Group INC.</h4>
                                    </Col>
                                    <Col sm={7} xs={7} md={7} lg={7} xl={7}>
                                        <p>1525 Perimeter Parkway, Huntsville, AL</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={24} xs={24} md={24} lg={24} xl={24}>
                                        <Collapse collapsible="header" className="collapse-color">
                                            <Panel header="Cage Code: 1j8T5 Entity  &nbsp; &nbsp; Structure:Corporate Entity (Not Tax Exempt)  &nbsp; &nbsp; DBA: enGenius" key="1">
                                                <p>{text}</p>
                                            </Panel>
                                        </Collapse>
                                    </Col>
                                </Row>
                            </Card>
                            <Card className="card-color">
                                <Row>
                                    <Col sm={17} xs={17} md={17} lg={17} xl={17}>
                                        <h4><StarOutlined className={isActive ? 'favorite' : null}
                                            onClick={toggleClass} /> &nbsp; Engenius Consulting Group INC.</h4>
                                    </Col>
                                    <Col sm={7} xs={7} md={7} lg={7} xl={7}>
                                        <p>1525 Perimeter Parkway, Huntsville, AL</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={24} xs={24} md={24} lg={24} xl={24}>
                                        <Collapse collapsible="header" className="collapse-color">
                                            <Panel header="Cage Code: 1j8T5 Entity  &nbsp; &nbsp; Structure:Corporate Entity (Not Tax Exempt)  &nbsp; &nbsp; DBA: enGenius" key="1">
                                                <p>{text}</p>
                                            </Panel>
                                        </Collapse>
                                    </Col>
                                </Row>
                            </Card>
                            <Card className="card-color">
                                <Row>
                                    <Col sm={17} xs={17} md={17} lg={17} xl={17}>
                                        <h4><StarOutlined className={isActive ? 'favorite' : null}
                                            onClick={toggleClass} /> &nbsp; Engenius Consulting Group INC.</h4>
                                    </Col>
                                    <Col sm={7} xs={7} md={7} lg={7} xl={7}>
                                        <p>1525 Perimeter Parkway, Huntsville, AL</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={24} xs={24} md={24} lg={24} xl={24}>
                                        <Collapse collapsible="header" className="collapse-color">
                                            <Panel header="Cage Code: 1j8T5 Entity  &nbsp; &nbsp; Structure:Corporate Entity (Not Tax Exempt)  &nbsp; &nbsp; DBA: enGenius" key="1">
                                                <p>{text}</p>
                                            </Panel>
                                        </Collapse>
                                    </Col>
                                </Row>
                            </Card>
                            <Card className="card-color">
                                <Row>
                                    <Col sm={17} xs={17} md={17} lg={17} xl={17}>
                                        <h4><StarOutlined className={isActive ? 'favorite' : null}
                                            onClick={toggleClass} /> &nbsp; Engenius Consulting Group INC.</h4>
                                    </Col>
                                    <Col sm={7} xs={7} md={7} lg={7} xl={7}>
                                        <p>1525 Perimeter Parkway, Huntsville, AL</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={24} xs={24} md={24} lg={24} xl={24}>
                                        <Collapse collapsible="header" className="collapse-color">
                                            <Panel header="Cage Code: 1j8T5 Entity  &nbsp; &nbsp; Structure:Corporate Entity (Not Tax Exempt)  &nbsp; &nbsp; DBA: enGenius" key="1">
                                                <p>{text}</p>
                                            </Panel>
                                        </Collapse>
                                    </Col>
                                </Row>
                            </Card>
                            <Card className="card-color">
                                <Row>
                                    <Col sm={17} xs={17} md={17} lg={17} xl={17}>
                                        <h4><StarOutlined className={isActive ? 'favorite' : null}
                                            onClick={toggleClass} /> &nbsp; Engenius Consulting Group INC.</h4>
                                    </Col>
                                    <Col sm={7} xs={7} md={7} lg={7} xl={7}>
                                        <p>1525 Perimeter Parkway, Huntsville, AL</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={24} xs={24} md={24} lg={24} xl={24}>
                                        <Collapse collapsible="header" className="collapse-color">
                                            <Panel header="Cage Code: 1j8T5 Entity  &nbsp; &nbsp; Structure:Corporate Entity (Not Tax Exempt)  &nbsp; &nbsp; DBA: enGenius" key="1">
                                                <p>{text}</p>
                                            </Panel>
                                        </Collapse>
                                    </Col>
                                </Row>
                            </Card>
                            <Card className="card-color">
                                <Row>
                                    <Col sm={17} xs={17} md={17} lg={17} xl={17}>
                                        <h4><StarOutlined className={isActive ? 'favorite' : null}
                                            onClick={toggleClass} /> &nbsp; Engenius Consulting Group INC.</h4>
                                    </Col>
                                    <Col sm={7} xs={7} md={7} lg={7} xl={7}>
                                        <p>1525 Perimeter Parkway, Huntsville, AL</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={24} xs={24} md={24} lg={24} xl={24}>
                                        <Collapse collapsible="header" className="collapse-color">
                                            <Panel header="Cage Code: 1j8T5 Entity  &nbsp; &nbsp; Structure:Corporate Entity (Not Tax Exempt)  &nbsp; &nbsp; DBA: enGenius" key="1">
                                                <p>{text}</p>
                                            </Panel>
                                        </Collapse>
                                    </Col>
                                </Row>
                            </Card>

                        </Col>
                    </Row>
                </div> : null}
        </React.Fragment>
    )
};

export default SearchButton;