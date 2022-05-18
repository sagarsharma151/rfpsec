import React, { Component } from 'react'
import Chart from "react-apexcharts";


export const COLOR_1 = '#2DA641';  // blue
export const COLOR_2 = '#FF0000';  // cyan
export const COLOR_3 = '#363687';  // volcano
export const COLOR_4 = '#FAAB0C';  // gold
export const COLOR_5 = '#155BD4';  // purple

export const COLORS = [
	COLOR_1,
	COLOR_2,
	COLOR_3,
	COLOR_4,
	COLOR_5
]

export class GroupedBar extends Component {
	state = {
		series: [{
			data: [44, 0, 0, 0]
		}, {
			data: [0, 32, 0, 0]
		},
        {
			data: [0, 0, 33, 0]
		},
        {
			data: [0, 0, 0, 52]
		},
        
    ],
		options: {
			plotOptions: {
				bar: {
					horizontal: true,
					// dataLabels: {
					// 	position: 'top',
					// },
				}
			},
			colors: COLORS,
			dataLabels: {
				enabled: true,
				offsety: -6,
				style: {
					fontSize: '0px',
					colors: ['#fff']
				}
			},
			stroke: {
				show: true,
				width: 2,
				colors: ['#fff']
			},
			xaxis: {
				categories: ['Product 1', 'Product 2', 'Product 3', 'Product 4', 'Product 5'],
			},
		}
	};

	render() {
		return (
			<Chart
				options={this.state.options}
				series={this.state.series}
				height= {300}
				type="bar"
			/>
		)
	}
}

export default GroupedBar
