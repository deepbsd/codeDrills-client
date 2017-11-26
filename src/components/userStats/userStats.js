import React from 'react';
//import {Line as LineChart} from 'react-chartjs';
import '../profile/profile.css';

export default function Userstats(props) {

    return (

        <div className="profile">
            <div class="profileContainer">
            <table>
            <caption>General Summary</caption>
            <tr>
                <th>Number of Quizzes</th><th>Total Questions</th><th>Total Correct</th>
                </tr>
                <tr>
                  <td>{props.userData.numberOfQuizzes}</td>
                  <td>{props.userData.totalQuestions}</td>
                  <td>{props.userData.totalCorrect}</td>
                </tr>
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
            </table>
            </div>
            <div class="profileContainer">
              <table>
                <caption>Results from last test:</caption>
                <tr>
                <th>Category:</th><th>{props.missedMost.category}</th>
                </tr>
                <tr><td>Question:</td><td>{props.missedMost.neverCorrect.question}</td></tr>
                <tr><td>Your Answer:</td><td>{props.missedMost.neverCorrect.lastAnswer}</td></tr>
                <tr><td>Correct Answer:</td><td>{props.missedMost.neverCorrect.correctAnswer}</td></tr>
                </table>
            </div>
        </div>

    );

}
