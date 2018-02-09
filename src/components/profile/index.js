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
    }

    componentWillMount() {
      this.props.dispatch(fetchUserData());
    }

    render() {

        const currentUser = this.props.currentUser;

        return (
            <div>
            {console.log('CAN YOU SEE THIS? '+JSON.stringify(this.props.currentUser))}
            {(!currentUser) ? <h1>Error: Whodat?</h1> :
              <div>
                <Userdetails user={currentUser.user} />
                <Userstats className="profile.css" userData={currentUser.userData}
                lastQuiz={currentUser.lastQuizData} missedMost={currentUser.missedMost}  />
                <BarChart barChartData={currentUser.chartData} />
                <PieChart pieChartData={currentUser.chartData} />
                <RadarChart radarChartData={currentUser.radarData} />
                <PolarChart polarChartData={currentUser.polarData} />
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
