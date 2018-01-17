import React from 'react';

import './navitem.css';



export default class NavItem extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.testDispatch();
  }


    render() {

            return (
                 this.props.loggedIn === this.props.private ? <li><a href={this.props.href}>{this.props.link}</a></li>
                 : (this.props.link.match(/^(logout)$/) && this.props.loggedIn) ? <li><a onClick={this.handleClick}>{this.props.link}</a></li>
                 : (this.props.link.match(/^(login)$/) && !this.props.loggedIn) ? <li><a onClick={this.handleClick}>{this.props.link}</a></li>
                 : null
            );

    }
}
