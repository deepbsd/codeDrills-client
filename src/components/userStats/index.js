import React from 'react';
import {connect} from 'react-redux';

import {PieChart} from '../chart';



import './profile.css';


export class UserStats extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
          htmlChartData: {
            "labels": ["HTML Questions Correct", "HTML Questions Missed"],
            "datasets": [{
              "label": "Questions Correctly Answered",
              "data": [30, 1],
              "backgroundColor": ["purple", "thistle"]
            }]
          },
          cssChartData: {
              "labels": ["CSS Questions Correct", "CSS Questions Missed"],
              "datasets": [{
                "label": "Questions Correctly Answered",
                "data": [45, 3],
                "backgroundColor": ["orange", "yellow"]
              }]
          },
          jsChartData: {
              "labels": ["JS Questions Correct", "JS Questions Missed"],
              "datasets": [{
                "label": "Questions Correctly Answered",
                "data": [35, 10],
                "backgroundColor": ["#0033ff", "cyan"]
              }]
          },
          nodeChartData: {
              "labels": ["Node Questions Correct", "Node Questions Missed"],
              "datasets": [{
                "label": "Questions Correctly Answered",
                "data": [30, 2],
                "backgroundColor": ["crimson", "#f27993"]
              }]
          },
          apiChartData: {
              "labels": ["API Questions Correct", "API Questions Missed"],
              "datasets": [{
                "label": "Questions Correctly Answered",
                "data": [30, 1],
                "backgroundColor": ["green", "lime"]
              }]
          },
          mongoChartData: {
              "labels": ["Mongo Questions Correct", "Mongo Questions Missed"],
              "datasets": [{
                "label": "Questions Correctly Answered",
                "data": [30, 3],
                "backgroundColor": ["#f46242", "#f48f42"]
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


        const subjectSequence = ["js", "html", "css", "node", "api", "mongo"];
        const pieCharts = subjectSequence.map( (item, index) => {
          let _subject = `${item}ChartData`;
          let _correct = `${item}QuestionsCorrect`;
          let _answered = `${item}QuestionsAnswered`;
          // let _numMissed = this.state[_subject].datasets[0].data[1];
          let _numMissed = _answered - _correct;
          // let _numAnswered = this.state[_subject].datasets[0].data[0];
          let _numAnswered = currentData[_answered];
          let _numCorrect = currentData[_correct];

          console.log('TESTING: '+currentData.jsQuestionsAnswered);
          return (
            <div className="chartWrapper">
              <div className="percentage" >{getPercent(_numCorrect, _numAnswered)}%</div>
                <PieChart pieChartData={this.state[_subject]} />
            </div>

          )

        })



        return (
            <div>
            {console.log('STRINGIFIED: '+JSON.stringify(currentData))}
            {(!currentData) ? <h1>Error: What data?</h1> :
              <div>

                  {pieCharts}

              </div > }
            </div>
        );
    }
}

const mapStateToProps = state => {
  console.log('RAY: ',state);
  return {
    // currentUser: state.currentUser,
    // currentData: state.currentUser.userData,
    loggedIn: state.loggedIn,
  }
};

export default connect(mapStateToProps)(UserStats);
