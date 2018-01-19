import React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import Landing from '../landing';
import Register from '../register';

import About from '../about';
import Profile from '../profile';

import Question from '../question';


export default function Main(props) {
    return (
        <Router>
            <div >

                <Route exact path="/" component={Landing} />
                <Route exact path="/register" component={Register} />

                <Route exact path="/about" component={About} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/startquiz" component={Question} />


            </div>
        </Router>
    );
}
