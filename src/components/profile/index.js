import React from 'react';
import {connect} from 'react-redux';
import Userstats from '../userStats';
import Userdetails from '../userDetails';
import {BarChart, PieChart, PolarChart, LineChart, RadarChart} from '../chart';



import './profile.css';


export class Profile extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {

        const currentUser = this.props.currentUser;

        return (
            <div>
                <Userdetails user={currentUser.user} />
                <Userstats className="profile.css" userData={currentUser.userData}
                lastQuiz={currentUser.lastQuizData} missedMost={currentUser.missedMost}  />
                <BarChart barChartData={currentUser.chartData} />
                <PieChart pieChartData={currentUser.chartData} />
                <RadarChart radarChartData={currentUser.radarData} />
                <PolarChart polarChartData={currentUser.polarData} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    currentUser: state.currentUser,
    loggedIn: state.loggedIn
});

export default connect(mapStateToProps)(Profile);
