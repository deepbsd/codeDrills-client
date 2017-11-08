import React from 'react';


import NavItem from './navitem';


export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: true,
            links: [{
                link: "Register",
                domain: "public"
            },
            {
                link: "Login",
                domain: "public"
            },
            {
                link: "About",
                domain: ["private", "public"]
            },
            {
                link: "logout",
                domain: "private"
            },
            {
                link: "profile",
                domain: "private"
            }
            ]
        };
    }


    render() {

            const links = this.state.links.map((link, index) =>
                <NavItem key={index} {...link} />
            );




        return (
            <div className="">
                {links}
            </div>
        );
    }
}



