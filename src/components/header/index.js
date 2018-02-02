import React from 'react';
import {connect} from 'react-redux';
import {loginUser} from '../../actions';
import NavItem from '../navitem';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.testDispatch = this.testDispatch.bind(this);

        this.state = {
          navs: [
            {
                link: "register",
                href: "/register",
                private: false,
                public: true
            },
            {
                link: "about",
                href: "/about",
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

    // componentDidMount() {
    //     console.log('starting api call...');
    //     this.props.dispatch(fetchQuestions());
    // }

    testDispatch() {
      this.props.dispatch(loginUser(this.props.loggedIn));
    }


    render() {
        //let obj = JSON.parse(this.props.questions);
        const links = this.state.navs.map((link, index) => {
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
    loggedIn: state.loggedIn,
    questions: state.questions
});

export default connect(mapStateToProps)(Header);
