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
            assetUrl: false,
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
            assetUrl: false,
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
            assetUrl: false,
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
          },
          {
            number: 5,
            assetUrl: null,
            type: 'fillInBlank',
            question: 'IIFE stands for ______ Invoked Function _______',
            answers: [
              {answerText: "Invoked, Expression"},
              {answerText: "Internal, External"},
              {answerText: "Inside, Extra"},
              {answerText: "Immediately, Expression"},
              {answerText: "Internally, Expression"}
            ]
          }
        ]
      }
    }

    render() {
      const questions = this.state.questions.map((question, index1) => {
        let answers;
        if (question.assetUrl) {
          answers = question.answers.map((answer, index2) => {
            return (
              <HighlightedCode key={index2} {...answer} />
            )
          });
        } else {
          answers = question.answers.map((answer, index2) => {
            return (
                <MultipleChoice key={index2} {...answer} />
            )
          });
        }

        return (
            <ul className="questionText">

              <h3 key={index1}>{question.question}</h3>
                {question.assetUrl ? <img src={question.assetUrl} alt="alt text" /> : null}
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
