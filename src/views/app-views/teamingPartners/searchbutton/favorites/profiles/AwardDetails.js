import React from "react";
import { Row, Col, Button, Radio, Card, Collapse } from 'antd';
import "../../../teamingpartner.css"
import { CloseCircleOutlined } from '@ant-design/icons';

const AwardDetails = () => {

    const { Panel } = Collapse;

    function callback(key) {
        console.log(key);
    }

    const text = (
        <>
            <Row gutter={[16, 16]} style={{ backgroundColor: "#F3F3F3" }}>
                <Col sm={24} xs={24} md={24} lg={24} xl={24}>
                    <div className="table-responsive">
                        <table class="table table-borderless mt-2">
                            <thead className="inner-collapse border">
                                <tr>
                                    <th className="px-4 py-2 inner-collapse" scope="col">Contracting Office</th>
                                    <th className="px-4 py-2 inner-collapse" scope="col">Mod</th>
                                    <th className="px-4 py-2 inner-collapse" scope="col">Reason For Mod</th>
                                    <th className="px-4 py-2 inner-collapse" scope="col">Obligated AMT</th>
                                    <th className="px-4 py-2 inner-collapse" scope="col">Eddective Date</th>
                                    <th className="px-4 py-2 inner-collapse" scope="col">Completion Date</th>
                                    <th className="px-4 py-2 inner-collapse" scope="col">NAICS</th>
                                    <th className="px-4 py-2 inner-collapse" scope="col">Contract Pricing</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="px-4 py-2">W074 ENDIST MOBILE</td>
                                    <td className="px-4 py-2">0</td>
                                    <td className="px-4 py-2">Reason For Mod</td>
                                    <td className="px-4 py-2">$163,148</td>
                                    <td className="px-4 py-2">06/31/2021</td>
                                    <td className="px-4 py-2">08/31/2021</td>
                                    <td className="px-4 py-2">541513</td>
                                    <td className="px-4 py-2">Time and Materials</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2">W074 ENDIST MOBILE</td>
                                    <td className="px-4 py-2">0</td>
                                    <td className="px-4 py-2">Reason For Mod</td>
                                    <td className="px-4 py-2">$163,148</td>
                                    <td className="px-4 py-2">06/31/2021</td>
                                    <td className="px-4 py-2">08/31/2021</td>
                                    <td className="px-4 py-2">541513</td>
                                    <td className="px-4 py-2">Time and Materials</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2">W074 ENDIST MOBILE</td>
                                    <td className="px-4 py-2">0</td>
                                    <td className="px-4 py-2">Reason For Mod</td>
                                    <td className="px-4 py-2">$163,148</td>
                                    <td className="px-4 py-2">06/31/2021</td>
                                    <td className="px-4 py-2">08/31/2021</td>
                                    <td className="px-4 py-2">541513</td>
                                    <td className="px-4 py-2">Time and Materials</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Col>
            </Row>
        </>
    )

    return (
        <React.Fragment>
            <Card>
                <Row gutter={[16, 16]}>
                    <Col sm={24} xs={24} md={24} lg={24} xl={24} className="text-right">

                        <Radio.Group >
                            <Radio.Button className="contract-action-button" value="large">Expand Awards</Radio.Button>
                            <Radio.Button className="contract-action-button" value="default">Collapse Awards</Radio.Button>
                        </Radio.Group>
                        <Button className="contract-action-button ml-3 mb-4">8/16/13 to 8/16/13</Button>
                    </Col>
                </Row>
                <Row gutter={[16, 16]}>
                    <Col sm={24} xs={24} md={4} lg={4} xl={4}>
                        <div className="contract-action-button pt-1 pl-2">
                            <p>Contract Action &nbsp;<CloseCircleOutlined /></p>
                        </div>
                    </Col>
                    <Col sm={24} xs={24} md={4} lg={4} xl={4}>
                        <div className="contract-action-button pt-1 pl-2">
                            <p>Contracting Office Agency &nbsp;<CloseCircleOutlined /></p>
                        </div>
                    </Col>
                </Row>
                <div className="background-color pt-2 pb-2 pl-1">
                    <Row gutter={[16, 16]}>
                        <Col sm={24} xs={24} md={24} lg={24} xl={24}>
                            <Row gutter={[16, 16]} className="Parent-Contract">
                                <Col sm={5} xs={5} md={5} lg={5} xl={5} className="ml-5 pl-4">
                                    <h5 className="ml-5">Parent Contract</h5>
                                </Col>
                                <Col sm={2} xs={2} md={2} lg={2} xl={2}>
                                    <h5>Contract</h5>
                                </Col>
                                <Col sm={3} xs={3} md={3} lg={3} xl={3} className="ml-2">
                                    <h5>Obligated Amt</h5>
                                </Col>
                                <Col sm={3} xs={3} md={3} lg={3} xl={3}>
                                    <h5>Effective Date</h5>
                                </Col>
                                <Col sm={3} xs={3} md={3} lg={3} xl={3}>
                                    <h5>Completion Date</h5>
                                </Col>
                                <Col sm={3} xs={3} md={3} lg={3} xl={3}>
                                    <h5>Set Aside</h5>
                                </Col>
                            </Row>
                            <Collapse defaultActiveKey={['1']} onChange={callback} style={{ backgroundColor: "#3751FF" }}>
                                <Panel header={<>
                                    <span className="d-flex">
                                        <h5 style={{ color: "#fff" }}>Contract Action: Delivery Order &nbsp;</h5>
                                        <div className="expand-number">
                                            <p>9</p>
                                        </div>
                                    </span>
                                </>
                                } key="1">
                                    <Collapse className="corporate-entry">
                                        <Panel header={<>
                                            <span className="d-flex">
                                                <h5>Contracting Office Agency: CORPORATION FOR NATIONAL AND COMMUNITY SERVICE &nbsp;</h5>
                                                <div className="expand-number">
                                                    <p>9</p>
                                                </div>
                                            </span>
                                        </>
                                        } key="1">
                                            <Collapse style={{ backgroundColor: "#F3F3F3" }}>
                                                <Panel header={
                                                    <>
                                                        <div className="table-responsive">
                                                            <table class="table table-bordered">
                                                                <thead>
                                                                    <tr>
                                                                        <th scope="col" className="award-details-pad">GS06F0625Z</th>
                                                                        <th scope="col" className="award-details-pad">W911S015F0006</th>
                                                                        <th scope="col" className="award-details-pad">$1,643,433</th>
                                                                        <th scope="col" className="award-details-pad date-backgrounds">03/26/2021</th>
                                                                        <th scope="col" className="award-details-pad date-backgrounds">07/05/2021</th>
                                                                        <th scope="col" className="award-details-pad">Small Business Set Aside - Total</th>
                                                                    </tr>

                                                                </thead>
                                                                <tbody>

                                                                </tbody>

                                                            </table>
                                                        </div>
                                                    </>
                                                } key="1">
                                                    <p>{text}</p>
                                                </Panel>
                                            </Collapse>
                                            <Collapse style={{ backgroundColor: "#F3F3F3" }}>
                                                <Panel header={
                                                    <>
                                                        <div className="table-responsive">
                                                            <table class="table table-bordered">
                                                                <thead>
                                                                    <tr>
                                                                        <th scope="col" className="award-details-pad">GS06F0625Z</th>
                                                                        <th scope="col" className="award-details-pad">W911S015F0006</th>
                                                                        <th scope="col" className="award-details-pad">$1,643,433</th>
                                                                        <th scope="col" className="award-details-pad date-backgrounds">03/26/2021</th>
                                                                        <th scope="col" className="award-details-pad date-backgrounds">07/05/2021</th>
                                                                        <th scope="col" className="award-details-pad">Small Business Set Aside - Total</th>
                                                                    </tr>

                                                                </thead>
                                                                <tbody>

                                                                </tbody>

                                                            </table>
                                                        </div>
                                                    </>
                                                } key="1">
                                                    <p>{text}</p>
                                                </Panel>
                                            </Collapse>
                                            <Collapse style={{ backgroundColor: "#F3F3F3" }}>
                                                <Panel header={
                                                    <>
                                                        <div className="table-responsive">
                                                            <table class="table table-bordered">
                                                                <thead>
                                                                    <tr>
                                                                        <th scope="col" className="award-details-pad">GS06F0625Z</th>
                                                                        <th scope="col" className="award-details-pad">W911S015F0006</th>
                                                                        <th scope="col" className="award-details-pad">$1,643,433</th>
                                                                        <th scope="col" className="award-details-pad date-backgrounds">03/26/2021</th>
                                                                        <th scope="col" className="award-details-pad date-backgrounds">07/05/2021</th>
                                                                        <th scope="col" className="award-details-pad">Small Business Set Aside - Total</th>
                                                                    </tr>

                                                                </thead>
                                                                <tbody>

                                                                </tbody>

                                                            </table>
                                                        </div>
                                                    </>
                                                } key="1">
                                                    <p>{text}</p>
                                                </Panel>
                                            </Collapse>
                                        </Panel>
                                    </Collapse>
                                    <Collapse className="corporate-entry">
                                        <Panel header={<>
                                            <span className="d-flex">
                                                <h5>Contracting Office Agency: CORPORATION FOR NATIONAL AND COMMUNITY SERVICE &nbsp;</h5>
                                                <div className="expand-number">
                                                    <p>9</p>
                                                </div>
                                            </span>
                                        </>
                                        } key="1">
                                            <Collapse style={{ backgroundColor: "#F3F3F3" }}>
                                                <Panel header={
                                                    <>
                                                        <div className="table-responsive">
                                                            <table class="table table-bordered">
                                                                <thead>
                                                                    <tr>
                                                                        <th scope="col" className="award-details-pad">GS06F0625Z</th>
                                                                        <th scope="col" className="award-details-pad">W911S015F0006</th>
                                                                        <th scope="col" className="award-details-pad">$1,643,433</th>
                                                                        <th scope="col" className="award-details-pad date-backgrounds">03/26/2021</th>
                                                                        <th scope="col" className="award-details-pad date-backgrounds">07/05/2021</th>
                                                                        <th scope="col" className="award-details-pad">Small Business Set Aside - Total</th>
                                                                    </tr>

                                                                </thead>
                                                                <tbody>

                                                                </tbody>

                                                            </table>
                                                        </div>
                                                    </>
                                                } key="1">
                                                    <p>{text}</p>
                                                </Panel>
                                            </Collapse>
                                            <Collapse style={{ backgroundColor: "#F3F3F3" }}>
                                                <Panel header={
                                                    <>
                                                        <div className="table-responsive">
                                                            <table class="table table-bordered">
                                                                <thead>
                                                                    <tr>
                                                                        <th scope="col" className="award-details-pad">GS06F0625Z</th>
                                                                        <th scope="col" className="award-details-pad">W911S015F0006</th>
                                                                        <th scope="col" className="award-details-pad">$1,643,433</th>
                                                                        <th scope="col" className="award-details-pad date-backgrounds">03/26/2021</th>
                                                                        <th scope="col" className="award-details-pad date-backgrounds">07/05/2021</th>
                                                                        <th scope="col" className="award-details-pad">Small Business Set Aside - Total</th>
                                                                    </tr>

                                                                </thead>
                                                                <tbody>

                                                                </tbody>

                                                            </table>
                                                        </div>
                                                    </>
                                                } key="1">
                                                    <p>{text}</p>
                                                </Panel>
                                            </Collapse>
                                            <Collapse style={{ backgroundColor: "#F3F3F3" }}>
                                                <Panel header={
                                                    <>
                                                        <div className="table-responsive">
                                                            <table class="table table-bordered">
                                                                <thead>
                                                                    <tr>
                                                                        <th scope="col" className="award-details-pad">GS06F0625Z</th>
                                                                        <th scope="col" className="award-details-pad">W911S015F0006</th>
                                                                        <th scope="col" className="award-details-pad">$1,643,433</th>
                                                                        <th scope="col" className="award-details-pad date-backgrounds">03/26/2021</th>
                                                                        <th scope="col" className="award-details-pad date-backgrounds">07/05/2021</th>
                                                                        <th scope="col" className="award-details-pad">Small Business Set Aside - Total</th>
                                                                    </tr>

                                                                </thead>
                                                                <tbody>

                                                                </tbody>

                                                            </table>
                                                        </div>
                                                    </>
                                                } key="1">
                                                    <p>{text}</p>
                                                </Panel>
                                            </Collapse>
                                        </Panel>
                                    </Collapse>
                                    <Collapse className="corporate-entry">
                                        <Panel header={<>
                                            <span className="d-flex">
                                                <h5>Contracting Office Agency: CORPORATION FOR NATIONAL AND COMMUNITY SERVICE &nbsp;</h5>
                                                <div className="expand-number">
                                                    <p>9</p>
                                                </div>
                                            </span>
                                        </>
                                        } key="1">
                                            <Collapse style={{ backgroundColor: "#F3F3F3" }}>
                                                <Panel header={
                                                    <>
                                                        <div className="table-responsive">
                                                            <table class="table table-bordered">
                                                                <thead>
                                                                    <tr>
                                                                        <th scope="col" className="award-details-pad">GS06F0625Z</th>
                                                                        <th scope="col" className="award-details-pad">W911S015F0006</th>
                                                                        <th scope="col" className="award-details-pad">$1,643,433</th>
                                                                        <th scope="col" className="award-details-pad date-backgrounds">03/26/2021</th>
                                                                        <th scope="col" className="award-details-pad date-backgrounds">07/05/2021</th>
                                                                        <th scope="col" className="award-details-pad">Small Business Set Aside - Total</th>
                                                                    </tr>

                                                                </thead>
                                                                <tbody>

                                                                </tbody>

                                                            </table>
                                                        </div>
                                                    </>
                                                } key="1">
                                                    <p>{text}</p>
                                                </Panel>
                                            </Collapse>
                                            <Collapse style={{ backgroundColor: "#F3F3F3" }}>
                                                <Panel header={
                                                    <>
                                                        <div className="table-responsive">
                                                            <table class="table table-bordered">
                                                                <thead>
                                                                    <tr>
                                                                        <th scope="col" className="award-details-pad">GS06F0625Z</th>
                                                                        <th scope="col" className="award-details-pad">W911S015F0006</th>
                                                                        <th scope="col" className="award-details-pad">$1,643,433</th>
                                                                        <th scope="col" className="award-details-pad date-backgrounds">03/26/2021</th>
                                                                        <th scope="col" className="award-details-pad date-backgrounds">07/05/2021</th>
                                                                        <th scope="col" className="award-details-pad">Small Business Set Aside - Total</th>
                                                                    </tr>

                                                                </thead>
                                                                <tbody>

                                                                </tbody>

                                                            </table>
                                                        </div>
                                                    </>
                                                } key="1">
                                                    <p>{text}</p>
                                                </Panel>
                                            </Collapse>
                                            <Collapse style={{ backgroundColor: "#F3F3F3" }}>
                                                <Panel header={
                                                    <>
                                                        <div className="table-responsive">
                                                            <table class="table table-bordered">
                                                                <thead>
                                                                    <tr>
                                                                        <th scope="col" className="award-details-pad">GS06F0625Z</th>
                                                                        <th scope="col" className="award-details-pad">W911S015F0006</th>
                                                                        <th scope="col" className="award-details-pad">$1,643,433</th>
                                                                        <th scope="col" className="award-details-pad date-backgrounds">03/26/2021</th>
                                                                        <th scope="col" className="award-details-pad date-backgrounds">07/05/2021</th>
                                                                        <th scope="col" className="award-details-pad">Small Business Set Aside - Total</th>
                                                                    </tr>

                                                                </thead>
                                                                <tbody>

                                                                </tbody>

                                                            </table>
                                                        </div>
                                                    </>
                                                } key="1">
                                                    <p>{text}</p>
                                                </Panel>
                                            </Collapse>
                                        </Panel>
                                    </Collapse>
                                </Panel>
                            </Collapse>
                        </Col>
                    </Row>
                </div>
            </Card>
        </React.Fragment>
    )
};

export default AwardDetails;