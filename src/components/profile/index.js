import React from 'react';
import {connect} from 'react-redux';
import Userstats from '../userStats';
import Userdetails from '../userDetails';
import {BarChart, PieChart, PolarChart, LineChart, RadarChart} from '../chart';
import {fetchUserData} from '../../actions';


import './profile.css';


export class Profile extends React.Component {

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

    componentWillMount() {
      this.props.dispatch(fetchUserData());
    }

    render() {

        const getPercent = function(correct, total){
          let pct = (correct/total)*100;
          return pct.toFixed(2);
        }

        const currentUser = this.props.currentUser;


        const subjectSequence = ["js", "html", "css", "node", "api", "mongo"];
        const pieCharts = subjectSequence.map( (item, index) => {
          let _subject = `${item}ChartData`;
          // let _subjectCorrect = `${item}QuestionsCorrect`;
          // let _subjectAnswered = `${item}QuestionsAnswered`;
          let _numMissed = this.state[_subject].datasets[0].data[1];
          let _numAnswered = this.state[_subject].datasets[0].data[0];
          let _numCorrect = _numAnswered - _numMissed;
          console.log('PCT DATA: '+this.state[_subject].datasets[0].data[0]);
          return (
            <div className="chartWrapper">
              <div className="percentage" >{getPercent(_numCorrect, _numAnswered)}%</div>
              <PieChart pieChartData={this.state[_subject]} />
            </div>

          )

        })



        return (
            <div>
            {console.log('CAN YOU SEE THIS? '+JSON.stringify(currentUser))}
            {(!currentUser) ? <h1>Error: Whodat?</h1> :
              <div>
                <Userdetails user={currentUser.user} />
                {/*
                  <Userstats className="profile.css" userData={currentUser.userData}
                  lastQuiz={currentUser.lastQuizData} missedMost={currentUser.missedMost}  />
                  <BarChart barChartData={currentUser.chartData} />
                  <PieChart pieChartData={currentUser.chartData} />
                */}
                  {pieCharts}
              </div> }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    currentUser: state.currentUser,
    loggedIn: state.loggedIn,

});

export default connect(mapStateToProps)(Profile);
