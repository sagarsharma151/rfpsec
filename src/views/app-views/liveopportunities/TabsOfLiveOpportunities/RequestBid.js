import React from 'react';
import { Button, Row, Col, Card, Checkbox, Radio, Select } from 'antd';
import { SnippetsOutlined, PlusOutlined, DeleteOutlined, FormOutlined, UndoOutlined, CheckOutlined } from '@ant-design/icons';

const RequestBid = () => {

    const { Option } = Select;
    // //  const [op]
    //     const [option, setOption] = useState("red");
    //     const optionclick = ()=>{
    //         setOption("green")
    //     }
    const handleChange = (value) => (
        console.log(value)
    )
    //     useEffect(()=>{
    //       if(option==="1"){
    //         document.getElementById("myDiv").style.backgroundColor = "red";
    //       }
    //     },[option])


    return (
        <React.Fragment>
            <Card>
                <div className='request-background pl-2 pr-2'>
                    <Row gutter={[16, 16]}>
                        <Col sm={16} xs={16} md={16} lg={16} xl={16}>
                            <span className='d-flex'>
                                <Button className='mr-2' type='primary'>Take Snapshot</Button>
                                <Button><Checkbox className='text-info align-items-center pb-1 edit-button'>Edit </Checkbox></Button>
                                <Button className='ml-2 text-info'><PlusOutlined />Add</Button>
                            </span>
                        </Col>
                        <Col sm={8} xs={8} md={8} lg={8} xl={8}>
                            <span className='d-flex float-right align-items-baseline'>
                                <h5>Rating</h5>
                                <ul className='live-list-style'>
                                    <li style={{ backgroundColor: "#FF6666", color: "#fff" }}>1</li>
                                    <li style={{ backgroundColor: "#FBBC3D", color: "#fff" }}>2</li>
                                    <li style={{ backgroundColor: "#31317A", color: "#fff" }}>3</li>
                                    <li style={{ backgroundColor: "#2C6BD8", color: "#fff" }}>4</li>
                                    <li style={{ backgroundColor: "#42AF54", color: "#fff" }}>5</li>
                                </ul>
                                <Button className='mr-2 text-info'><UndoOutlined />Reset</Button>
                                <Button className='text-info'><CheckOutlined />Save</Button>
                            </span>
                        </Col>

                    </Row>
                </div>
            </Card>
            <Row gutter={[16, 16]}>
                <Col sm={10} xs={10} md={10} lg={10} xl={10}>
                    <h5>Description</h5>
                </Col>
                <Col sm={3} xs={3} md={3} lg={3} xl={3}>
                    <h5>Notes </h5>
                </Col>
                <Col sm={3} xs={3} md={3} lg={3} xl={3}>
                    <h5>Rating</h5>
                </Col>
                <Col sm={3} xs={3} md={3} lg={3} xl={3}>
                    <h5>Weight</h5>
                </Col>
                <Col sm={5} xs={5} md={5} lg={5} xl={5}>
                    <h5>Score</h5>
                </Col>
            </Row>
            <Card>
                <Row gutter={[16, 16]}>
                    <Col sm={10} xs={10} md={10} lg={10} xl={10}>
                        <h5>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
                            duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</h5>
                        <Select id='myDiv' defaultValue="0" onChange={handleChange} style={{ width: 500 }}>
                            <Option value="0" className='bg-light'>Select your option and Set rating....</Option>
                            <Option value="1" className='select-option' ><div className='select-option' style={{ paddingBottom: "10px", paddingLeft: "10px" }}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </div></Option>
                            <Option value="2" className='select-option1'><div className='select-option1' style={{ paddingBottom: "10px", paddingLeft: "10px" }}>Counter to core business and corporate decisions</div></Option>
                            <Option value="3" className='select-option2'>
                                <div className='select-option2' style={{ paddingBottom: "10px", paddingLeft: "10px" }}> Somewhat counter to our core business and corporate decisions</div></Option>
                            <Option value="4" className='select-option3'><div className='select-option3' style={{ paddingBottom: "10px", paddingLeft: "10px" }}>Neutral to core business and corporate decisions</div></Option>
                            <Option value="6" className='select-option4'><div className='select-option4' style={{ paddingBottom: "10px", paddingLeft: "10px" }}>Very close to our core business and corporate decisions</div></Option>
                            <Option value="5" className='select-option'><div className='select-option' style={{ paddingBottom: "10px", paddingLeft: "10px" }}>Full aligned to our core business and corporate decisions</div></Option>
                        </Select>
                    </Col>
                    <Col sm={3} xs={3} md={3} lg={3} xl={3}>
                        <h5><SnippetsOutlined /> </h5>
                    </Col>
                    <Col sm={3} xs={3} md={3} lg={3} xl={3}>
                        <h5><div className='one-background'>1</div></h5>
                    </Col>
                    <Col sm={3} xs={3} md={3} lg={3} xl={3}>
                        <h5><div className='seven-background'>7</div></h5>
                    </Col>
                    <Col sm={5} xs={5} md={5} lg={5} xl={5}>
                        <span>
                            <Radio.Group>
                                <Radio.Button className='bg-danger text-white' value="large">50</Radio.Button>
                                <Radio.Button className='bg-danger text-white' value="default">70</Radio.Button>
                            </Radio.Group>
                            <span><DeleteOutlined className='pl-5 pr-r' /><FormOutlined className='pl-5 pr-4' /></span>
                        </span>
                    </Col>
                </Row>
            </Card>
            <Card>
                <Row gutter={[16, 16]}>
                    <Col sm={10} xs={10} md={10} lg={10} xl={10}>
                        <h5>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
                            duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</h5>
                        <Select id='myDiv' defaultValue="0" onChange={(e) => handleChange(e)} style={{ width: 500 }}>
                            <Option value="0" className='bg-light'>Select your option and Set rating....</Option>
                            <Option value="1" className='select-option' ><div className='select-option' style={{ paddingBottom: "10px", paddingLeft: "10px" }}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </div></Option>
                            <Option value="2" className='select-option1'><div className='select-option1' style={{ paddingBottom: "10px", paddingLeft: "10px" }}>Counter to core business and corporate decisions</div></Option>
                            <Option value="3" className='select-option2'>
                                <div className='select-option2' style={{ paddingBottom: "10px", paddingLeft: "10px" }}> Somewhat counter to our core business and corporate decisions</div></Option>
                            <Option value="4" className='select-option3'><div className='select-option3' style={{ paddingBottom: "10px", paddingLeft: "10px" }}>Neutral to core business and corporate decisions</div></Option>
                            <Option value="6" className='select-option4'><div className='select-option4' style={{ paddingBottom: "10px", paddingLeft: "10px" }}>Very close to our core business and corporate decisions</div></Option>
                            <Option value="5" className='select-option'><div className='select-option' style={{ paddingBottom: "10px", paddingLeft: "10px" }}>Full aligned to our core business and corporate decisions</div></Option>
                        </Select>
                    </Col>
                    <Col sm={3} xs={3} md={3} lg={3} xl={3}>
                        <h5><SnippetsOutlined /> </h5>
                    </Col>
                    <Col sm={3} xs={3} md={3} lg={3} xl={3}>
                        <h5><div style={{ backgroundColor: "#42AF54", width: "fit-content", padding: "0px 10px", color: '#fff' }}>1</div></h5>
                    </Col>
                    <Col sm={3} xs={3} md={3} lg={3} xl={3}>
                        <h5><div className='seven-background'>7</div></h5>
                    </Col>
                    <Col sm={5} xs={5} md={5} lg={5} xl={5}>
                        <span>
                            <Radio.Group>
                                <Radio.Button style={{ backgroundColor: "#42AF54", color: "#fff" }} value="large">50</Radio.Button>
                                <Radio.Button style={{ backgroundColor: "#42AF54", color: "#fff" }} value="default">70</Radio.Button>
                            </Radio.Group>
                            <span><DeleteOutlined className='pl-5 pr-r' /><FormOutlined className='pl-5 pr-4' /></span>
                        </span>
                    </Col>
                </Row>
            </Card>
            <Card>
                <Row gutter={[16, 16]}>
                    <Col sm={10} xs={10} md={10} lg={10} xl={10}>
                        <h5>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
                            duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</h5>
                        <Select id='myDiv' defaultValue="0" onChange={(e) => handleChange(e)} style={{ width: 500 }}>
                            <Option value="0" className='bg-light'>Select your option and Set rating....</Option>
                            <Option value="1" className='select-option' ><div className='select-option' style={{ paddingBottom: "10px", paddingLeft: "10px" }}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </div></Option>
                            <Option value="2" className='select-option1'><div className='select-option1' style={{ paddingBottom: "10px", paddingLeft: "10px" }}>Counter to core business and corporate decisions</div></Option>
                            <Option value="3" className='select-option2'>
                                <div className='select-option2' style={{ paddingBottom: "10px", paddingLeft: "10px" }}> Somewhat counter to our core business and corporate decisions</div></Option>
                            <Option value="4" className='select-option3'><div className='select-option3' style={{ paddingBottom: "10px", paddingLeft: "10px" }}>Neutral to core business and corporate decisions</div></Option>
                            <Option value="6" className='select-option4'><div className='select-option4' style={{ paddingBottom: "10px", paddingLeft: "10px" }}>Very close to our core business and corporate decisions</div></Option>
                            <Option value="5" className='select-option'><div className='select-option' style={{ paddingBottom: "10px", paddingLeft: "10px" }}>Full aligned to our core business and corporate decisions</div></Option>
                        </Select>
                    </Col>
                    <Col sm={3} xs={3} md={3} lg={3} xl={3}>
                        <h5><SnippetsOutlined /> </h5>
                    </Col>
                    <Col sm={3} xs={3} md={3} lg={3} xl={3}>
                        <h5><div className='seven-background'>0</div></h5>
                    </Col>
                    <Col sm={3} xs={3} md={3} lg={3} xl={3}>
                        <h5><div className='seven-background'>7</div></h5>
                    </Col>
                    <Col sm={5} xs={5} md={5} lg={5} xl={5}>
                        <span>
                            <Radio.Group>
                                <Radio.Button className='bg-danger text-white' value="large">50</Radio.Button>
                                <Radio.Button className='bg-danger text-white' value="default">70</Radio.Button>
                            </Radio.Group>
                            <span><DeleteOutlined className='pl-5 pr-r' /><FormOutlined className='pl-5 pr-4' /></span>
                        </span>
                    </Col>
                </Row>
            </Card>
            <Card>
                <Row gutter={[16, 16]}>
                    <Col sm={10} xs={10} md={10} lg={10} xl={10}>
                        <h5>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
                            duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</h5>
                        <Select id='myDiv' defaultValue="0" onChange={(e) => handleChange(e)} style={{ width: 500 }}>
                            <Option value="0" className='bg-light'>Select your option and Set rating....</Option>
                            <Option value="1" className='select-option' ><div className='select-option' style={{ paddingBottom: "10px", paddingLeft: "10px" }}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </div></Option>
                            <Option value="2" className='select-option1'><div className='select-option1' style={{ paddingBottom: "10px", paddingLeft: "10px" }}>Counter to core business and corporate decisions</div></Option>
                            <Option value="3" className='select-option2'>
                                <div className='select-option2' style={{ paddingBottom: "10px", paddingLeft: "10px" }}> Somewhat counter to our core business and corporate decisions</div></Option>
                            <Option value="4" className='select-option3'><div className='select-option3' style={{ paddingBottom: "10px", paddingLeft: "10px" }}>Neutral to core business and corporate decisions</div></Option>
                            <Option value="6" className='select-option4'><div className='select-option4' style={{ paddingBottom: "10px", paddingLeft: "10px" }}>Very close to our core business and corporate decisions</div></Option>
                            <Option value="5" className='select-option'><div className='select-option' style={{ paddingBottom: "10px", paddingLeft: "10px" }}>Full aligned to our core business and corporate decisions</div></Option>
                        </Select>
                    </Col>
                    <Col sm={3} xs={3} md={3} lg={3} xl={3}>
                        <h5><SnippetsOutlined /> </h5>
                    </Col>
                    <Col sm={3} xs={3} md={3} lg={3} xl={3}>
                        <h5><div className='one-background'>1</div></h5>
                    </Col>
                    <Col sm={3} xs={3} md={3} lg={3} xl={3}>
                        <h5><div className='seven-background'>7</div></h5>
                    </Col>
                    <Col sm={5} xs={5} md={5} lg={5} xl={5}>
                        <span>
                            <Radio.Group>
                                <Radio.Button style={{ backgroundColor: "#42AF54", color: "#fff" }} value="large">50</Radio.Button>
                                <Radio.Button style={{ backgroundColor: "#42AF54", color: "#fff" }} value="default">70</Radio.Button>
                            </Radio.Group>
                            <span><DeleteOutlined className='pl-5 pr-r' /><FormOutlined className='pl-5 pr-4' /></span>
                        </span>
                    </Col>
                </Row>
            </Card>
            <Card>
                <Row gutter={[16, 16]}>
                    <Col sm={10} xs={10} md={10} lg={10} xl={10}>
                        <h5>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
                            duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</h5>
                        <Select id='myDiv' defaultValue="0" onChange={(e) => handleChange(e)} style={{ width: 500 }}>
                            <Option value="0" className='bg-light'>Select your option and Set rating....</Option>
                            <Option value="1" className='select-option' ><div className='select-option' style={{ paddingBottom: "10px", paddingLeft: "10px" }}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </div></Option>
                            <Option value="2" className='select-option1'><div className='select-option1' style={{ paddingBottom: "10px", paddingLeft: "10px" }}>Counter to core business and corporate decisions</div></Option>
                            <Option value="3" className='select-option2'>
                                <div className='select-option2' style={{ paddingBottom: "10px", paddingLeft: "10px" }}> Somewhat counter to our core business and corporate decisions</div></Option>
                            <Option value="4" className='select-option3'><div className='select-option3' style={{ paddingBottom: "10px", paddingLeft: "10px" }}>Neutral to core business and corporate decisions</div></Option>
                            <Option value="6" className='select-option4'><div className='select-option4' style={{ paddingBottom: "10px", paddingLeft: "10px" }}>Very close to our core business and corporate decisions</div></Option>
                            <Option value="5" className='select-option'><div className='select-option' style={{ paddingBottom: "10px", paddingLeft: "10px" }}>Full aligned to our core business and corporate decisions</div></Option>
                        </Select>
                    </Col>
                    <Col sm={3} xs={3} md={3} lg={3} xl={3}>
                        <h5><SnippetsOutlined /> </h5>
                    </Col>
                    <Col sm={3} xs={3} md={3} lg={3} xl={3}>
                        <h5><div className='one-background'>1</div></h5>
                    </Col>
                    <Col sm={3} xs={3} md={3} lg={3} xl={3}>
                        <h5><div className='seven-background'>7</div></h5>
                    </Col>
                    <Col sm={5} xs={5} md={5} lg={5} xl={5}>
                        <span>
                            <Radio.Group>
                                <Radio.Button className='bg-danger text-white' value="large">50</Radio.Button>
                                <Radio.Button className='bg-danger text-white' value="default">70</Radio.Button>
                            </Radio.Group>
                            <span><DeleteOutlined className='pl-5 pr-r' /><FormOutlined className='pl-5 pr-4' /></span>
                        </span>
                    </Col>
                </Row>
            </Card>
        </React.Fragment>
    );
}
export default RequestBid;