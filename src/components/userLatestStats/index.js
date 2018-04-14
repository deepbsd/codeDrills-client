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
      radarChartData: {
          labels: ['JavaScript', 'CSS', 'HTML', 'Node', 'API', 'MongoDB'],
          datasets: [{
            label: 'My Overall Averages',
            backgroundColor: 'rgba(32, 104, 219,0.2)',
            borderColor: 'rgba(32, 104, 219,1)',
            pointBackgroundColor: 'rgba(32, 104, 219,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(32, 104, 219,1)',
            data: [
              this.getPercent(props.data.jsQuestionsCorrect,props.data.jsQuestionsAnswered),
              this.getPercent(props.data.cssQuestionsCorrect,props.data.cssQuestionsAnswered),
              this.getPercent(props.data.htmlQuestionsCorrect,props.data.htmlQuestionsAnswered),
              this.getPercent(props.data.nodeQuestionsCorrect,props.data.nodeQuestionsAnswered),
              this.getPercent(props.data.apiQuestionsCorrect,props.data.apiQuestionsAnswered),
              this.getPercent(props.data.mongoQuestionsCorrect,props.data.mongoQuestionsAnswered)
            ]
          }, {
            label: 'My Latest Quiz',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
            data: [
              this.getPercent(props.newdata.js_right.length, props.newdata.js.length),
              this.getPercent(props.newdata.css_right.length, props.newdata.css.length),
              this.getPercent(props.newdata.html_right.length, props.newdata.html.length),
              this.getPercent(props.newdata.node_right.length, props.newdata.node.length),
              this.getPercent(props.newdata.api_right.length, props.newdata.api.length),
              this.getPercent(props.newdata.mongo_right.length, props.newdata.mongo.length)
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
