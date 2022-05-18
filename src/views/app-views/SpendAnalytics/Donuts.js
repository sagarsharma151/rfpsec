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

export class Donuts extends Component {
	state = {
		options : {
			series: [44, 55, 13, 33],
			chart: {
			width: 380,
			type: 'donut',
		  },
		  dataLabels: {
			enabled: false
		  },
		  responsive: [{
			breakpoint: 480,
			options: {
			  chart: {
				width: 200
			  },
			  legend: {
				show: false
			  }
			}
		  }],
		  legend: {
			position: 'right',
			offsetY: 0,
			height: 230,
		  }
		  }
  
          
	};

	render() {
		return (
			<Chart
				options={this.state.options}
				
				height= {400}
				type="donut"
			/>
		)
	}
}

export default Donuts;
