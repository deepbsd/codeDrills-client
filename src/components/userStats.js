import React from 'react';

export default function Userstats(props) {

    return (

        <div className="stats">
            <table >
                <tr><td>{props.userData.numberOfQuizzes}</td>
                <td>{props.userData.totalQuestions}</td>
                <td>{props.userData.totalCorrect}</td></tr>
            </table>
        </div>

    );

}