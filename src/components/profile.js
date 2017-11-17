import React from 'react';
import Footer from './footer';

import Chart from 'react-chart.js';


import './profile.css';

export default class Profile extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            data: {
              labels: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
              datasets: [{
                data: [234, 543, 8976, 129, 222],
                backgroundColor: ['blue', 'thistle', 'navy', 'green', 'cornsilk'],
                hoverBorderColor: ['blue', 'thistle', 'navy', 'green', 'cornsilk'],
                hoverBorderWidth: 3
              }]
            },
            options: {
              cutoutPercentage: 52,
              legend: {
                display: true,
                labels: {
                  boxWidth: 20
                },
                position: 'right'
              }
            }
        }
    }

    render () {

        const LineChart = Chart.line;

        return (
            <div>
                <div className="profile">
                    <img src="http://placekitten.com/g/200/200" alt="" />
                    <form>
                        <input type="text" placeholder="username"></input><br/>
                        <input type="text" placeholder="email"></input><br/>
                        <input type="text" placeholder="password"></input>
                    </form>
                </div>
                <LineChart data={this.state.data} options={this.state.options} width="600" height="250" />
                <Footer />
            </div>
        );
    }
}