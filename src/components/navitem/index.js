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
                  <li><a href={this.props.href}>{this.props.link}</a></li>
            );

    }
}
