import React from 'react';
import {connect} from 'react-redux';

import NavItem from '../navitem';


class Header extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const links = this.props.navs.map((link, index) =>
            <NavItem className="header" key={index} loggedIn={this.props.loggedIn}  {...link} />
        );

        return (
            <div className="header">
                {links}
                <NavItem link="about" href="/about"   />
            </div>
        );
    }
}


const mapStateToProps = state => ({
    currentUser: state.currentUser,
    navs: state.navs,
    loggedIn: state.loggedIn
});

export default connect(mapStateToProps)(Header);
