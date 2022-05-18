import React, { Component } from 'react'
import Chart from "react-apexcharts";
import { COLOR_1, COLOR_2 } from 'constants/ChartConstant';
import { Card, Row, Col, Checkbox, Button, Menu, Dropdown } from 'antd';
import { DownOutlined, CalendarOutlined } from '@ant-design/icons';

export class AwardSummary extends Component {
    state = {
        series: [{
            name: 'PRODUCT A',
            data: [20, 20, 200, 40]
        }, {
            name: 'PRODUCT B',
            data: [50, 13, 0, 0]
        }],
        options: {
            chart: {
                stacked: true,
                toolbar: {
                    show: true
                },
                zoom: {
                    enabled: true
                }
            },
            colors: [COLOR_1, COLOR_2],
            responsive: [{
                breakpoint: 380,
                options: {
                    legend: {
                        position: 'bottom',
                        offsetX: -20,
                        offsetY: 5
                    }
                }
            }],
            plotOptions: {
                bar: {
                    horizontal: false,
                },
            },
            // xaxis: {
            // 	type: 'data',
            // 	categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT'
            // 	],
            // },
            legend: {
                position: 'top',
                offsetY: 20
            },
            fill: {
                opacity: 1
            }
        }
    };



    render() {

        function onChange(e) {
            console.log(`checked = ${e.target.checked}`);
        }

        const menu = (
            <Menu>
                <Menu.Item key="0">
                    <a href="https://www.antgroup.com">1st menu item</a>
                </Menu.Item>
                <Menu.Item key="1">
                    <a href="https://www.aliyun.com">2nd menu item</a>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="3">3rd menu item</Menu.Item>
            </Menu>
        );

        return (
            <Card>
                <Row gutter={[16, 16]} className='mb-5'>
                    <Col sm={24} xs={24} md={24} lg={4} xl={4}>
                        <h5 className='ml-3 mt-1'>Obligated Amount by Year</h5>
                    </Col>
                    <Col sm={24} xs={24} md={24} lg={20} xl={20}>
                        <span className='Contract-Pricing'>
                            <span className='mr-4 mt-1'> Lock Yaxiz&nbsp; &nbsp; <Checkbox defaultChecked={false} />
                            </span>
                            <span className='d-flex Group'>
                                <p className='mt-1 mr-2'>Group by</p>
                                <Button className='contract-action-button mb-3'>
                                    <Dropdown overlay={menu} trigger={['click']}>
                                        <a className="ant-dropdown-link" href='/#' onClick={e => e.preventDefault()}>
                                            Type of Contract Pricing<DownOutlined className="pl-2" />
                                        </a>
                                    </Dropdown>
                                </Button>&nbsp;&nbsp;
                                <Button className='contract-action-button'><CalendarOutlined />&nbsp;FY 2020 to FY 2021</Button>
                            </span>
                        </span>
                    </Col>
                </Row>
                <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="bar"
                    height={350}
                />
                <Row gutter={[16, 16]} className="mt-3">
                    <Col sm={24} xs={24} md={24} lg={24} xl={24} className="d-flex m-auto">
                        <div className='d-flex m-auto Labor-Hours'>
                            <Checkbox onChange={onChange}>Labor Hours</Checkbox>
                            <Checkbox onChange={onChange}>Combination</Checkbox>
                            <Checkbox onChange={onChange}>Firm Fixed Price</Checkbox>
                            <Checkbox onChange={onChange}>Time and Materials</Checkbox>
                        </div>
                    </Col>
                </Row>
                <Row gutter={[16, 16]} className="mt-3">
                    <Col sm={24} xs={24} md={24} lg={24} xl={24} className="d-flex m-auto">
                        <div className='d-flex m-auto'>
                            <Button>Select All</Button>
                            <Button>Select All</Button>
                        </div>
                    </Col>
                </Row>
            </Card>
        )
    }
}

export default AwardSummary;
