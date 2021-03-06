import React from 'react';
import { Bar, Line, Pie, Polar, Radar } from 'react-chartjs-2';


var options = {
	maintainAspectRatio: false,
	responsive: true,
	legend: {
		display: false
	},
	tooltips: {
		enabled: true
	}
}

var options1 = {
	maintainAspectRatio: true,
	responsive: true,
	legend: {
		display: false
	},
	tooltips: {
		enabled: true
	}
}


export function BarChart(props) {
    return <Bar data={props.barChartData} options={null} width={600} height={250} />
}

export function PieChart(props) {
    return <Pie data={props.pieChartData} options={options} width={600} height={250} />
}

export function LineChart(props) {
    return <Line data={props.lineChartData} options={null} width={600} height={250} />
}

export function PolarChart(props){
  return <Polar data={props.polarChartData} options={options} width={600} height={250} />
}

export function RadarChart(props){
  return <Radar data={props.radarChartData} options={options1} width={600} height={250} />
}
// export default BarChart
