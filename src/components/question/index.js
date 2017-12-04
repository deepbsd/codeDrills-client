import React from 'react';

import MultipleChoice from './multipleChoice';
import HighlightedCode from './highlightedCode';

import './question.css';

export default class Question extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          questions: [
          {
            number: 1,
            assetUrl: null,
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
            assetUrl: null,
            type: 'multipleChoice',
            question: "What is your favorite programming or scripting language?",
            answers: [
              {answerText: "Python", correct: true},
              {answerText: "Javascript"},
              {answerText: "Ruby"},
              {answerText: "Rust"},
              {answerText: "Bash"}
            ]
          },
          {
            number: 3,
            assetUrl: null,
            type: 'multipleChoice',
            question: "How many fingers am I holding up?",
            answers: [
              {answerText: "one"},
              {answerText: "two", correct: true},
              {answerText: "three"},
              {answerText: "four"},
              {answerText: "five"}
            ]
          },
          {
            number: 4,
            assetUrl: "http://placekitten.com/g/400/400",
            type: 'highlightedCode',
            question: 'Which line throws a reference error?',
            answers: [
              {answerText: "2"},
              {answerText: "4"},
              {answerText: "6"},
              {answerText: "8"},
              {answerText: "9"}
            ]
          }
        ]
      }
    }

      render() {
        const questions = this.state.questions.map((question, index1) => {
          if (question.assetUrl) {
            let answers = question.answers.map((answer, index2) {
              <img src={answer.assetUrl} alt="alternate text" />
              <HighlightedCode key={index2} {...answer} />
            })
          } else {
            let answers = question.answers.map((answer, index2) =>
            <MultipleChoice key={index2} {...answer} />
          });

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
