import React from 'react';
//import {Line as LineChart} from 'react-chartjs';
import '../profile/profile.css';

export default function Userstats(props) {

    return (

        <div className="profile">
            <div class="profileContainer">
            <table>
            <caption>General Summary</caption>
            <thead>
            <tr>
                <th>Number of Quizzes</th><th>Total Questions</th><th>Total Correct</th>
                </tr>
                <tr>
                  <td>{props.userData.numberOfQuizzes}</td>
                  <td>{props.userData.totalQuestions}</td>
                  <td>{props.userData.totalCorrect}</td>
                </tr>
            </thead>
            <tbody>
                <tr><td></td><td></td><td></td></tr>
                <th rowspan="2">Javascript Questions ({Math.round((props.userData.jsQuestionsCorrect/props.userData.jsQuestionsAnswered)*100)}%)</th>
                  <td>Questions Asked:</td><td>{props.userData.jsQuestionsAnswered}</td>
                  <tr>
                  <td>Questions Correct:</td><td>{props.userData.jsQuestionsCorrect}</td>
                  </tr>
                <th rowspan="2">HTML Questions ({Math.round((props.userData.htmlQuestionsCorrect/props.userData.htmlQuestionsAnswered)*100)}%)</th>
                  <td>Questions Asked:</td><td>{props.userData.htmlQuestionsAnswered}</td>
                  <tr>
                  <td>Questions Correct:</td><td>{props.userData.htmlQuestionsCorrect}</td>
                  </tr>

                <th rowspan="2">CSS Questions ({Math.round((props.userData.cssQuestionsCorrect/props.userData.cssQuestionsAnswered)*100)}%)</th>
                  <td>Questions Asked:</td><td>{props.userData.cssQuestionsAnswered}</td>
                  <tr>
                  <td>Questions Correct:</td><td>{props.userData.cssQuestionsCorrect}</td>
                  </tr>

                  <th rowspan="2">Node Questions ({Math.round((props.userData.nodeQuestionsCorrect/props.userData.nodeQuestionsAnswered)*100)}%)</th>
                    <td>Questions Asked:</td><td>{props.userData.nodeQuestionsAnswered}</td>
                    <tr>
                    <td>Questions Correct:</td><td>{props.userData.nodeQuestionsCorrect}</td>
                    </tr>

                  <th rowspan="2">API Questions ({Math.round((props.userData.apiQuestionsCorrect/props.userData.apiQuestionsAnswered)*100)}%)</th>
                    <td>Questions Asked:</td><td>{props.userData.apiQuestionsAnswered}</td>
                    <tr>
                    <td>Questions Correct:</td><td>{props.userData.apiQuestionsCorrect}</td>
                    </tr>

                  <th rowspan="2">Mongo Questions ({Math.round((props.userData.mongoQuestionsCorrect/props.userData.mongoQuestionsAnswered)*100)}%)</th>
                    <td>Questions Asked:</td><td>{props.userData.mongoQuestionsAnswered}</td>
                    <tr>
                    <td>Questions Correct:</td><td>{props.userData.mongoQuestionsCorrect}</td>
                    </tr>
              </tbody>
            </table>
            </div>
            <div class="profileContainer">
              <table>
                <caption>Latest Test:</caption>
                <tr>
                <th>Date:</th><th>{new Date(props.lastQuiz.dateOfQuiz).getMonth()}/{new Date(props.lastQuiz.dateOfQuiz).getDay()}/{new Date(props.lastQuiz.dateOfQuiz).getFullYear()}</th>
                </tr>
                <tr><td>Total Questions:</td><td>{props.lastQuiz.totalQuestions}</td></tr>
                <tr><td>Answered Correctly:</td><td>{props.lastQuiz.totalCorrect/props.lastQuiz.totalQuestions*100}%</td></tr>
                <tr><td>Time On Quiz:</td><td>{(props.lastQuiz.timeOnQuiz/60000).toFixed(2)} minutes</td></tr>
                </table>
            </div>
        </div>

    );

}
