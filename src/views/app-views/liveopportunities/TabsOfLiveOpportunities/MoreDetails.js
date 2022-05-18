import React from 'react';
import { Row, Col, Button, Card, Input, Select, Checkbox } from 'antd';
import Rectangle from '../Rectangle/Rectangle.png';
import { DownloadOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { liveOpportunity } from 'redux/actions/LiveOpportunity';



const MoreDetails = ({ ...props }) => {

    console.log('props....', props);

    const moreDetails = props.data
    const { Option } = Select;

    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
    }


    return (
        <div>
            <div className='background_color'>

                <div><h3>{moreDetails.title}</h3></div>
                <Card className='snapshot_background_color'>
                    <Row gutter={[16, 16]} className='moredetails_snapshot_first changes'>
                        <Col span={8} >
                            <table style={{ width: '80%' }}>
                                <tr >
                                    <th >Solicitation Number</th>
                                    <td >{moreDetails.solicitationNumber}</td>
                                </tr>
                                <tr className='contact_snapshot'>
                                    <th >Contract Number</th>
                                    <td>{moreDetails && moreDetails.pointOfContact && moreDetails.pointOfContact[0].phone ? moreDetails.pointOfContact[0].phone : ''}</td>
                                </tr>
                                <tr>
                                    <th>Solicitation URL</th>
                                    <td>View Source</td>
                                </tr>
                            </table>
                        </Col>
                        <Col span={8} >
                            <table style={{ width: '100%' }}>
                                <tr >
                                    <th className='mt-5 '>Market Survey Release / Due Date</th>
                                    <td className='mt-5 mb-2'>{moreDetails.postedDate}</td>
                                </tr>
                                <tr>
                                    <th>Solicitation Survey Release / Due Date</th>
                                    <td>{moreDetails.postedDate}</td>
                                </tr>
                                <tr>
                                    <th>Estimated Award Date</th>
                                    <td>{moreDetails.archiveDate}</td>
                                </tr>
                            </table>
                        </Col>
                        <Col span={8} >
                            <table style={{ width: '80%', marginLeft: '60px' }}>
                                <tr >
                                    <th className='mt-5 '>Acquisition Status</th>
                                    <td className='mt-5 mb-2'>W56NGY-16-0-0023</td>
                                </tr>
                                <tr>
                                    <th>Capture Status</th>
                                    <td>Not Determined</td>
                                </tr>
                                <tr>
                                    <th>Capture Manager</th>
                                    <td className='zhejiang'> <Input.Group compact>
                                        <Select defaultValue="Zhejiang">
                                            <Option value="Zhejiang">Zhejiang</Option>
                                            <Option value="Jiangsu">Jiangsu</Option>
                                        </Select>

                                    </Input.Group></td>
                                </tr>
                                <tr>
                                    <th>P'WIN Score</th>
                                    <td>View Source</td>
                                </tr>
                            </table>
                        </Col>
                    </Row>
                </Card>
                <Row>
                    <Col span={6}>
                        <h4 className='ml-3'>Information</h4>
                    </Col>
                </Row>
                <Row gutter={[16, 16]} className='moredetails_snapshot_first changes'>
                    <Col span={0.5}></Col>
                    <Col span={7} >
                        <table style={{ width: '80%' }}>
                            <tr >
                                <th className='mt-5 '>Award Type :</th>
                                <td className='mt-5 mb-2'>{moreDetails.baseType}</td>
                            </tr>
                            <tr>
                                <th>Set Aside :</th>
                                <td>{moreDetails.typeOfSetAside}</td>
                            </tr>
                            <tr>
                                <th>Contract Vehicle :</th>
                                <td>View Source</td>
                            </tr>
                            <tr>
                                <th>NAICS Code(s) :</th>
                                <td>{moreDetails.naicsCode}</td>
                            </tr>
                            <tr>
                                <th>Place of Performance :</th>
                                <td>{moreDetails && moreDetails.placeOfPerformance && moreDetails.placeOfPerformance.city ? moreDetails.placeOfPerformance.city.name : ''}</td>
                            </tr>
                        </table>
                    </Col>
                    <Col span={1}></Col>
                    <Col span={7} >
                        <table style={{ width: '80%' }}>
                            <tr >
                                <th className='mt-5 '>Duration</th>
                                <td className='mt-5 mb-2'>W56NGY-16-0-0023</td>
                            </tr>
                            <tr>
                                <th>Cantract Type</th>
                                <td>Not Determined</td>
                            </tr>
                            <tr>
                                <th>Eat. Award Value</th>
                                <td>View Source</td>
                            </tr>
                        </table>
                    </Col>
                    <Col span={8} >
                        <table style={{ width: '70%', marginLeft: '60px' }}>
                            <tr >
                                <th className='mt-5 '>Customer Orientation</th>
                                <td className='mt-5 mb-2'>PRO RFA</td>
                            </tr>
                            <tr>
                                <th>Customer Office</th>
                                <td>{moreDetails.officeAddress && moreDetails.officeAddress.city ? moreDetails.officeAddress.city : ''}</td>
                            </tr>
                            <tr>
                                <th>Customer Orientation</th>
                                <td> View Source</td>
                            </tr>
                            <tr>
                                <th>Customer Office</th>
                                <td>{moreDetails.officeAddress && moreDetails.officeAddress.city ? moreDetails.officeAddress.city : ''}</td>
                            </tr>
                        </table>
                    </Col>
                </Row>
                < hr style={{ color: "#D2D2D2", marginTop: '25px' }} />
                <Row className='mt-5'>
                    <Col span={10} className='ml-3'>
                        <h5>Description</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, con
                            sectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...</p>
                        <h5 style={{ color: ' #3751FF' }}>Expand</h5>
                    </Col>
                    <Col span={1}></Col>
                    <Col span={8}>
                        <h5>Learn More About Customer</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur </p>
                        <h5 style={{ color: ' #3751FF' }}>Learn More</h5>
                    </Col>
                    <Col span={4} >
                        <img className='Rectangle_img' src={Rectangle} alt="U.S. ARMY" />;
                    </Col>
                </Row>
                <Row>
                    <Col span={16}>
                        <h3 className='ml-3 mt-3'>RFP Intels Analyst Updates</h3>
                        <div className="anttable" >
                            <table style={{ width: '100%', marginLeft: "15px" }}>
                                <tr style={{ height: "80px", backgroundColor: '#EDEDED', borderBottom: "1px solid #CBCBCB" }} >
                                    <th style={{ width: "20%", textAlign: 'center' }}>Date</th>
                                    <th style={{ width: "60%" }}>Description</th>
                                    <th style={{ width: "20%", textAlign: "center" }}>Expand All <Checkbox onChange={onChange}></Checkbox></th>
                                </tr>
                                <tr className='anttable_second_row'>
                                    <td style={{ textAlign: "center" }}>July 14, 2015 </td>
                                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt unt ut labore et dolore magna...</td>
                                    <td style={{ textAlign: "center" }}><Checkbox onChange={onChange}></Checkbox></td>
                                </tr>
                                <tr className='anttable_second_row'>
                                    <td style={{ textAlign: "center" }}>December 29, 2012 </td>
                                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt unt ut labore et dolore magna...</td>
                                    <td style={{ textAlign: "center" }}><Checkbox onChange={onChange}></Checkbox></td>
                                </tr>
                                <tr className='anttable_second_row'>
                                    <td style={{ textAlign: "center" }}>Date </td>
                                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt unt ut labore et dolore magna...</td>
                                    <td style={{ textAlign: "center" }}><Checkbox onChange={onChange}></Checkbox></td>
                                </tr>
                            </table>
                        </div>
                    </Col>
                    <Col span={1}></Col>
                    <Col span={6} className='mt-3'>
                        <h3 >Updates</h3>
                        <div className='Updates_table_heading'>
                            <h5 className='ml-3 mt-1'>May 12, 2021</h5>
                            <p className='updates_table_heading_content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
                            <p className='updates_table_heading_content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
                            <p className='updates_table_heading_content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
                            <p className='updates_table_heading_content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
                            <p className='updates_table_heading_content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
                        </div>

                    </Col>
                </Row>
                <Row className='mt-3'>
                    <Col span={24}>
                        <hr></hr>
                    </Col>
                </Row>
                <Row className='mt-3'>
                    <Col span={18}>
                        <h4 className='ml-3'>Related Documents</h4>
                    </Col>
                    <Col span={6}>
                        <Button className='downloadall_buttons'>Download All</Button>
                    </Col>
                </Row>
                <Row>
                    <Col span={24} className='mt-3 ml-3 mr-3'>
                        <div className="anttable" >
                            <table style={{ width: '100%', }}>
                                <tr style={{ height: "50px", backgroundColor: '#EDEDED', borderBottom: "1px solid #CBCBCB" }} >
                                    <th style={{ width: "40%", paddingLeft: '20px' }}>Name</th>
                                    <th style={{ width: "20%" }}>Date</th>
                                    <th style={{ width: "20%", textAlign: "center" }}>Expand All</th>
                                    <th style={{ width: "5%", textAlign: "center" }}></th>
                                    <th style={{ width: "15%", textAlign: "center" }}></th>
                                </tr>
                                <tr className='anttable_second_row_one'>
                                    <td style={{ paddingLeft: '20px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</td>
                                    <td>December 29, 2012</td>
                                    <td style={{ width: "20%", textAlign: "center" }}>ADFSC2569ANA</td>
                                    <td style={{ textAlign: "center" }}><Checkbox onChange={onChange}></Checkbox></td>
                                    <td><Button className='downloadall_buttons_second'><span>Download <DownloadOutlined /></span></Button></td>
                                </tr>
                                <tr className='anttable_second_row_one'>
                                    <td style={{ paddingLeft: '20px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</td>
                                    <td>December 29, 2012 </td>
                                    <td style={{ width: "20%", textAlign: "center" }}>ADFSC2569ANA</td>
                                    <td style={{ textAlign: "center" }}><Checkbox onChange={onChange}></Checkbox></td>
                                    <td><Button className='downloadall_buttons_second'>Download <DownloadOutlined /></Button></td>
                                </tr>
                                <tr className='anttable_second_row_one'>
                                    <td style={{ paddingLeft: '20px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</td>
                                    <td>December 29, 2012 </td>
                                    <td style={{ width: "20%", textAlign: "center" }}>ADFSC2569ANA</td>
                                    <td style={{ textAlign: "center" }}><Checkbox onChange={onChange}></Checkbox></td>
                                    <td><Button className='downloadall_buttons_second'>Download <DownloadOutlined /></Button></td>
                                </tr>
                                <tr className='anttable_second_row_one'>
                                    <td style={{ paddingLeft: '20px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</td>
                                    <td>December 29, 2012 </td>
                                    <td style={{ width: "20%", textAlign: "center" }}>ADFSC2569ANA</td>
                                    <td style={{ textAlign: "center" }}><Checkbox onChange={onChange}></Checkbox></td>
                                    <td><Button className='downloadall_buttons_second'>Download <DownloadOutlined /></Button></td>
                                </tr>
                                <tr className='anttable_second_row_one'>
                                    <td style={{ paddingLeft: '20px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</td>
                                    <td>December 29, 2012 </td>
                                    <td style={{ width: "20%", textAlign: "center" }}>ADFSC2569ANA</td>
                                    <td style={{ textAlign: "center" }}><Checkbox onChange={onChange}></Checkbox></td>
                                    <td><Button className='downloadall_buttons_second'>Download <DownloadOutlined /></Button></td>
                                </tr>

                            </table>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

const mapStateToProps = ({ liveopportunity }) => {
    const { liveOppotunityData, error, loading } = liveopportunity;
    return { liveOppotunityData, error, loading }
}
const mapDispatchToProps = {
    liveOpportunity
}

export default connect(mapStateToProps, mapDispatchToProps)(MoreDetails)