import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import Style from './style';
import LoginForm from './login-form';

export function LandingPage(props) {

    return (
        <Style.div>
            <h2>Welcome to CodeDrills</h2>
            <LoginForm />
            <Link to="/register">Register</Link>
        </Style.div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
