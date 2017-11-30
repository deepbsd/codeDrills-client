import React from 'react';

import './question.css';

export default function MultipleChoice(props) {
  return (
    <div>
      <ol className="question">
      <li>{props.questions[0].question}
          <ol>
            <li>{props.questions[0].answers[0].questionText}</li>
            <li>{props.questions[0].answers[1].questionText}</li>
            <li>{props.questions[0].answers[2].questionText}</li>
            <li>{props.questions[0].answers[3].questionText}</li>
            <li>{props.questions[0].answers[4].questionText}</li>
          </ol>
      </li>

      </ol>
    </div>
  );
}
