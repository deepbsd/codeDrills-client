import React from 'react';

import logo from '../../logo.svg';

import './landing.css';


export default function Landing() {
    return (
            <div className="landing">
                <img src={logo} className="App-logo" alt="logo" />
                <h3>Welcome to CodeDrills</h3>
                <p>
                  CodeDrills helps web developers practice for technical interviews.
                  Here you can take quizzes about HTML, CSS, and many aspects of JS
                  to help you prepare for technical interview questions. The
                  interview is your bridge from where you are in your career to
                  where you want to be.
                </p>
            </div>
        );
}
