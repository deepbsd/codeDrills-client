import React from 'react';
import Footer from '../footer/footer';
import Userstats from '../userStats/userStats';
import Userdetails from '../userDetails/userDetails';
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
                cssQuestionsAnswered: 12,
                cssQuestionsCorrect: 12,
                htmlQuestionsAnswered: 45,
                htmlQuestionsCorrect: 44,
            },
            lastQuizData: {
                totalQuestions: 10,
                dateOfQuiz: '2017-11-20T14:43:16+00:00',
                totalCorrect: 9,
                timeOnQuiz: 3000340
            },
            missedMost: {
                category: 'Vanilla Javascript',
                moreThan3: [5, 18, 45],
                neverCorrect: {
                    question: "What's the difference between 'let' and 'var'?",
                    lastAnswer: '\'let\' is not a constant',
                    choices: ["'let' is ES5",
                    "'var' is ES5",
                    "'let is ES6'",
                    "'let' pollutes the parent namespace",
                    "'var' is not what the cool kids do anymore"],
                    correctAnswer: "'let' is ES6"
                }
            }
        };
    }


    render() {

        return (
            <div>
                <Userdetails user={this.state.user} />
                <Userstats className="profile.css" userData={this.state.userData}
                lastQuiz={this.state.lastQuizData} missedMost={this.state.missedMost}  />
                <Footer />
            </div>
        );
    }
}
