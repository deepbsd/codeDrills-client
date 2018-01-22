import React from 'react';
import {connect} from 'react-redux';
import {loginUser} from '../../actions';
import NavItem from '../navitem';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.testDispatch = this.testDispatch.bind(this);
    }

    testDispatch() {
      this.props.dispatch(loginUser(this.props.loggedIn));
    }


    render() {
        const links = this.props.navs.map((link, index) => {
            if (this.props.loggedIn && link.private) {
              if (link.link === "logout") {
                return (
                  <NavItem key={index} {...link} doLogout={this.testDispatch} />
                )
              }
              return (
                <NavItem key={index} {...link}  />
              )
            } else if (this.props.loggedIn && !link.private && link.public) {
              return  false
            } else if (link.public) {
              return (
                <NavItem key={index} {...link} />
              )
            }
          }
            //<NavItem className="header" key={index} loggedIn={this.props.loggedIn} testDispatch={this.testDispatch}  {...link} />
        );

        return (
            <div className="header">
                {links}
            </div>
        );
    }
}

                //<NavItem link="test" testDispatch={this.testDispatch} />
const mapStateToProps = state => ({
    currentUser: state.currentUser,
    navs: state.navs,
    loggedIn: state.loggedIn
});

export default connect(mapStateToProps)(Header);
