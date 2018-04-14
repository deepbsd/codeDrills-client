import React from 'react';
import {connect} from 'react-redux';

import {RadarChart} from '../chart';

// import '../profile/profile.css';
import Style from '../profile/style.js';

export class UserLatestStats extends React.Component {

constructor(props) {
    super(props);
    this.getPercent = this.getPercent.bind(this);
    console.log('LOOKY HERE: ',props.data);
    console.log('Looky here: ',props.newdata);
    this.state = {
      quizData: this.props.data,
      radarChartData: {
          labels: ['JavaScript', 'CSS', 'HTML', 'Node', 'API', 'MongoDB'],
          datasets: [{
            label: 'My Latest Quiz',
            backgroundColor: 'rgba(32, 104, 219,0.2)',
            borderColor: 'rgba(32, 104, 219,1)',
            pointBackgroundColor: 'rgba(32, 104, 219,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(32, 104, 219,1)',
            data: [
              this.getPercent(25,30),
              this.getPercent(7,9),
              this.getPercent(15,16),
              this.getPercent(8,8),
              this.getPercent(8,9),
              this.getPercent(19,21)
            ]
          }, {
            label: 'My Overall Averages',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
            data: [
              this.getPercent(6, 7),
              this.getPercent(9, 10),
              this.getPercent(8, 9),
              this.getPercent(12, 13),
              this.getPercent(14, 16),
              this.getPercent(6, 7)
            ]
          }]
        }
      }
    }

    getPercent(totalCorrect, totalAnswered){
      let pct = (totalCorrect/totalAnswered)*100;
      return pct.toFixed(2);
    }

    render() {

        const currentData = this.props.data;


        return (
            <div>
            {(!currentData) ? <h1>Error: What data?</h1> :
              <Style.chartWrapper>
                <h2>Latest Quiz Compared to Total Percentages</h2>
                  <RadarChart radarChartData={this.state["radarChartData"]} />

              </Style.chartWrapper>
            }
            </div>
        );
      }
}



const mapStateToProps = state => {
  return {
    // currentUser: state.currentUser,
    // currentData: state.currentUser.userData,
    loggedIn: state.loggedIn,
  }
};

export default connect(mapStateToProps)(UserLatestStats);
