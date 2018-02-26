import React from 'react';
import {connect} from 'react-redux';
import UserCategoryStats from '../userCategoryStats';
import UserAggregateStats from '../userAggregateStats';
import UserLatestStats from '../userLatestStats';
import Userdetails from '../userDetails';
// import {BarChart, PieChart, PolarChart, LineChart, RadarChart} from '../chart';

import requiresLogin from './requires-login';
import {fetchProtectedData} from '../../actions/protected-data';

import Style from './style.js';
// import './profile.css'


export class Profile extends React.Component {

    // Bind the handleclick so the user can access graphics panels
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
          activeTab: 'User Stats',
          activeSlide: {
            "User Stats": UserCategoryStats,
            "Aggregate Stats": UserAggregateStats,
            "Latest Stats": UserLatestStats
          }
        }
    }

    // Check whether we're logged in and have a JWT...
    componentDidMount() {
      this.props.dispatch(fetchProtectedData());
    }

    handleClick(e) {
      // let _target = [].indexOf.call(e.currentTarget.children, e.target);
      let _target = e.target.innerHTML;
      console.log('INNER HTML: ', _target);
      this.setState((prevState, props) => ({
        activeTab: _target
      })
    )}

    render() {

        const currentUser = this.props.currentUser;

        const slides = ["User Stats", "Aggregate Stats", "Latest Stats"].map((slide, index) => {
          if (this.state.activeTab === slide) {
            return (
              <Style.li className="active" key={index} onClick={(e) => this.handleClick(e)}>{slide}</Style.li>
            )
          }
          return (
            <Style.li key={index} onClick={(e) => this.handleClick(e)}>{slide}</Style.li>
          )
        });

        const Slide = this.state.activeSlide[this.state.activeTab];
        return (

            <div>
            {console.log('STRINGIFIED: '+JSON.stringify(currentUser))}
            {(!currentUser) ? <h1>Hmmmmm... {this.props.username}  Whodat?</h1> :
              <div>
                <Userdetails user={currentUser.user} />
                <Style.ul className="user">
                  {slides}
                </Style.ul>
                <Slide data={currentUser.userData}  />
                {/* <Slide data={this.state.activeSlide[this.state.activeTab].payload}  />  */}
                {/* <UserCategoryStats data={currentUser.userData} />  */}
              </div> }
            </div>
        );
      }
  }

  // User Auth changes a lot here...  Have to adapt...

const mapStateToProps = state => {
  const authorizedUser = state.auth;
  console.log("Profile--STATEOBJ: ",state);
  return {
    currentUser: state.reducer.currentUser,
    username: state.auth.currentUser.username,
    loggedIn: state.loggedIn,
    name: `${authorizedUser.firstName} ${authorizedUser.lastName}`,
  }
};

export default requiresLogin()(connect(mapStateToProps)(Profile));
// export default connect(mapStateToProps)(Profile);
