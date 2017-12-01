import React from 'react';

import MultipleChoice from './multipleChoice';

import './question.css';

export default class Question extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          questions: [
          {
            number: 1,
            type: 'multipleChoice',
            question: "What is your favorite color?",
            answers: [
              {answerText: "red", correct: true},
              {answerText: "blue"},
              {answerText: "green"},
              {answerText: "thistle"},
              {answerText: "cornsilk"}
            ]
          },
          {
            number: 2,
            type: 'multipleChoice',
            question: "What is your favorite programming or scripting language?",
            answers: [
              {answerText: "Python", correct: true},
              {answerText: "Javascript"},
              {answerText: "Ruby"},
              {answerText: "Rust"},
              {answerText: "Bash"}
            ]
          }
        ]
      }
    }

      render() {
        const questions = this.state.questions.map((question, index1) => {
          let answers = question.answers.map((answer, index2) =>
          <MultipleChoice key={index2} {...answer} />
        );
        return (
            <ul className="questionText">
              <h3 key={index1}>{question.question}</h3>
              {answers}
            </ul>
        )
      });

      return (
          <ul className="multQuestion">
            {questions}
          </ul>
      );


  }
}
