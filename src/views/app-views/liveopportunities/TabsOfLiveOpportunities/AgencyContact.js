import React from 'react';
import { Row, Col, Button, Card } from 'antd';
import Frame from '../Rectangle/Frame.png';
import { EnvironmentOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';

const AgencyContact = () => {
    
    return (
        <>
            <div className='background_color'>

                <div className='mt-2'><h3>U.S Army Communications-Electronics Command (CECOM) LCMC G8 Contractor Support Services</h3></div>
                <Card className='snapshot_background_color1'>
                    <Row>
                        <Col span={7}>
                            <img src={Frame} alt="Loading..." />
                        </Col>
                        
                        <Col span={9}>
                            <h4 className='customer_points_of_contact'>Customer Points Of Contact</h4>
                            <table className='agency_contact_table'>
                                <tr >
                                    <td className='environmentoutlined_icon'>{<EnvironmentOutlined />}</td>
                                    <th className='chinatown_new'>Chinatown, New York</th>
                                </tr>
                                <tr>
                                    <td ></td>
                                    <td className='chinatown_new1'>Unit 500, Montford Court, Montford Street, Salford,
                                        M50 2QP</td>
                                </tr>
                                <tr >
                                    <td className='environmentoutlined_icon'>{<MailOutlined />}</td>
                                    <th className='chinatown_new1'>jginspace@mac.com</th>
                                </tr>
                                <tr >
                                    <td className='environmentoutlined_icon'>{<PhoneOutlined rotate={90} />}</td>
                                    <th className='chinatown_new1'>+44 1632 960330</th>
                                </tr>
                            </table>
                            <Button className='send_email'>Send EMail</Button>
                        </Col>
                        <div class="vl"></div>
                        <Col span={7} className='ml-5'>
                            <h4 className='customer_points_of_contact1'>Customer Points Of Contact</h4>
                            <table className='agency_contact_table'>
                                <tr >
                                    <td className='environmentoutlined_icon1'>{<EnvironmentOutlined />}</td>
                                    <th className='chinatown_new_next'>Saint Barthélemy</th>
                                </tr>
                                <tr>
                                    <td ></td>
                                    <td className='chinatown_new1'>2 Council House, Fenside Road, Toynton All Saints,
                                        PE23 5DE </td>
                                </tr>
                                <tr >
                                    <td className='environmentoutlined_icon'>{<MailOutlined />}</td>
                                    <th className='chinatown_new1'>nevaeh.simmons@example.com</th>
                                </tr>
                                <tr >
                                    <td className='environmentoutlined_icon'>{<PhoneOutlined rotate={90} />}</td>
                                    <th className='chinatown_new1'>+7 (903) 134-55-26</th>
                                </tr>
                            </table>
                            <Button className='send_email'>Send EMail</Button>
                        </Col>
                    </Row>
                </Card>


            </div>
        </>
    );
}
export default AgencyContact;