import React from 'react';
import {connect} from 'react-redux';
import UserCategoryStats from '../userCategoryStats';
import UserAggregateStats from '../userCategoryStats';
import UserLatestStats from '../userCategoryStats';
import Userdetails from '../userDetails';
// import {BarChart, PieChart, PolarChart, LineChart, RadarChart} from '../chart';



import './profile.css';


export class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
          activeTab: 'UserCategoryStats',
          activeSlide: {
            UserCategoryStats,
            UserAggregateStats,
            UserLatestStats
          }
        }
    }

    handleClick(e) {
      // let _target = [].indexOf.call(e.currentTarget.children, e.target);
      let _target = e.target.innerHTML;
      this.setState((prevState, props) => ({
        activeTab: _target
      })
    )}

    render() {

        const currentUser = this.props.currentUser;

        const slides = ["UserCategoryStats", "UserAggregateStats", "UserLatestStats"].map((slide, index) => {
          if (this.state.activeTab === slide) {
            return (
              <li className="active" onClick={(e) => this.handleClick(e)}>{slide}</li>
            )
          }
          return (
            <li onClick={(e) => this.handleClick(e)}>{slide}</li>
          )
        });

        const Slide = this.state.activeSlide[this.state.activeTab];
        return (

            <div>
            {console.log('STRINGIFIED: '+JSON.stringify(currentUser))}
            {(!currentUser) ? <h1>Error: Whodat?</h1> :
              <div>
                <Userdetails user={currentUser.user} />
                <ul className="user">
                  {slides}
                </ul>
                <Slide data={currentUser.userData}  />
                    {/* <UserCategoryStats data={currentUser.userData} />  */}
              </div> }
            </div>
        );
      }
  }

const mapStateToProps = state => {

  return {
    currentUser: state.currentUser,
    //currentData: state.currentUser.userData,
    loggedIn: state.loggedIn,
  }
};

export default connect(mapStateToProps)(Profile);
