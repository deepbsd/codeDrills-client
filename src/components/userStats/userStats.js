import React from 'react';
import '../profile/profile.css';

export default function Userstats(props) {

    return (

        <div className="profile">
            <table>
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
                  <td>Questions Asked:</td><td>{props.userData.cssQuestionsAnwswered}</td>
                  <tr>
                  <td>Questions Correct:</td><td>{props.userData.cssQuestionsCorrect}</td>
                  </tr>
            </table>
        </div>

    );

}
