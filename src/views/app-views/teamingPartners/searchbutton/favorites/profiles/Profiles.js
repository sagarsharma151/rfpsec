import React from "react";
import { Row, Col, Image, Card } from 'antd';
import { MailOutlined, PhoneOutlined, FilePdfOutlined, EnvironmentOutlined } from '@ant-design/icons';

const Profiles = () => {


    return (
        <React.Fragment>
            <Card>
                <div className="background-color pt-2 pb-2 pl-1">
                    <Row gutter={[16, 16]}>
                        <Col sm={24} xs={24} md={20} lg={20} xl={20}>

                            <span className="d-flex justify-content-between pl-2 responsive-header">
                                <h5 className="m-3">Cage Code: 1j8T5 &nbsp;</h5>
                                <h5 className="m-3">Entity Structure: Corporate Entity (Not Tax Exempt)&nbsp;</h5>
                                <h5 className="m-3">DBA: enGenius&nbsp;</h5>
                                <h5 className="m-3">DUNS: 963770409&nbsp;</h5>&nbsp;
                                <h5 className="m-3">DUNS: 963770409</h5>
                            </span>

                        </Col>
                    </Row>
                </div>
                <Row className="mt-3">
                    <Col sm={24} xs={24} md={5} lg={4} xl={4} className="d-flex m-auto">
                        <div className="mb-3">
                            <Image className="image-paint" width={200} src="/img/Rectangle 4290.png"></Image>
                        </div>
                    </Col>
                    <Col sm={24} xs={24} md={10} lg={10} xl={10}>
                        <div className="Capability border-right">
                            <h5><FilePdfOutlined style={{ color: 'red' }} />&nbsp;Capability Brlefing</h5>
                            <p>enGenius Corporate Capability Bried,pdf</p>
                            <h5>Website</h5>
                            <p><a href="/#">http://www.wngwniusinc.com</a> </p>
                            <h5><EnvironmentOutlined />&nbsp;Address</h5>
                            <p>28B Highgate Road, London, NW5 1NS</p>
                            <h5>Locations</h5>
                            <ul className="list-padding-remove">
                                <li>Huntsville, AL, United States</li>
                                <li>Suwance, GA, United States</li>
                                <li>Tampa, Florida, United States</li>
                            </ul>
                        </div>
                    </Col>
                    <Col sm={24} xs={24} md={9} lg={10} xl={10}>
                        <h5>Government Business POC</h5>
                        <span className="d-flex teaming-profile">
                            <h5>randell batman  &nbsp; &nbsp;</h5>
                            <p><MailOutlined />&nbsp;nathan.roberts@example.com &nbsp; &nbsp;</p>
                            <p><PhoneOutlined />&nbsp;+7 (903) 880-91-85 </p>
                        </span>
                        <h5>Government Business POC</h5>
                        <span className="d-flex teaming-profile">
                            <h5>PATRICK WALTON &nbsp; &nbsp;</h5>
                            <p><MailOutlined />&nbsp;nathan.roberts@example.com &nbsp; &nbsp;</p>
                            <p><PhoneOutlined />&nbsp;+7 (903) 880-91-85 </p>
                        </span>
                        <span className="d-flex teaming-profile">
                            <h5>PATRICK WALTON &nbsp; &nbsp;</h5>
                            <p><MailOutlined />&nbsp;nathan.roberts@example.com &nbsp; &nbsp;</p>
                            <p><PhoneOutlined />&nbsp;+7 (903) 880-91-85 </p>
                        </span>
                        <h5>Government Business POC</h5>
                        <span className="d-flex teaming-profile">
                            <h5>randell batman  &nbsp; &nbsp;</h5>
                            <p><MailOutlined />&nbsp;nathan.roberts@example.com &nbsp; &nbsp;</p>
                            <p><PhoneOutlined />&nbsp;+7 (903) 880-91-85 </p>
                        </span>
                    </Col>
                </Row>
            </Card>
        </React.Fragment>
    )
};

export default Profiles;