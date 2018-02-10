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
            propsReady: false,
            htmlChartData: {
              "labels": ["HTML Questions Correct", "HTML Questions Missed"],
              "datasets": [{
                "label": "Questions Correctly Answered",
                "backgroundColor": ["purple", "thistle"]
              }]
            },
            cssChartData: {
                "labels": ["CSS Questions Correct", "CSS Questions Missed"],
                "datasets": [{
                  "label": "Questions Correctly Answered",
                  "backgroundColor": ["orange", "yellow"]
                }]
            },
            jsChartData: {
                "labels": ["JS Questions Correct", "JS Questions Missed"],
                "datasets": [{
                  "label": "Questions Correctly Answered",
                  "backgroundColor": ["#0033ff", "cyan"]
                }]
            },
            nodeChartData: {
                "labels": ["Node Questions Correct", "Node Questions Missed"],
                "datasets": [{
                  "label": "Questions Correctly Answered",
                  "backgroundColor": ["crimson", "#f27993"]
                }]
            },
            apiChartData: {
                "labels": ["API Questions Correct", "API Questions Missed"],
                "datasets": [{
                  "label": "Questions Correctly Answered",
                  "backgroundColor": ["green", "lime"]
                }]
            },
            mongoChartData: {
                "labels": ["Mongo Questions Correct", "Mongo Questions Missed"],
                "datasets": [{
                  "label": "Questions Correctly Answered",
                  "backgroundColor": ["#f46242", "#f48f42"]
                }]
            }
        };
    }

    componentDidMount() {
      this.props.dispatch(fetchUserData());
    }

    componentDidUpdate(prevProps, prevState) {
      // only update chart if the data has changed
      if (prevProps.currentUser !== this.props.currentUser) {
          this.setState((prevState, props) => ({
            htmlChartData: {...prevState.htmlChartData, datasets: [{...prevState.htmlChartData.datasets[0], data: [this.props.currentUser.userData.htmlQuestionsCorrect, this.props.currentUser.userData.htmlQuestionsAnswered - this.props.currentUser.userData.htmlQuestionsCorrect]}] },
            cssChartData: {...prevState.cssChartData, datasets: [{...prevState.cssChartData.datasets[0], data: [this.props.currentUser.userData.cssQuestionsCorrect, this.props.currentUser.userData.cssQuestionsAnswered - this.props.currentUser.userData.cssQuestionsCorrect]}] },
            jsChartData: {...prevState.jsChartData, datasets: [{...prevState.jsChartData.datasets[0], data: [this.props.currentUser.userData.jsQuestionsCorrect, this.props.currentUser.userData.jsQuestionsAnswered - this.props.currentUser.userData.jsQuestionsCorrect]}] },
            nodeChartData: {...prevState.nodeChartData, datasets: [{...prevState.nodeChartData.datasets[0], data: [this.props.currentUser.userData.nodeQuestionsCorrect, this.props.currentUser.userData.nodeQuestionsAnswered - this.props.currentUser.userData.nodeQuestionsCorrect]}] },
            apiChartData: {...prevState.apiChartData, datasets: [{...prevState.apiChartData.datasets[0], data: [this.props.currentUser.userData.apiQuestionsCorrect, this.props.currentUser.userData.apiQuestionsAnswered - this.props.currentUser.userData.apiQuestionsCorrect]}] },
            mongoChartData: {...prevState.mongoChartData, datasets: [{...prevState.mongoChartData.datasets[0], data: [this.props.currentUser.userData.mongoQuestionsCorrect, this.props.currentUser.userData.mongoQuestionsAnswered - this.props.currentUser.userData.mongoQuestionsCorrect]}]}
          }));
      }
    }

    render() {

        const getPercent = function(correct, total){
          let pct = (correct/total)*100;
          return pct.toFixed(2);
        }

        const subjectSequence = ["js", "html", "css", "node", "api", "mongo"];
        // const pieCharts = subjectSequence.map( (item, index) => {
        //   let _subject = `${item}ChartData`;
        //   // let _subjectCorrect = `${item}QuestionsCorrect`;
        //   // let _subjectAnswered = `${item}QuestionsAnswered`;
        //   let _numMissed = this.state[_subject].datasets[0].data[1];
        //   let _numAnswered = this.state[_subject].datasets[0].data[0];
        //   let _numCorrect = _numAnswered - _numMissed;
        //   // console.log(`PCT DATA: ${_numCorrect} ${_numAnswered}`);
        //   console.log('TESTING: '+ this.props.currentUser);
        //   return (
        //     <div className="chartWrapper">
        //       <div className="percentage" >{getPercent(_numCorrect, _numAnswered)}%</div>
        //       <PieChart pieChartData={this.state[_subject]} />
        //     </div>
        //
        //   )
        //
        // })
        const pieCharts = subjectSequence.map( (item, index) => {
          let _subject = `${item}ChartData`;
          if(this.props.currentUser && this.props.currentUser.userData && this.state[_subject].datasets[0].data) {
            let _numMissed = this.state[_subject].datasets[0].data[1];
            let _numAnswered = this.state[_subject].datasets[0].data[0];
            let _numCorrect = _numAnswered - _numMissed;
            return (
              <div key={index} className="chartWrapper">
                <div className="percentage" >{getPercent(_numCorrect, _numAnswered)}%</div>
                <PieChart pieChartData={this.state[_subject]} />
              </div>
            )
          }
        })

        if (this.props.currentUser) {
          return (
            <div>
              <Userdetails user={this.props.currentUser.user} />
              <div>{pieCharts}</div>
            </div>
          )
        } else {
          return ( <h1>Loading...</h1> )
        }
    }
}

const mapStateToProps = state => ({
    currentUser: state.currentUser,
    loggedIn: state.loggedIn
});

export default connect(mapStateToProps)(Profile);
