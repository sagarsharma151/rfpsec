import React from "react";
import { Row, Col, Card, Input, Button } from 'antd';
import { ControlOutlined } from '@ant-design/icons';
import SideBar from "../sidebar/SideBar";
import "../farlibrary.css"
import { Link } from "react-router-dom";

const { Search } = Input;

const FarLibraryLink = ({ ...props }) => {
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

    // to={"/app/library/singleFarLink"}

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
                        <ul className="list-style-none">
                            <li>
                                <Link to ={{pathname: '/app/library/singleFarLink',
                state: '1.101 Purpose.'}} className="text-info">1.101 Purpose.</Link>
                            </li>
                            <li>
                                <Link to ={{pathname: '/app/library/singleFarLink',
                state: '1.102 Statement of guiding principles for the Federal Acquisition System.'}} className="text-info">1.102 Statement of guiding principles for the Federal Acquisition System.</Link>
                            </li>
                            <li>
                                <Link to ={{pathname: '/app/library/singleFarLink',
                state: '1.103 Authority.'}} className="text-info">1.103 Authority.</Link>
                            </li>
                            <li>
                                <Link to ={{pathname: '/app/library/singleFarLink',
                state: '1.104 Applicability.'}} className="text-info">1.104 Applicability.</Link>
                            </li>
                            <li>
                                <Link to ={{pathname: '/app/library/singleFarLink',
                state: '1.105 Issuance.'}} className="text-info">1.105 Issuance.</Link>
                            </li>
                            <li>
                                <Link to ={{pathname: '/app/library/singleFarLink',
                state: '1.106 OMB approval under the Paperwork Reduction Act.'}} className="text-info">1.106 OMB approval under the Paperwork Reduction Act.</Link>
                            </li>
                            <li>
                                <Link to ={{pathname: '/app/library/singleFarLink',
                state: '1.107 Certifications.'}} className="text-info">1.107 Certifications.</Link>
                            </li>
                            <li>
                                <Link to ={{pathname: '/app/library/singleFarLink',
                state: '1.108 FAR conventions.'}} className="text-info">1.108 FAR conventions.</Link>
                            </li>
                            <li>
                                <Link to ={{pathname: '/app/library/singleFarLink',
                state: '1.109 Statutory acquisition–related dollar thresholds-adjustment for inflation.'}} className="text-info">1.109 Statutory acquisition–related dollar thresholds-adjustment for inflation.</Link>
                            </li>
                            <li>
                                <Link to ={{pathname: '/app/library/singleFarLink',
                state: '1.110 Positive law codification.'}} className="text-info">1.110 Positive law codification.</Link>
                            </li>
                            <li>
                                Parent topic: Part 1 - Federal Acquisition Regulations System
                            </li>
                        </ul>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
};

export default FarLibraryLink;