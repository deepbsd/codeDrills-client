import React from 'react';
import {connect} from 'react-redux';

import {PieChart} from '../chart';



import Style from '../profile/style.js';


export class UserCategoryStats extends React.Component {

    constructor(props) {
        super(props);

        // console.log('LOOKY HERE: ',props.data);
        this.state = {
          htmlChartData: {
            "labels": ["HTML Questions Correct", "HTML Questions Missed"],
            "datasets": [{
              "label": "Questions Correctly Answered",
              "data": [props.data.htmlQuestionsAnswered, props.data.htmlQuestionsAnswered-props.data.htmlQuestionsCorrect],
              "backgroundColor": ["purple", "thistle"],
            }]
          },
          cssChartData: {
              "labels": ["CSS Questions Correct", "CSS Questions Missed"],
              "datasets": [{
                "label": "Questions Correctly Answered",
                "data": [props.data.cssQuestionsAnswered, props.data.cssQuestionsAnswered-props.data.cssQuestionsCorrect],
                "backgroundColor": ["orange", "yellow"]
              }]
          },
          jsChartData: {
              "labels": ["JS Questions Correct", "JS Questions Missed"],
              "datasets": [{
                "label": "Questions Correctly Answered",
                "data": [props.data.jsQuestionsAnswered, props.data.jsQuestionsAnswered-props.data.jsQuestionsCorrect],
                "backgroundColor": ["#0033ff", "cyan"]
              }]
          },
          nodeChartData: {
              "labels": ["Node Questions Correct", "Node Questions Missed"],
              "datasets": [{
                "label": "Questions Correctly Answered",
                "data": [props.data.nodeQuestionsAnswered, props.data.nodeQuestionsAnswered-props.data.nodeQuestionsCorrect],
                "backgroundColor": ["crimson", "#f27993"]
              }]
          },
          apiChartData: {
              "labels": ["API Questions Correct", "API Questions Missed"],
              "datasets": [{
                "label": "Questions Correctly Answered",
                "data": [props.data.apiQuestionsCorrect, props.data.apiQuestionsAnswered-props.data.apiQuestionsCorrect],
                "backgroundColor": ["green", "lime"]
              }]
          },
          mongoChartData: {
              "labels": ["Mongo Questions Correct", "Mongo Questions Missed"],
              "datasets": [{
                "label": "Questions Correctly Answered",
                "data": [props.data.mongoQuestionsAnswered, props.data.mongoQuestionsAnswered-props.data.mongoQuestionsCorrect],
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
        const subjectDisplay = ["JavaScript", "HTML", "CSS", "Node", "API", "MongoDB"];

        const pieCharts = subjectSequence.map( (item, index) => {
          let _displaySubject = subjectDisplay[index];
          let _subject = `${item}ChartData`;
          let _correct = `${item}QuestionsCorrect`;
          let _answered = `${item}QuestionsAnswered`;
          // let _numMissed = this.state[_subject].datasets[0].data[1];
          // let _numMissed = _answered - _correct;
          // let _numAnswered = this.state[_subject].datasets[0].data[0];
          let _numAnswered = currentData[_answered];
          let _numCorrect = currentData[_correct];

          //console.log('TESTING: '+currentData.htmlQuestionsAnswered);

          return (
            <Style.chartWrapper key={index}>
              <Style.h2 className="cf"><Style.subject>{_displaySubject}</Style.subject><Style.counts>{_numCorrect}/{_numAnswered}</Style.counts></Style.h2>
              <Style.percentagewrap>
                <Style.percentage>{getPercent(_numCorrect, _numAnswered)}%</Style.percentage>
                <div>
                  <PieChart pieChartData={this.state[_subject]} />
                </div>
              </Style.percentagewrap>
            </Style.chartWrapper>

          )

        })



        return (
            <div>
            <h4>The Category Stats tab tells you how you are doing in each category of performance.</h4>
            {(!currentData) ? <h1>Error: What data?</h1> :
              <div>
                  {pieCharts}
              </div > }
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn,
  }
};

export default connect(mapStateToProps)(UserCategoryStats);
