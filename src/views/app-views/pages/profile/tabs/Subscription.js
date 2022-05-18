import React from 'react';
import { Button, Col, Row, Card } from 'antd';
import './Subscription.css';

const Subscription = () => {
    return (
        <>
           
                <Card>
                    <Row gutter={[16, 16]} justify="space-between">
                     
                       
                        <Col xs={24} sm={12} lg={7} xl={7}><Card className='subscription-card'>
                            <div className='main-card-div'> <div className='rectangle-img-div'>
                                <img src='/img/others/Rectangle 4355.png' className='rectangle-image' alt=''/></div><div className='para-div-main'><h2 className='plan-text'>
                            Free Plan</h2></div>
                         </div>
                         <div className='offer-div'>
                                <p className='offer-para'>
                               <span className='offer-doller'>$0.00</span> /Lifetime
                                </p>
                                </div>
                                
                                <div className='offer-list'>
                                <ul>
                                    <li>75% conception rate</li>
                                    <li>Increase feed</li>
                                    <li>Lower antibiotic usage</li>
                                    <li>efficiency by 7%</li>
                                    <li>Ruminating while laying</li>
                                    <li>Efficiency by 7%</li>
                                    <li>Increase while laying</li>
                                </ul></div>
                                
                                <div className='button-div'><Button key={4}  className='upgrade-btn'>Upgrade</Button></div></Card></Col>
                        <Col xs={24} sm={12} lg={7} xl={7}><Card className='subscription-card'>
                            <div className='main-card-div'> <div className='rectangle-img-div'>
                                <img src='/img/others/Rectangle.png' className='rectangle-image' alt=''/></div><div className='para-div-main'><h2 className='plan-text'>
                            Free Plan</h2></div>
                         </div>
                         <div className='offer-div'>
                                <p className='offer-para'>
                               <span className='offer-doller'>$1.00</span>  /Day
                                </p>
                                </div>
                                
                                <div className='offer-list'>
                                <ul>
                                    <li>75% conception rate</li>
                                    <li>Increase feed</li>
                                    <li>Lower antibiotic usage</li>
                                    <li>efficiency by 7%</li>
                                    <li>Ruminating while laying</li>
                                    <li>Efficiency by 7%</li>
                                    <li>Increase while laying</li>
                                </ul></div>
                                
                                <div className='button-div'><Button key={4}  className='upgrade-btn'>Upgrade</Button></div></Card></Col>
                        <Col xs={24} sm={12} lg={7} xl={7}><Card className='subscription-card'>
                            <div className='main-card-div'> <div className='rectangle-img-div'>
                                <img src='/img/others/Rectangle 4355.png' className='rectangle-image' alt=''/></div><div className='para-div-main'><h2 className='plan-text'>
                            Free Plan</h2></div>
                         </div>
                         <div className='offer-div'>
                                <p className='offer-para'>
                               <span className='offer-doller'>$9.00 </span> /Lifetime
                                </p>
                                </div>
                                
                                <div className='offer-list'>
                                <ul>
                                    <li>75% conception rate</li>
                                    <li>Increase feed</li>
                                    <li>Lower antibiotic usage</li>
                                    <li>efficiency by 7%</li>
                                    <li>Ruminating while laying</li>
                                    <li>Efficiency by 7%</li>
                                    <li>Increase while laying</li>
                                </ul></div>
                                
                                <div className='button-div'><Button key={4}  className='upgrade-btn'>Upgrade</Button></div></Card></Col>
                       
                    </Row>

                  
                
                   
                </Card>
           
        </>
    )
}

export default Subscription