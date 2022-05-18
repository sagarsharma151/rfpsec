import React from 'react';
import { Row, Col, Button } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const TeamingPartners = () => {

    return (
        <>
            <div className='background_color'>

                <div className='mt-2'><h3>U.S Army Communications-Electronics Command (CECOM) LCMC G8 Contractor Support Services</h3></div>

                <Row className='teaming_partner'>
                    <Col span={8}>
                        <p className='teaming_partner_col'>Recommended teaming partners <span className='ml-3'><ExclamationCircleOutlined rotate={180} /></span></p>
                    </Col>
                </Row>

                <div className='teaming_first_div'>
                    <div className='teaming_first_div_fist' >Recommendation #1</div>
                    <div className='teaming_button_group_div'>
                        <div>
                            <Button className='more_details_button'>More Details</Button>
                            <Button className='send_invite_button'>Send Invite</Button>
                        </div>
                    </div>
                </div>
                <div className='berfore_table_div'>
                    <table className='hemant_table'>
                        <tr>
                            <th>Company Name</th>
                            <th>Business Classification</th>
                            <th>Incumbent Contract Experience</th>
                            <th>Incumbent Agency Experience</th>
                            <th>Number of awards in the NAICS code</th>
                            <th>Number of awards in the agency</th>
                        </tr>
                        <tr>
                            <td>Mitsubishi</td>
                            <td>8(a), SDVOSB, WOSB</td>
                            <td><div className='table_text_yes'>Yes</div></td>
                            <td><div className='table_text_yes'>Yes</div></td>
                            <td><div className='table_text_yes12'>12</div></td>
                            <td><div className='table_text_yes2'>2</div></td>
                        </tr>

                    </table>
                </div>
                <div className='teaming_first_div'>
                    <div className='teaming_first_div_fist' >Recommendation #2</div>
                    <div className='teaming_button_group_div'>
                        <div>
                            <Button className='more_details_button'>More Details</Button>
                            <Button className='send_invite_button'>Send Invite</Button>
                        </div>
                    </div>
                </div>
                <div className='berfore_table_div'>
                <table className='hemant_table'>
                        <tr>
                            <th>Company Name</th>
                            <th>Business Classification</th>
                            <th>Incumbent Contract Experience</th>
                            <th>Incumbent Agency Experience</th>
                            <th>Number of awards in the NAICS code</th>
                            <th>Number of awards in the agency</th>
                        </tr>
                        <tr>
                            <td>Mitsubishi</td>
                            <td>8(a), SDVOSB, WOSB</td>
                            <td><div className='table_text_yes'>Yes</div></td>
                            <td><div className='table_text_yes'>Yes</div></td>
                            <td><div className='table_text_yes12'>12</div></td>
                            <td><div className='table_text_yes2'>2</div></td>
                        </tr>

                    </table>
                </div>
                <div className='teaming_first_div'>
                    <div className='teaming_first_div_fist' >Recommendation #3</div>
                    <div className='teaming_button_group_div'>
                        <div>
                            <Button className='more_details_button'>More Details</Button>
                            <Button className='send_invite_button'>Send Invite</Button>
                        </div>
                    </div>
                </div>
                <div className='berfore_table_div'>
                <table className='hemant_table'>
                        <tr>
                            <th>Company Name</th>
                            <th>Business Classification</th>
                            <th>Incumbent Contract Experience</th>
                            <th>Incumbent Agency Experience</th>
                            <th>Number of awards in the NAICS code</th>
                            <th>Number of awards in the agency</th>
                        </tr>
                        <tr>
                            <td>Mitsubishi</td>
                            <td>8(a), SDVOSB, WOSB</td>
                            <td><div className='table_text_yes'>Yes</div></td>
                            <td><div className='table_text_yes'>Yes</div></td>
                            <td><div className='table_text_yes12'>12</div></td>
                            <td><div className='table_text_yes2'>2</div></td>
                        </tr>

                    </table>
                </div>
                <Row>
                    <Col span={6} className='mt-5'><Button type="primary" htmlType="submit">
                    Explore other teaming partners
          </Button> </Col>
                </Row>
                <Row>
                    <Col span={6} className='teaming_partners_list_heading'>
                        <h3>Teaming Partners List </h3>
                    </Col>
                </Row>
                <div className='berfore_table_div_last'>
                <table className='last_table_teaming_partners abc'>
                        <tr>
                            <th>Company Name</th>
                            <th>Percent</th>
                            <th>Other Opportunities </th>
                            <th>Notes</th>
                            <th>Status</th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <td>ABC (Prime)</td>
                            <td>51%</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr className='second_row'>
                            <td>XYZ</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><div className='second_row_fifth_td'>Invite Sent on 10/21/2021</div></td>
                            <td><Button type="primary">Send Invite</Button> </td>
                            <td><Button className='mr-3' disabled>Invite Sent</Button></td>
                        </tr>
                        <tr>
                            <td>ABCDEF</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><div className='third_row_fifth_td'>Confirmed</div></td>
                            
                            <td><Button  disabled>Invite Sent</Button></td>
                            <td><Button className='mr-3' type="primary">Send Invite</Button></td>
                        </tr>
                        <tr className='last_row'>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                    </table>
                </div>
               







            </div>
        </>
    );
}

export default TeamingPartners;