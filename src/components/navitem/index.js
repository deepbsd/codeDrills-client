import React from 'react';
import { Link } from 'react-router-dom';
import Style from './style';




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
                  <Style.navItem>
                    <Link to={this.props.href} onClick={this.handleClick} >{this.props.link} </Link>
                  </Style.navItem>
            );

    }
}
