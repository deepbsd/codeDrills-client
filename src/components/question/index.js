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
              {questionText: "red", correct: true},
              {questionText: "blue"},
              {questionText: "green"},
              {questionText: "thistle"},
              {questionText: "cornsilk"}
            ]
          },
          {
            number: 2,
            type: 'multipleChoice',
            question: "What is your favorite programming or scripting language?",
            answers: [
              {questionText: "Python", correct: true},
              {questionText: "Javascript"},
              {questionText: "Ruby"},
              {questionText: "Rust"},
              {questionText: "Bash"}
            ]
          }
        ]
      }
    }

      render() {

          return (
              <div className="multQuestion">
              <MultipleChoice questions={this.state.questions} />
              </div>
          );
      }
  }
