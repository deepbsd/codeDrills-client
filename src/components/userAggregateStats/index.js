import React from 'react';
import {connect} from 'react-redux';

import {PieChart, RadarChart} from '../chart';

// import '../profile/profile.css';
import Style from '../profile/profile.js';

export class UserAggregateStats extends React.Component {

constructor(props) {
    super(props);

    // console.log('LOOKY HERE: ',props.data);
    this.state = {
      aggregateChartData: {
        "labels": ["All Questions Correct", "All Questions Missed"],
        "datasets": [{
          "label": "Questions Correctly Answered",
          "data": [props.data.totalQuestions, props.data.totalQuestions-props.data.totalCorrect],
          "backgroundColor": ["purple", "thistle"]
          }]
        }
      }
    }


render() {

    const getPercent = function(correct, total){
      let pct = (correct/total)*100;
      return pct.toFixed(2);
    }

    const currentData = this.props.data;

    console.log('TESTING: '+currentData.totalQuestions);

    return (
        <div>

        {(!currentData) ? <h1>Error: What data?</h1> :
          <Style.chartWrapper >

            <Style.percentage >{getPercent(currentData.totalCorrect, currentData.totalQuestions)}%</Style.percentage>
              <Style.h2><Style.subject className="subject">All Quizes: {currentData.numberOfQuizzes}</Style.subject><Style.counts >{currentData.totalCorrect}/{currentData.totalQuestions}</Style.counts></Style.h2>
              <PieChart pieChartData={this.state["aggregateChartData"]} />
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

export default connect(mapStateToProps)(UserAggregateStats);
