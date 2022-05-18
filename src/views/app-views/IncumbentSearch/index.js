import React from 'react';
import { Card, Row, Col, Input } from 'antd';
import { ControlOutlined } from '@ant-design/icons';
import "./incumbent.css";

const { Search } = Input;

const IncumbentSearch = () => {

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
                <Col span={12}>
                    <h2>Incumbent Search</h2>
                </Col>
                <Col span={12}>
                    <div style={{ textAlign: 'right', marginBottom: 15 }}>
                        <Search  suffix={suffix}  placeholder="Search" onSearch={onSearch} style={{ width: 300 }} className="search-input-color"/>
                    </div>
                </Col>
            </Row>
            <Card>

                <h4 className="heading-incumbent mt-3 pl-3">838224 : NAVY:NAVWAR HQ SINGLE IDIQ (SBA) - INFOORMATION TECHNOLOGY SERVICE MANAGEMENT (ITSM) SOLUTIONS</h4>
                <Row gutter={[16, 16]}>
                    <Col sm={24} xs={24} md={8} lg={8} xl={8}>
                        <div className='coloum-background m-2 p-2'>
                            <h5>Customer Organization</h5>
                            <div className='inner-heading'>
                                <p>NAVY: NAVWAR: NAVWAR HQ</p>
                            </div>
                            <h5>Customer Office</h5>
                            <div className='inner-heading'>
                                <p>NIWC PCIFIC</p>
                            </div>
                            <h5>Contracting Organization</h5>
                            <div className='inner-heading'>
                                <p>NAVY: NAVWAR: NAVWAR HQ</p>
                            </div>
                            <h5>Contracting Office</h5>
                            <div className='inner-heading'>
                                <p>NIWC PACIFIC</p>
                            </div>
                            <h5>Awardee</h5>
                            <div className='inner-heading'>
                                <p>AGILE DEFENSE, INC. (N6600117D0125)</p>
                            </div>
                            <h5>Award Value</h5>
                            <div className='inner-heading'>
                                <p>$23,445,267</p>
                            </div>
                            <h5>Offers Received</h5>
                            <div className='inner-heading'>
                                <p>4</p>
                            </div>
                            <h5>Contract Duration</h5>
                            <div className='inner-heading'>
                                <p>5 Yr. Total - 5 Yr, Base</p>
                            </div>
                            <h5>POP Start/End Date</h5>
                            <div className='inner-heading'>
                                <p>4/5/2017 to 4/4/2022</p>
                            </div>
                            <h5>Contract Vehicle</h5>
                            <div className='inner-heading'>
                                <p>ITSM</p>
                            </div>
                            <h5>Commodity/Service Code</h5>
                            <div className='inner-heading'>
                                <p>NAICS 541330: ENGINEERING SERVICES</p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={24} xs={24} md={8} lg={8} xl={8}>
                        <div className='coloum-background m-2 p-2'>
                            <h5>Award Type</h5>
                            <div className='inner-heading'>
                                <p>IDIQ</p>
                            </div>
                            <h5>Contract Type</h5>
                            <div className='inner-heading'>
                                <p>CPFF</p>
                            </div>
                            <h5>Facility Clearance</h5>
                            <div className='inner-heading'>
                                <p>Undetermined</p>
                            </div>
                            <h5>Set Aside</h5>
                            <div className='inner-heading'>
                                <p>Total - SBA</p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={24} xs={24} md={8} lg={8} xl={8}>
                        <div className='coloum-background m-2 p-2'>
                            <h5>Acquisition Status</h5>
                            <div className='inner-heading'>
                                <p>Awarded</p>
                            </div>
                            <h5>Solocitation Number</h5>
                            <div className='inner-heading'>
                                <p>N6600116R0098</p>
                            </div>
                            <h5>Solicitation Release Date</h5>
                            <div className='inner-heading'>
                                <p>4/26/2021</p>
                            </div>
                            <h5>Solicitation Due Date</h5>
                            <div className='inner-heading'>
                                <p>5/5/2021</p>
                            </div>
                            <h5>Award Date</h5>
                            <div className='inner-heading'>
                                <p>10/6/2021</p>
                            </div>
                            <h5>Opp Create Date</h5>
                            <div className='inner-heading'>
                                <p>12/8/2021</p>
                            </div>
                            <h5>Opp Update Date</h5>
                            <div className='inner-heading'>
                                <p>9/8/2021</p>
                            </div>
                            <h5>Capture Status</h5>
                            <div className='inner-heading'>
                                <p>Did Not Pursue</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <hr></hr>
                <Row gutter={[16, 16]}>
                    <Col sm={24} xs={24} md={24} lg={24} xl={24}>
                        <h5>Scope</h5>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non
                            deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est
                            sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non
                            deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                    </Col>
                </Row>
            </Card>
        </React.Fragment>
    )

}

export default IncumbentSearch;
