import React from 'react';
import './profile.css';

export default function Userstats(props) {

    return (

        <div className="profile">
            <table >
                <th><td>Number of Questions</td><td>Total Questions</td><td>Total Correct</td></th>
                <tr><td>{props.userData.numberOfQuizzes}</td>
                <td>{props.userData.totalQuestions}</td>
                <td>{props.userData.totalCorrect}</td></tr>
            </table>
        </div>

    );

}
