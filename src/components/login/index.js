import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import Style from './style';
import LoginForm from './login-form';

export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/profile" />;
    }

    return (
        <Style.div className="layout-wrap">
            <h2>Welcome to CodeDrills</h2>
            <LoginForm />
            <Link to="/register">Register</Link>
        </Style.div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
