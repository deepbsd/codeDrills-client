import React from 'react';
import {connect} from 'react-redux';

import NavItem from '../navitem';

import {clearAuth} from '../../actions/auth';
import {clearAuthToken} from '../../local-storage';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);

        this.state = {
          navs: [
            {
                link: "register",
                href: "/register",
                private: false,
                public: true
            },
            {
                link: "home",
                href: "/home",
                private: true,
                public: true
            },
            {
                link: "login",
                href: "/login",
                private: false,
                public: true
            },
            {
                link: "logout",
                href: null,
                private: true,
                public: false
            },
            {
                link: "profile",
                href: "/profile",
                private: true,
                public: false
            },
            {
                link: "start quiz",
                href: "/startquiz",
                private: true,
                public: false
            }
          ]
        }
    }


    logOut() {
      console.log("So ya wanna log out?");
      this.props.dispatch(clearAuth());
      clearAuthToken();
    }


    render() {
        let loggedIn = (this.props.hasToken) ? true : false;
        console.log("Header--loggedIn: ",this.props.hasToken);
        const links = this.state.navs.map((link, index) => {
            if (loggedIn && link.private) {
              if (link.link === "logout") {
                return (
                  <NavItem key={index} {...link} doLogout={this.logOut} />
                )
              }
              return (
                <NavItem key={index} {...link}  />
              )
            } else if (loggedIn && !link.private && link.public) {
              return  false
            } else if (link.public) {
              return (
                <NavItem key={index} {...link} />
              )
            }
            return false;
          }
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
    hasToken: state.auth.authToken
});

export default connect(mapStateToProps)(Header);
