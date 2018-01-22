import React from 'react';

import Style from './style';
// import './navitem.css';



export default class NavItem extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if(this.props.doLogout) {
      e.preventDefault();
      this.props.doLogout();
    }
  }


    render() {

            return (
                  <Style.navItem><a href={this.props.href} onClick={this.handleClick} >{this.props.link}</a></Style.navItem>
            );

    }
}
