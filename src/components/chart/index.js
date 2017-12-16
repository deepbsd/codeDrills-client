import React from 'react';
import { Bar, Line, Pie, Polar } from 'react-chartjs-2';

export function BarChart(props) {
    return <Bar data={props.barChartData} options={null} width="600" height="250" />
}

export function PieChart(props) {
    return <Pie data={props.pieChartData} options={null} width="600" height="250" />
}

export function LineChart(props) {
    return <Line data={props.pieChartData} options={null} width="600" height="250" />
}

export function PolarChart(props){
  return <Polar data={props.polarChartData} options={null} width="600" height="250" />
}
// export default BarChart
