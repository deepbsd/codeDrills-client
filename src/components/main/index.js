import React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import Landing from '../landing';
import Register from '../register';
import Login from '../login';
import About from '../about';
import Profile from '../profile';
import Logout from '../logout';
import Question from '../question';


export default function Main(props) {
    return (
        <Router>
            <div >

                <Route exact path="/" component={Landing} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/about" component={About} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/startquiz" component={Question} />
                <Route exact path="/logout" component={Logout} />

            </div>
        </Router>
    );
}