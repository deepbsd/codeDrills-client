import React from 'react';

import Answer from './answer';

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
            type: 'image',
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
          },
          {
            number: 6,
            assetUrl: 'https://www.youtube.com/embed/NlOF03DUoWc',
            type: 'videoSnippet',
            question: 'What is the speaker referring to in this segment?',
            answers: [
              {answerText: "hoisting"},
              {answerText: "namespacing"},
              {answerText: "functional programming"},
              {answerText: "es6"},
              {answerText: "html5"}
            ]
          }
        ]
      }
    }

    render() {
      const questions = this.state.questions.map((question, index1) => {
        let answers = question.answers.map((answer, index2) => {
            return (
              <Answer assetUrl={question.assetUrl} type={question.type} key={index2} {...answer} />
            )
          });

        return (
              <div className="questionText">
                <h3 key={index1}>{question.question}</h3>
                {question.type === 'videoSnippet' ? <iframe width="560" height="315" src={question.assetUrl} frameborder="0" allowfullscreen></iframe> : question.type === 'image' ? <img src={question.assetUrl} alt="alt text" /> : null }
                {answers}
              </div>
        )
    });

      return (
            <ul className="multQuestion">
              {questions}
            </ul>
      );

  }

  //   render() {
  //     const questions = this.state.questions.map((question, index1) => {
  //       let answers;
  //       if (question.assetUrl) {
  //         answers = question.answers.map((answer, index2) => {
  //           return (
  //             <HighlightedCode key={index2} {...answer} />
  //           )
  //         });
  //       } else {
  //         answers = question.answers.map((answer, index2) => {
  //           return (
  //               <MultipleChoice key={index2} {...answer} />
  //           )
  //         });
  //       }
  //
  //       return (
  //           <ul className="questionText">
  //
  //             <h3 key={index1}>{question.question}</h3>
  //               {question.assetUrl ? <img src={question.assetUrl} alt="alt text" /> : null}
  //               {answers}
  //           </ul>
  //       )
  //   });
  //
  //     return (
  //         <ul className="multQuestion">
  //           {questions}
  //         </ul>
  //     );
  //
  // }
}
