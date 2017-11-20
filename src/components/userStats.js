import React from 'react';

export default function Userstats(props) {

    return (

        <div className="stats">
            <table >
                <th><td>Number of Questions</td><td>Total Questions</td><td>Total Correct</td></th>
                <tr><td>{props.userData.numberOfQuizzes}</td>
                <td>{props.userData.totalQuestions}</td>
                <td>{props.userData.totalCorrect}</td></tr>
            </table>
        </div>

    );

}