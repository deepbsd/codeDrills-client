import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import Style from './style';
import RegistrationForm from './registration-form';

export function RegistrationPage(props) {
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    if (props.loggedIn) {
        console.log("Register--LoggedIn: ",props.loggedIn);
        return <Redirect to="/profile" />;
    }
    return (
        <Style.div className="layout-wrap">
            <h2>Register for codeDrills</h2>
            <RegistrationForm />
            <Link to="/"></Link>
        </Style.div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);
