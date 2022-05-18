import React from "react";
import { Row, Col, Card, Input, Button } from 'antd';
import { ControlOutlined } from '@ant-design/icons';
import "../farlibrary.css"
import SideBar from "../sidebar/SideBar";

const { Search } = Input;


const SingleFarLink = ({ ...props }) => {
    console.log('props...', props.location.state)


    const onSearch = value => console.log(value);

    const suffix = (
        <ControlOutlined
            style={{
                fontSize: 16,
                color: '#1F4173',
            }}
        />
    )

    return (
        <React.Fragment>
            <Row gutter={[16, 16]}>
                <Col sm={12} xs={12} md={12} lg={12} xl={12}>
                    <h2>FAR Library-- {props.location.state}</h2>
                </Col>
                <Col sm={12} xs={12} md={12} lg={12} xl={12}>
                    <div style={{ textAlign: 'right', marginBottom: 15 }}>
                        <Search placeholder="Search" suffix={suffix} onSearch={onSearch} style={{ width: 300 }} className="search-input-color" />
                        <Button className='open-background ml-4'>Save Search | Export</Button>
                    </div>
                </Col>
            </Row>
            <hr></hr>
            <Row gutter={[16, 16]} className='mt-4'>
                <Col sm={6} xs={6} md={6} lg={6} xl={6}>
                    <SideBar />
                </Col>
                <Col sm={18} xs={18} md={18} lg={18} xl={18}>
                    <Card>
                        <div className="far-link">
                            <h3 className="far-part">{props.location.state}</h3>
                        </div>
                        <h5 className="p-4">The Federal Acquisition Regulations System is established for the codification and publication of uniform
                            policies and procedures for acquisition by all executive agencies. The Federal Acquisition Regulations
                            System consists of the Federal Acquisition Regulation (FAR), which is the primary document, and agency
                            acquisition regulations that implement or supplement the FAR. The FAR System does not include internal
                            agency guidance of the type described in 1.301(a)(2).</h5>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
};

export default SingleFarLink;