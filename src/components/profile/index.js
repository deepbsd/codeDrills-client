import React from 'react';
import {connect} from 'react-redux';
import Userstats from '../userStats/userStats';
import Userdetails from '../userDetails/userDetails';
import {BarChart, PieChart} from '../chart';



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
            </div>
        );
    }
}

const mapStateToProps = state => ({
    currentUser: state.currentUser
});

export default connect(mapStateToProps)(Profile);
