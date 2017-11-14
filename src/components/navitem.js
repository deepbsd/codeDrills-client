import React from 'react';



import './navitem.css';



export default class NavItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

            return (
                 this.props.loggedIn === this.props.private ? <li><a href={this.props.href}>{this.props.link}</a></li> : null
            );

    }
}
