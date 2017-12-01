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
        const quizQuestions = this.state.questions.map((question, index1) => {
          return (
            <h3>{question.question}</h3>
              question.answers.map((answer, index2) => {
              <MultipleChoice key={index2} {...answer} />
            });
          });
        )
          return (
              <div className="multQuestion">
                {quizQuestions}
              </div>
          );
      }
  }


  // const quizQuestions = this.state.questions.map((index, question) =>
  //   <ol>
  //     <li>{question.question}</li>
  //     <ol>
  //         question.answers.map((index, answer) =>
  //             <li>{answer.answerText}</li>
  //         )
  //     </ol>
  //     )
  //   </ol>
  // );
