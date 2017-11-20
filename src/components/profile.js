import React from 'react';
import Footer from './footer';

import './profile.css';


export default class Profile extends React.Component {

    constructor(props) {
        super(props);

        this.loggedIn = true;

        this.state = {
            loggedIn: this.loggedIn,
            user: {
                username: 'Joe',
                firstName: 'Joe',
                lastName: 'Blow',
                password: 'sonorapass'
            },
            userData: {
                numberOfQuizzes: 18,
                totalQuestions: 180,
                totalCorrect: 157,
                jsQuestionsAnswered: 123,
                jsQuestionsCorrect: 199,
                htmlQuestionsAnswered: 45,
                htmlQuestionsCorrect: 44,
                cssQuestionsAnwswered: 12,
                cssQuestionsCorrect: 12
            }
        };
    }


    render() {

        return (
            <div>
                <div className="profile">
                    <img src="http://placekitten.com/g/200/200" alt="" />
                    <form>
                        <input type="text" placeholder="username"></input><br/>
                        <input type="text" placeholder="email"></input><br/>
                        <input type="text" placeholder="password"></input>
                    </form>
                    <div className="profileData">
         
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}