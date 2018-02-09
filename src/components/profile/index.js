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
            "displayName": "HTML Questions",
            "labels": ["HTML Questions Answered", "HTML Questions Correct"],
            "datasets": [{
              "label": "Questions Correctly Answered",
              "data": [60, 50],
              "backgroundColor": ["purple", "thistle"]
            }]
          },
          cssChartData: {
              "labels": ["CSS Questions Answered", "CSS Questions Correct"],
              "datasets": [{
                "label": "Questions Correctly Answered",
                "data": [45, 42],
                "backgroundColor": ["orange", "yellow"]
              }]
          },
          jsChartData: {
              "labels": ["JS Questions Answered", "JS Questions Correct"],
              "datasets": [{
                "label": "Questions Correctly Answered",
                "data": [35, 35],
                "backgroundColor": ["#0033ff", "cyan"]
              }]
          },
          nodeChartData: {
              "labels": ["Node Questions Answered", "Node Questions Correct"],
              "datasets": [{
                "label": "Questions Correctly Answered",
                "data": [30, 28],
                "backgroundColor": ["crimson", "#ff0066"]
              }]
          },
          apiChartData: {
              "labels": ["API Questions Answered", "API Questions Correct"],
              "datasets": [{
                "label": "Questions Correctly Answered",
                "data": [30, 29],
                "backgroundColor": ["green", "lime"]
              }]
          },
          mongoChartData: {
              "labels": ["Mongo Questions Answered", "Mongo Questions Correct"],
              "datasets": [{
                "label": "Questions Correctly Answered",
                "data": [30, 27],
                "backgroundColor": ["#f48f42", "#f46242"]
              }]
          }
        }
    }

    componentWillMount() {
      this.props.dispatch(fetchUserData());
    }

    render() {

        const currentUser = this.props.currentUser;
        console.log('CurrentUser: '+this.props.currentUser);
        return (
            <div>
            {console.log('CAN YOU SEE THIS? '+JSON.stringify(this.props.currentUser))}
            {(!currentUser) ? <h1>Whodat?</h1> :
              <div>
                <Userdetails user={currentUser.user} />
                {/*
                <Userstats className="profile.css" userData={currentUser.userData}
                lastQuiz={currentUser.lastQuizData} missedMost={currentUser.missedMost}  />
                <BarChart barChartData={currentUser.chartData} />
                <PieChart pieChartData={currentUser.chartData} />
                */}
                <PieChart pieChartData={this.state.htmlChartData} />
                <PieChart pieChartData={this.state.cssChartData} />
                <PieChart pieChartData={this.state.jsChartData} />
                <PieChart pieChartData={this.state.nodeChartData} />
                <PieChart pieChartData={this.state.apiChartData} />
                <PieChart pieChartData={this.state.mongoChartData} />
                {/*
                <RadarChart radarChartData={currentUser.radarData} />
                <PolarChart polarChartData={currentUser.polarData} />
                */}
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
