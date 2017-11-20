import React from 'react';
import Footer from './footer';
import Userstats from './userStats';
import Userdetails from './userDetails';
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
                email: 'joeblow@whatever.com',
                password: 'sonorapass'
            },
            userData: {
                numberOfQuizzes: 18,
                totalQuestions: 180,
                totalCorrect: 157,
                jsQuestionsAnswered: 199,
                jsQuestionsCorrect: 123,
                htmlQuestionsAnswered: 45,
                htmlQuestionsCorrect: 44,
                cssQuestionsAnwswered: 12,
                cssQuestionsCorrect: 12
            },
            lastQuizData: {
                totalQuestions: 10,
                dateOfQuiz: '2017-11-20T14:43:16+00:00',
                totalCorrect: 9,
                timeOnQuiz: 3000340
            },
            missedMost: {
                moreThan3: [5, 18, 45],
                neverCorrect: {
                    question: 'xxx',
                    lastAnswer: 'yyy',
                    choices: [],
                    correctAnswer: 'zzz'
                }
            }
        };
    }


    render() {

        return (
            <div>
                <Userdetails user={this.state.user} />
                <Userstats userData={this.state.userData}  />
                <Footer />
            </div>
        );
    }
}