import React, { Component } from 'react';
import { Card, Row, Col, Input } from 'antd';
import { ControlOutlined } from '@ant-design/icons';
import Chart from "react-apexcharts";
import DonutChart from './DonutChart';
import "./spendanalytics.css";
import GroupedBar from './GroupedChart';



const { Search } = Input;

export const COLOR_1 = '#3751FF';

export class SpendAnalytics extends Component{

    state = {   
		series: [{
			name: 'Net Profit',
			data: [55, 40, 60, 35, 55, 43]
		},],
		options: {
			plotOptions: {
				bar: {
					horizontal: false,
					columnWidth: '5%',
					endingShape: 'rounded'
				},
			},
			colors: [COLOR_1],
			dataLabels: {
				enabled: false
			},
			stroke: {
				show: true,
				width: 1,
				colors: ['transparent']
			},
			xaxis: {
				categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
			},
			fill: {
				opacity: 1
			},
			tooltip: {
				y: {
					formatter: val => (`$${val} thousands`)
				}
			}
		}
	
	};



    render() {

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
                <Col sm={12} xs={24} md={12} lg={12} xl={12}>
                    <h2>Incumbent Search</h2>
                </Col>
                <Col sm={12} xs={24} md={12} lg={12} xl={12}>
                    <div style={{ textAlign: 'right', marginBottom: 15 }}>
                        <Search placeholder="Search" suffix={suffix} onSearch={onSearch} style={{ width: 300 }} className="search-input-color" />
                    </div>
                </Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col sm={24} xs={24} md={14} lg={16} xl={16}>
                    <Card>
                        <span className='d-flex justify-content-between'>
                            <h5>Overview</h5>
                            <span>
                            <h5>$245,798</h5>
                            </span>
                        </span>
                        <Chart
				options={this.state.options}
				series={this.state.series}
				height= {300}
				type="bar"
			/>
                    </Card>
                </Col>
                <Col sm={24} xs={24} md={10} lg={8} xl={8}>
                    <Card>
                    <span className='d-flex justify-content-between'>
                            <h5>Spend by user</h5>
                        </span>
                        <table className='table'>
                            <tbody>
                                <tr className='float-left visibility-collapse'>
                                    <th className='pr-5 pt-2'>Jane Cooper</th>
                                    <th className='pl-3 pt-2'>$245,798</th>
                                </tr>
                                <tr>
                                    <th className='pr-5 pt-2'>Jane Cooper</th>
                                    <th className='pl-3 pt-2'>$245,798</th>
                                </tr>
                                <tr>
                                    <th className='pr-5 pt-2'>Jane Cooper</th>
                                    <th className='pl-3 pt-2'>$245,798</th>
                                </tr>
                                <tr>
                                    <th className='pr-5 pt-2'>Jane Cooper</th>
                                    <th className='pl-3 pt-2'>$245,798</th>
                                </tr>

                                 <tr>
                                    <th className='pr-5 pt-2'>Jane Cooper</th>
                                    <th className='pl-3 pt-2'>$245,798</th>
                                </tr>
                                <tr>
                                    <th className='pr-5 pt-2'>Jane Cooper</th>
                                    <th className='pl-3 pt-2'>$245,798</th>
                                </tr>
                                <tr>
                                    <th className='pr-5 pt-2'>Jane Cooper</th>
                                    <th className='pl-3 pt-2'>$245,798</th>
                                </tr>
                                <tr>
                                    <th className='pr-5 pt-2'>Jane Cooper</th>
                                    <th className='pl-3 pt-2'>$245,798</th>
                                </tr>
                                <tr>
                                    <th className='pr-5 pt-2'>Jane Cooper</th>
                                    <th className='pl-3 pt-2'>$245,798</th>
                                </tr>
                                <tr>
                                    <th className='pr-5 pt-2'>Jane Cooper</th>
                                    <th className='pl-3 pt-2'>$245,798</th>
                                </tr>
                                <tr>
                                    <th className='pr-5 pt-2'>Jane Cooper</th>
                                    <th className='pl-3 pt-2'>$245,798</th>
                                </tr>
                            </tbody>
                        </table>
                    </Card>
                </Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col sm={24} xs={24} md={16} lg={16} xl={16}>
                    <Card>
                        <span className='d-flex justify-content-between'>
                            <h5>Spend by supplier</h5>
                           
                        </span>
                        <DonutChart />
                    </Card>
                </Col>
                <Col sm={24} xs={24} md={8} lg={8} xl={8}>
                    <Card>
                    <span className='d-flex justify-content-between'>
                            <h5>Spend by product</h5>
                        </span>
                        <GroupedBar />
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
    }
}

export default SpendAnalytics;
