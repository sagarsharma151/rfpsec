import React from "react";
import { Row, Col, Card, Collapse } from 'antd';
import "../../../teamingpartner.css"

const Experience = () => {

    const { Panel } = Collapse;

    function callback(key) {
        console.log(key);
    }

    const text = (
        <>
            <Row gutter={[16, 16]}>
                <Col sm={24} xs={24} md={24} lg={24} xl={24}>
                    <Row gutter={[16, 16]} className="corporate-entry p-1 table-responsive">
                        <Col sm={6} xs={6} md={6} lg={6} xl={6}>
                            <h5 className="pt-2">Contract Role:</h5>
                            <p>Prime</p>
                        </Col>
                        <Col sm={6} xs={6} md={6} lg={6} xl={6}>
                            <h5 className="pt-2">Contract Value:</h5>
                            <p>None  listad</p>
                        </Col>
                        <Col sm={6} xs={6} md={6} lg={6} xl={6}>
                            <h5 className="pt-2">Prime Contract No.:</h5>
                            <p>W911SF - 15 - F - 0012</p>
                        </Col>
                        <Col sm={6} xs={6} md={6} lg={6} xl={6}>
                            <h5 className="pt-2">Sub Contract No.:</h5>
                            <p>None listed</p>
                        </Col>
                    </Row>
                </Col>
                <Col sm={24} xs={24} md={24} lg={24} xl={24} className="corporate-entry p-2">
                    <h5 className="pt-2 pl-1">Description:</h5>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </Col>
            </Row>
        </>
    )
    return (
        <React.Fragment>
            <Card>
                <Row gutter={[16, 16]}>
                    <Col sm={24} xs={24} md={24} lg={24} xl={24}>
                        <h5>Drag a column header and drop it here to group by that column</h5>
                    </Col>
                    <Col sm={24} xs={24} md={24} lg={24} xl={24}>
                        <div className="corporate-entry table-responsive" style={{ paddingLeft: "40px" }}>
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-5 py-2">Title</th>
                                        <th scope="col" className="px-5 py-2">Department</th>
                                        <th scope="col" className="px-5 py-2">Agency</th>
                                        <th scope="col" className="px-5 py-2">Prime Contractor</th>
                                        <th scope="col" className="px-5 py-2">Start</th>
                                        <th scope="col" className="px-5 py-2">Finish</th>
                                        <th scope="col" className="px-5 py-2">Contract Vehicle</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <Collapse onChange={callback}>
                            <Panel header={
                                 <div className="table-responsive">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="experiance-table">BAMCH</th>
                                            <th scope="col" className="experiance-table">DEPT OF DEFENSE</th>
                                            <th scope="col" className="experiance-table">DEPT OF THE ARMY</th>
                                            <th scope="col" className="experiance-table">enGenius</th>
                                            <th scope="col" className="experiance-table">09/29/2020</th>
                                            <th scope="col" className="experiance-table">09/30/2021</th>
                                            <th scope="col" className="experiance-table">GSA // ALLSB - GS-06F-0625Z</th>
                                        </tr>

                                    </thead>
                                </table>
                                </div>
                            } key="1">
                                <p className="left-border-collapse px-3 pt-2">{text}</p>
                            </Panel>
                            <Panel header={
                                <div className="table-responsive">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="experiance-table">BAMCH</th>
                                            <th scope="col" className="experiance-table">DEPT OF DEFENSE</th>
                                            <th scope="col" className="experiance-table">DEPT OF THE ARMY</th>
                                            <th scope="col" className="experiance-table">enGenius</th>
                                            <th scope="col" className="experiance-table">09/29/2020</th>
                                            <th scope="col" className="experiance-table">09/30/2021</th>
                                            <th scope="col" className="experiance-table">GSA // ALLSB - GS-06F-0625Z</th>
                                        </tr>

                                    </thead>
                                </table>
                                </div>
                            } key="2">
                                <p className="left-border-collapse px-3 pt-2">{text}</p>
                            </Panel>
                            <Panel header={
                                <div className="table-responsive">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="experiance-table">BAMCH</th>
                                            <th scope="col" className="experiance-table">DEPT OF DEFENSE</th>
                                            <th scope="col" className="experiance-table">DEPT OF THE ARMY</th>
                                            <th scope="col" className="experiance-table">enGenius</th>
                                            <th scope="col" className="experiance-table">09/29/2020</th>
                                            <th scope="col" className="experiance-table">09/30/2021</th>
                                            <th scope="col" className="experiance-table">GSA // ALLSB - GS-06F-0625Z</th>
                                        </tr>

                                    </thead>
                                </table>
                                </div>
                            } key="3">
                                <p className="left-border-collapse px-3 pt-2">{text}</p>
                            </Panel>
                            <Panel header={
                                <div className="table-responsive">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="experiance-table">BAMCH</th>
                                            <th scope="col" className="experiance-table">DEPT OF DEFENSE</th>
                                            <th scope="col" className="experiance-table">DEPT OF THE ARMY</th>
                                            <th scope="col" className="experiance-table">enGenius</th>
                                            <th scope="col" className="experiance-table">09/29/2020</th>
                                            <th scope="col" className="experiance-table">09/30/2021</th>
                                            <th scope="col" className="experiance-table">GSA // ALLSB - GS-06F-0625Z</th>
                                        </tr>

                                    </thead>
                                </table>
                                </div>
                            } key="3">
                                <p className="left-border-collapse px-3 pt-2">{text}</p>
                            </Panel>
                            <Panel header={
                                <div className="table-responsive">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="experiance-table">BAMCH</th>
                                            <th scope="col" className="experiance-table">DEPT OF DEFENSE</th>
                                            <th scope="col" className="experiance-table">DEPT OF THE ARMY</th>
                                            <th scope="col" className="experiance-table">enGenius</th>
                                            <th scope="col" className="experiance-table">09/29/2020</th>
                                            <th scope="col" className="experiance-table">09/30/2021</th>
                                            <th scope="col" className="experiance-table">GSA // ALLSB - GS-06F-0625Z</th>
                                        </tr>

                                    </thead>
                                </table>
                                </div>
                            } key="3">
                                <p className="left-border-collapse px-3 pt-2">{text}</p>
                            </Panel>
                            <Panel header={
                                <div className="table-responsive">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="experiance-table">BAMCH</th>
                                            <th scope="col" className="experiance-table">DEPT OF DEFENSE</th>
                                            <th scope="col" className="experiance-table">DEPT OF THE ARMY</th>
                                            <th scope="col" className="experiance-table">enGenius</th>
                                            <th scope="col" className="experiance-table">09/29/2020</th>
                                            <th scope="col" className="experiance-table">09/30/2021</th>
                                            <th scope="col" className="experiance-table">GSA // ALLSB - GS-06F-0625Z</th>
                                        </tr>

                                    </thead>
                                </table>
                                </div>
                            } key="3">
                                <p className="left-border-collapse px-3 pt-2">{text}</p>
                            </Panel>
                            <Panel header={
                                <div className="table-responsive">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="experiance-table">BAMCH</th>
                                            <th scope="col" className="experiance-table">DEPT OF DEFENSE</th>
                                            <th scope="col" className="experiance-table">DEPT OF THE ARMY</th>
                                            <th scope="col" className="experiance-table">enGenius</th>
                                            <th scope="col" className="experiance-table">09/29/2020</th>
                                            <th scope="col" className="experiance-table">09/30/2021</th>
                                            <th scope="col" className="experiance-table">GSA // ALLSB - GS-06F-0625Z</th>
                                        </tr>

                                    </thead>
                                </table>
                                </div>
                            } key="3">
                                <p className="left-border-collapse px-3 pt-2">{text}</p>
                            </Panel>
                            <Panel header={
                                <div className="table-responsive">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="experiance-table">BAMCH</th>
                                            <th scope="col" className="experiance-table">DEPT OF DEFENSE</th>
                                            <th scope="col" className="experiance-table">DEPT OF THE ARMY</th>
                                            <th scope="col" className="experiance-table">enGenius</th>
                                            <th scope="col" className="experiance-table">09/29/2020</th>
                                            <th scope="col" className="experiance-table">09/30/2021</th>
                                            <th scope="col" className="experiance-table">GSA // ALLSB - GS-06F-0625Z</th>
                                        </tr>

                                    </thead>
                                </table>
                                </div>
                            } key="3">
                                <p className="left-border-collapse px-3 pt-2">{text}</p>
                            </Panel>
                            <Panel header={
                                <div className="table-responsive">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="experiance-table">BAMCH</th>
                                            <th scope="col" className="experiance-table">DEPT OF DEFENSE</th>
                                            <th scope="col" className="experiance-table">DEPT OF THE ARMY</th>
                                            <th scope="col" className="experiance-table">enGenius</th>
                                            <th scope="col" className="experiance-table">09/29/2020</th>
                                            <th scope="col" className="experiance-table">09/30/2021</th>
                                            <th scope="col" className="experiance-table">GSA // ALLSB - GS-06F-0625Z</th>
                                        </tr>

                                    </thead>
                                </table>
                                </div>
                            } key="3">
                                <p className="left-border-collapse px-3 pt-2">{text}</p>
                            </Panel>
                        </Collapse>
                    </Col>
                </Row>
            </Card>
        </React.Fragment>

    )
};

export default Experience;