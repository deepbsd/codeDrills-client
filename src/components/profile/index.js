import React from 'react';
import {connect} from 'react-redux';
import UserCategoryStats from '../userCategoryStats';
import UserAggregateStats from '../userAggregateStats';
import UserLatestStats from '../userLatestStats';
import Userdetails from '../userDetails';
// import {BarChart, PieChart, PolarChart, LineChart, RadarChart} from '../chart';

// import store from '../../store';

import requiresLogin from './requires-login';
import {fetchProtectedData} from '../../actions/protected-data';
// import {createNewUserData} from '../../actions';

import Style from './style.js';
// import './profile.css'
import {fetchUserData} from '../../actions';

export class Profile extends React.Component {

    // Bind the handleclick so the user can access graphics panels
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
          activeTab: 'Category Stats',
          activeSlide: {
            "Category Stats": UserCategoryStats,
            "Aggregate Stats": UserAggregateStats,
            "Latest Stats": UserLatestStats
          }
        }
    }

    // Check whether we're logged in and have a JWT...
    // Also must check if user is new; if so, dispatch createNewUserData
    componentDidMount() {

        this.props.dispatch(fetchProtectedData())
        this.props.dispatch(fetchUserData(this.props.username.username))
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

        const slides = ["Category Stats", "Aggregate Stats", "Latest Stats"].map((slide, index) => {
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
            { console.log('PROFILE USER: ',currentUser) }
            {(!currentUser) ? <h1>Hmmmmm... {this.props.username.username}  Whodat?  Where is ma Data?</h1> :
              <div>
                <Userdetails user={this.props.username} />
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
    // currentUser: state.reducer.currentUser,
    currentUser: state.reducer.currentUser,
    username: state.auth.currentUser,
    authUser: state.auth.currentUser,
    loggedIn: state.loggedIn,
    fullname: `${authorizedUser.firstName} ${authorizedUser.lastName}`,
  }
};

export default requiresLogin()(connect(mapStateToProps)(Profile));
// export default connect(mapStateToProps)(Profile);
