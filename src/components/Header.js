import React from 'react';


import NavItem from './navitem';


export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: true,
            privateLinks: [
            {
                link: "about"       
            },
            {
                link: "logout"
            },
            {
                link: "profile"
            }
            ],
            publicLinks: [
            {
                link: "register"
            },
            {
                link: "login"
            },
            {
                link: "about"
            }]
        };
    }


    render() {
            let links;
            if (this.state.loggedIn){
                links = this.state.privateLinks.map((link, index) =>
                    <NavItem key={index} {...link} />
                );
            } else {
                links = this.state.publicLinks.map((link, index) =>
                    <NavItem key={index} {...link} />
                );

            }


        return (
            <div className="header">
                {links}
            </div>
        );
    }
}



