import React from 'react';


import NavItem from './navitem';


export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: true,
            navs: [
            {
                link: "register",
                href: "/register",
                private: false
            },
            {
                link: "login",
                href: "/login",
                private: false
            },
            {
                link: "about",
                href: "/about",
                private: this.loggedIn
            },
            {
                link: "logout",
                href: "/logout",
                private: true
            },
            {
                link: "profile",
                href: "/profile",
                private: true
            },]
        };
    }


    render() {
        const links = this.state.navs.map((link, index) =>
            <NavItem key={index} loggedIn={this.state.loggedIn}  {...link} />
        );


        return (
            <div className="header">
                {links}
            </div>
        );
    }
}



