import React from 'react';
import {connect} from 'react-redux';
import UserCategoryStats from '../userCategoryStats';
import UserAggregateStats from '../userAggregateStats';
import UserLatestStats from '../userLatestStats';
import Userdetails from '../userDetails';
import {resetUserDataDbSuccess} from '../../actions';
// import {BarChart, PieChart, PolarChart, LineChart, RadarChart} from '../chart';

// import store from '../../store';

import requiresLogin from './requires-login';
import {fetchProtectedData} from '../../actions/protected-data';
// import {createNewUserData} from '../../actions';

import Style from './style.js';

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
        this.props.dispatch(fetchProtectedData());
        // this.props.dispatch(addCurrentUserToState(this.props.currentUser));
        this.props.dispatch(fetchUserData(this.props.username.username));
        //console.log("PROFILE mount(): Fetched userdata from DB...");
        this.props.dispatch(resetUserDataDbSuccess());
    }

    handleClick(e) {
      // let _target = [].indexOf.call(e.currentTarget.children, e.target);
      let _target = e.target.innerHTML;
      //console.log('INNER HTML: ', _target);
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

            {(!currentUser.user._id) ? <h1>Hmmmmm... {this.props.username.username}  Whodat?  Where is ma Data?</h1> :

              <div>
                <Userdetails user={this.props.username} email={this.props.email} />
                <Style.ul className="user">
                  {slides}
                </Style.ul>
                <Slide data={currentUser.userData} newdata={this.props.currentQuiz} />


              </div>}

            </div>
        );
      }
  }

  // User Auth changes a lot here...  Have to adapt...

const mapStateToProps = state => {
  const whatever = state;
  const authorizedUser = state.auth;
  console.log("Profile--STATEOBJ: ",whatever);
  return {
    currentQuiz: state.reducer.currentQuiz,
    currentUser: state.reducer.currentUser,
    email: state.reducer.email,
    username: state.auth.currentUser,
    authUser: state.auth.currentUser,
    loggedIn: state.loggedIn,
    fullname: `${authorizedUser.firstName} ${authorizedUser.lastName}`,
  }
};

export default requiresLogin()(connect(mapStateToProps)(Profile));
// export default connect(mapStateToProps)(Profile);
