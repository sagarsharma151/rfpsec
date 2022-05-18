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

export class DonutChart extends Component {
	state = {
		// series: [55, 12, 20, 33, 45],
		// chartOptions: {
		// 	labels: ['Spend by supplier', 'Spend by supplier', 'Spend by supplier', 'Spend by supplier', 'Spend by supplier'],
		// },

		series: [44, 55, 41, 17, 15],
		chartOptions: {
		  labels: ['Spend by supplier', 'Spend by supplier', 'Spend by supplier', 'Spend by supplier', 'Spend by supplier'],
		  labels2: ['Spenlier', 'Spend by supplier', 'Spend by supplier', 'Spend by supplier', 'Spend by supplier']
		},
		options: {
			series: [44, 55, 41, 17, 15],
            labels: ['Spend by supplier', 'Spend by supplier', 'Spend by supplier', 'Spend by supplier', 'Spend by supplier'],
			labels2: ['Spenplier', 'Spend by supplier', 'Spend by supplier', 'Spend by supplier', 'Spend by supplier'],
			colors: COLORS,
			responsive: [{
				breakpoint: 480,
				options: {
					chart: {
						width: 200
					},
					legend: {
						position: 'bottom'
					}
				}
			}]
		}
	};

	render() {
		return (
			<Chart
				options={this.state.options}
				series={this.state.series}
				labels={this.state.labels}
				labels2={this.state.labels2}
				height={300}
				type="donut"
			/>
		)
	}
}

export default DonutChart;
