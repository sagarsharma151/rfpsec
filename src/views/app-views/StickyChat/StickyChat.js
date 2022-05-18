import React, { useState } from 'react';
import { Card, Row, Col, Input, Button, Menu, Dropdown, Form, Select } from 'antd';
import { DownOutlined, SendOutlined, PaperClipOutlined, MoreOutlined, PlusOutlined, CopyOutlined, CameraOutlined, SmileOutlined, CheckCircleOutlined, FolderOpenOutlined, FileOutlined, AudioOutlined, EllipsisOutlined, MessageOutlined, CloudServerOutlined } from '@ant-design/icons';
import './StickyChat.css';
import firstchat from './ImgFolder/firstchat.png';
import lucyrobin from './ImgFolder/lucyrobin.png';
import david from './ImgFolder/david.png';
import jared from './ImgFolder/jared.png';
// import InnerAppLayout from 'layouts/inner-app-layout';
// import ChatMenu from '../apps/chat/ChatMenu';
// import ChatContent from '../apps/chat/ChatContent';



const { Option } = Select;
const StickyChat = () => {
    const [show, setShow] = useState(true)
    const clickChange = () => {
        setShow(!show)
    }

   

    
    // const chatCard = [
    //     {
    //         id: 0,
    //         imgSrc: lucyrobin,
    //         name: 'Luy Robin',
    //         firsticon: <EllipsisOutlined />,
    //         para: "last online 5 hours",
    //         nextcol: "3 days ago",
    //         nextpara: "Cicero famously orated against his political opponent Lucius Sergius Catilina.",
    //         icon: <CloudServerOutlined />,
    //         lastline: 'Video (x3)'
    //     },
    //     {
    //         id: 1,
    //         imgSrc: lucyrobin,
    //         name: 'david Amrosa',
    //         firsticon: <EllipsisOutlined />,
    //         para: "last online 5 hours",
    //         nextcol: "3 days ago",
    //         nextpara: "Cicero famously orated against his political opponent Lucius Sergius Catilina.",
    //         icon: <CloudServerOutlined />,
    //         lastline: 'Video (x3)'
    //     },
    //     {
    //         id: 2,
    //         imgSrc: firstchat ,
    //         name: 'david Amrosa',
    //         firsticon: <EllipsisOutlined />,
    //         para: "last online 5 hours",
    //         nextcol: "3 days ago",
    //         nextpara: "Cicero famously orated against his political opponent Lucius Sergius Catilina.",
    //         icon: <CloudServerOutlined />,
    //         lastline: 'Video (x3)'
    //     },
    // ]
    // console.log("chatCard",chatCard);

    const menu = (
        <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    1st menu item
                </a>
            </Menu.Item>
            <Menu.Item icon={<DownOutlined />} disabled>
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    2nd menu item (disabled)
                </a>
            </Menu.Item>
            <Menu.Item disabled>
                <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                    3rd menu item (disabled)
                </a>
            </Menu.Item>
            <Menu.Item danger>a danger item</Menu.Item>
        </Menu>

    );
    const onChange = e => {
        console.log(e);
    };
    const onFinish = values => {
        console.log('Received values of form: ', values);
    };

    return (
        <React.Fragment>
            {/* <InnerAppLayout
            	sideContent={<ChatMenu {...props}/>}
				mainContent={<ChatContent {...props}/>}
				sideContentWidth={450}
				sideContentGutter={false}
				border
             /> */}
            <Row>
                <Col span={12}>
                    <h4>Chats</h4>
                </Col>
                <Col span={12}>

                </Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col span={24}><hr></hr></Col>
            </Row>
            <Row gutter={[16, 16]} className='mt-3'>
                <Col span={8} className='firstpart_of_chat'>
                    <div className='chatpage_first_col'>
                        <div>
                            <h2>Chats</h2>
                            <Dropdown overlay={menu}>
                                <a href=" /" className="chats_dropdown_button" onClick={e => e.preventDefault()}>
                                    Recent Chats <DownOutlined />
                                </a>
                            </Dropdown>
                        </div>

                        <div className='mt-2 '>
                            <Button type='primary'><PlusOutlined />Create new Chat</Button>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <Form name="complex-form" onFinish={onFinish} labelCol={{ span: 8 }} wrapperCol={{ span: 24 }}>

                            <Form.Item >
                                <Input.Group compact>
                                    <Form.Item
                                        name={['address', 'street']}
                                        noStyle
                                        rules={[{ required: true, message: 'Street is required' }]}
                                    >
                                        <Input style={{ width: '70%' }} placeholder="Search" />
                                    </Form.Item>
                                    <Form.Item
                                        name={['address', 'province']}
                                        noStyle
                                        rules={[{ required: true, message: 'Province is required' }]}
                                    >
                                        <Select placeholder="Message" style={{ width: '30%' }}>

                                            <Option value="Zhejiang">Zhejiang</Option>
                                            <Option value="Jiangsu">Jiangsu</Option>
                                        </Select>
                                    </Form.Item>

                                </Input.Group>
                            </Form.Item>

                        </Form>
                    </div>
                    <Card className='stickychat_first_col_render' hoverable={true}>
                        <div className='chatfirstcol_card'>
                            <div style={{ display: 'flex' }}>
                                <div className='sticky_first_chat_img'><img src={lucyrobin} alt="Loading..." className='firstimg_dirimg'></img></div>
                                <div><h4 className='nika_jerrardo_name'>Luy Robin</h4>
                                    <p className='nika_para'><EllipsisOutlined />Writes </p>
                                </div>
                            </div>
                            <div className='mt-2'>1 minutes ago</div>
                        </div>
                        <p className='mt-2'>Most of its text is made up from sections 1.10.32–3 of Cicero's De finibus bonorum et malorum (On the Boundaries of Goods and Evils; finibus may also be translated as purposes). </p>

                    </Card>
                    <Card className='stickychat_first_col_render' hoverable={true}>
                        <div className='chatfirstcol_card'>
                            <div style={{ display: 'flex' }}>
                                <div className='sticky_first_chat_img'><img src={jared} alt="Loading..." className='firstimg_dirimg'></img></div>
                                <div><h4 className='nika_jerrardo_name'>Jared Sunn</h4>
                                    <p className='nika_para'><MessageOutlined />records voice message </p>
                                </div>
                            </div>
                            <div className='mt-2'>1 minutes ago</div>
                        </div>
                        <p className='mt-2'> <AudioOutlined />Voice message (01:15)  </p>
                        <div style={{ display: "flex" }}>
                            <div className='david_amrosa_div_jared'>
                                <div className='CloudServerOutlined_icon_jared'><FileOutlined /></div>
                                <div className='mt-1'>Files (x2)</div>

                            </div>
                            <div className='david_amrosa_div_jared2'>
                                <div className='CloudServerOutlined_icon'><FolderOpenOutlined /></div>
                                <div className='mt-1'>Video (x3)</div>

                            </div>

                        </div>


                    </Card>
                    <Card className='stickychat_first_col_render' hoverable={true}>
                        <div className='chatfirstcol_card'>
                            <div style={{ display: 'flex' }}>
                                <div className='sticky_first_chat_img'><img src={firstchat} alt="Loading..." className='firstimg_dirimg'></img></div>
                                <div><h4 className='nika_jerrardo_name'>Nika Jerrardo</h4>
                                    <p className='nika_para'>last online 5 hours ago </p>
                                </div>
                            </div>
                            <div className='mt-2'>3 days ago</div>
                        </div>
                        <p className='mt-2'>Cicero famously orated against his political opponent Lucius Sergius Catilina. </p>

                    </Card>
                    <Card className='stickychat_first_col_render' hoverable={true}>
                        <div className='chatfirstcol_card'>
                            <div style={{ display: 'flex' }}>
                                <div className='sticky_first_chat_img'><img src={david} alt="Loading..." className='firstimg_dirimg'></img></div>
                                <div><h4 className='nika_jerrardo_name'>david Amrosa</h4>
                                    <p className='nika_para'>last online 5 hours ago </p>
                                </div>
                            </div>
                            <div className='mt-2'>3 days ago</div>
                        </div>
                        <p className='mt-2'>Cicero famously orated against his political opponent Lucius Sergius Catilina. </p>
                        <div className='david_amrosa_div'>
                            <div className='CloudServerOutlined_icon'><CloudServerOutlined /></div>
                            <div className='mt-1'>Video (x3)</div>

                        </div>

                    </Card>

                    {/* experiment of array card method */}
                    {/* {
                        chatCard.map((curElm) =>
                        <Card style={{ width: '100%', borderRadius: '8px' }} hoverable={true} key={curElm.id} >
                            {console.log("curElm.imgSrc",curElm.imgSrc)}
                            <div className='chatfirstcol_card'>
                                <div style={{ display: 'flex' }}>
                                    <div className='sticky_first_chat_img' ><img src={curElm.imgSrc} alt="Loading..." className='firstimg_dirimg'/></div>
                                    <div><h4 className='nika_jerrardo_name'>{curElm.name}</h4>
                                    <div style={{display:'flex'}}>
                                        <div>{curElm.firsticon} </div> 
                                        <div>
                                        <p className='nika_para'>{curElm.para} </p>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-2'>{curElm.nextcol}</div>
                            </div>
                            <p className='mt-2'>{curElm.nextpara} </p>
                            <div className='david_amrosa_div'>
                                <div className='CloudServerOutlined_icon'>{curElm.icon}</div>
                                <div className='mt-1'> {curElm.lastline} </div>

                            </div>
                        </Card>
                        )
                    } */}
                    {/* id: 0,
            imgSrc: './ImgFolder/david.png',
            name: 'david Amrosa',
            para: "last online 5 hours AgencyContact",
            nextcol: "3 days ago",
            nextpara: "Cicero famously orated against his political opponent Lucius Sergius Catilina.",
            icon: <CloudServerOutlined />,
            lastline: 'Video (x3)' */}
                    {/* experiment of array card method */}
                </Col>

                <Col span={16} className='mt-2'>
                    <div className='sticky_chat_first_card'>
                        <div className='sticky_chat_first_div_inside'>
                            <div className='nika_first_img_div'>
                                <div className='sticky_first_chat_img'><img src={firstchat} alt="Loading..." className='firstimg_dirimg'></img></div>
                                <div><h4 className='nika_jerrardo_name'>Nika Jerrardo</h4>
                                    <p className='nika_para'>last online 5 hours ago</p>
                                </div>
                            </div>
                            <div className='commondiv_icon'>
                                <div className='paperclip_nika_icon'><PaperClipOutlined rotate={180} /></div>
                                <div className='paperclip_nika_icon ml-3'><MoreOutlined /></div>
                            </div>
                        </div>
                    </div>
                    <div className='sticky_chat_first_card_chat_box'>
                        {/* <div className='sticky_chat_first_div_inside'>
                            <div className='nika_first_img_div'>
                                <div className='sticky_first_chat_img_chating'><img src={firstchat} alt="Loading..." className='firstimg_dirimg'></img></div>
                                <div>
                                    <div className='inside_first_chat_inbox'></div>
                                    <p className='nika_para'>last online 5 hours ago</p>
                                </div>
                            </div>
                            <div className='commondiv_icon'>
                                <div className='paperclip_nika_icon'><PaperClipOutlined rotate={180} /></div>
                                <div className='paperclip_nika_icon ml-3'><MoreOutlined /></div>
                            </div>
                        </div> */}
                        <Row gutter={[16, 16]}>
                            <Col span={2} className='sticky_first_chat_img_chating'>
                                <img src={firstchat} alt="Loading..." className='firstimg_dirimg_chat'></img>
                            </Col>
                            <Col span={13}>
                                <div className='chating_box_withconversation'>
                                    <p>Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application.
                                    </p>
                                </div>
                                <div className='before_chating_box_withconversation1'>
                                    <div className='chating_box_withconversation1'>
                                        <p>Can I send you files?</p></div>
                                    <div className='can_i_send_div'><EllipsisOutlined /></div>
                                </div>
                                <div className='days_ago4'>4 days ago</div>
                            </Col>
                            <Col span={1} className='nick_chat_ellipsis'><EllipsisOutlined /></Col>
                        </Row>
                        <Row gutter={[16, 16]}>
                            <Col span={13}></Col>
                            <Col span={11}>
                                <div className='response_from_other_server'>
                                    <div className='can_i_send_div1'><EllipsisOutlined /></div>
                                    <div className='hey_okay_send_out_div ml-3'>
                                        <div >Hey! Okay, send out.</div>
                                        <div className='days_ago4_next'>4 days ago</div>
                                    </div>
                                    <div className='can_i_send_div1'><CheckCircleOutlined /></div>
                                </div>
                            </Col>
                        </Row>
                        <Row gutter={[16, 16]} className='mt-3'>
                            <Col span={2} className='sticky_first_chat_img_chating'>
                                <img src={firstchat} alt="Loading..." className='firstimg_dirimg_chat'></img>
                            </Col>
                            <Col span={5}>
                                <div className='chating_box_withconversation_zip'>
                                    <div className='new_zip_icon'><FileOutlined /></div>
                                    <div className='ml-3 mt-3'>
                                        <div className='style_zip_fileoutlined'>Style.zip</div>
                                        <div className='after_style_zip_fileoutlined'>41.36 Mb</div>
                                    </div>

                                </div>
                                <div className='days_ago4sec'>4 days ago</div>

                            </Col>
                            <Col span={1} className='nick_chat_ellipsis_ni'><EllipsisOutlined /></Col>
                        </Row>
                        <Row gutter={[16, 16]} className='mt-5'>
                            <Col span={10}>
                                <hr></hr>
                            </Col>
                            <Col span={2.5}> 3 days ago</Col>
                            <Col span={10}>
                                <hr></hr>
                            </Col>
                        </Row>
                        <Row gutter={[16, 16]}>
                            <Col span={10}></Col>
                            <Col span={13} className='mt-4'>
                                <div className='response_from_other_server'>
                                    <div className='can_i_send_div2'><EllipsisOutlined /></div>
                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        <div className='hey_okay_send_out_div_div ml-3'>
                                            <div>
                                                <p className='specical_para'>Hello! I tweaked everything you asked. I am sending the finished file.
                                                    <span className='sdfsdfdwith123'> (52.05 Mb) New_Style.zip <FileOutlined /> </span>
                                                </p>
                                            </div>

                                        </div>
                                        <div className='days_ago4_next1'>3 days ago</div>
                                    </div>





                                    <div className='can_i_send_div2'><CheckCircleOutlined /></div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={22} style={{ margin: "auto", marginTop: "80px" }}>
                                <hr></hr>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={2}></Col>
                            <Col span={1.5} >
                                {
                                    show ?
                                        <div className='Last_plusoutlines' onClick={clickChange}>
                                            <PlusOutlined />
                                        </div>
                                        :
                                        <div className='adding_hide_show_concept'>
                                            <div className='Last_plusoutlines' onClick={clickChange}>
                                                <PlusOutlined />
                                            </div>
                                            <div className='Last_plusoutlines'>
                                                <CameraOutlined />
                                            </div>
                                            <div className='Last_plusoutlines'>
                                                <FileOutlined />
                                            </div>
                                            <div className='Last_plusoutlines'>
                                                <CopyOutlined />
                                            </div>
                                        </div>
                                }
                            </Col>
                            <Col span={15}>
                                <Input placeholder="Type a message here" allowClear bordered={false} onChange={onChange} size={'large'} />
                            </Col>
                            <Col span={2}>
                                <div className='Last_plusoutlines1'>
                                    <SmileOutlined /></div></Col>
                            <Col sapn={2} >
                                <div className='Last_plusoutlines2'>
                                    <SendOutlined rotate={317} />

                                </div></Col>
                        </Row>
                    </div>


                </Col>
            </Row>
            

        </React.Fragment>
    )

}

export default StickyChat;

