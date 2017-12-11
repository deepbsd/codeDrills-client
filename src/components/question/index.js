import React from 'react';

import Answer from './answer';

import question5 from './img/question5.png';
import question9 from './img/question9.png';
import question16 from './img/question16.png';
import question20 from './img/question20.png';




import './question.css';

export default class Question extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          questions: [
            {
              number: 1,
              category: 'html',
              assetUrl: null,
              type: 'multipleChoice',
              question: "Why is it generally a good idea to position CSS <link>s between <head></head> and JS <script>s just before </body>? Do you know any exceptions?",
              answers: [
                {answerText: "To have the CSS ready so the page can render properly yet not try to execute the JS until the page elements have fully rendered", correct: true},
                {answerText: "blah"},
                {answerText: "blah"},
                {answerText: "blah"},
                {answerText: "blah"}
              ]
            },
            {
              number: 2,
              category: 'html',
              assetUrl: null,
              type: 'multipleChoice',
              question: "What does a doctype declaration do?",
              answers: [
                {answerText: "Specifies the Document Type Definition (DTD) and its version", correct: true},
                {answerText: "blah"},
                {answerText: "blah"},
                {answerText: "blah"},
                {answerText: "blah"}
              ]
            },
            {
              number: 3,
              category: 'html',
              assetUrl: null,
              type: 'multipleChoice',
              question: "Identify which of the following are HTML5 elements?",
              answers: [
                {answerText: "article, aside, section, main, nav, aside, summary, time, figure, figcaption, footer, header, mark, details", correct: true},
                {answerText: "blah"},
                {answerText: "blah"},
                {answerText: "blah"},
                {answerText: "blah"}
              ]
            },
            {
              number: 4,
              category: 'css',
              assetUrl: null,
              type: 'multipleChoice',
              question: "What is the difference between classes and IDs in CSS?",
              answers: [
                {answerText: "Use IDs to target one element, styles to target many elements", correct: true},
                {answerText: "blah"},
                {answerText: "blah"},
                {answerText: "blah"},
                {answerText: "blah"}
              ]
            },
            {
              number: 5,
              category: 'css',
              assetUrl: question5,
              type: 'image',
              question: "Describe how the divs below are floated.",
              answers: [
                {answerText: "Box2 and Box3 are floated left inside an enclosing div. Box1 is outside that enclosing div.  Float is cleared before Box4.", correct: true},
                {answerText: "blah"},
                {answerText: "blah"},
                {answerText: "blah"},
                {answerText: "blah"}
              ]
            },
            {
              number: 6,
              category: 'css',
              assetUrl: null,
              type: 'multipleChoice',
              question: "What does * { box-sizing: border-box; } do? What are its advantages?",
              answers: [
                {answerText: "You don't have to include margin and padding in height/width size percentages.", correct: true},
                {answerText: "blah"},
                {answerText: "blah"},
                {answerText: "blah"},
                {answerText: "blah"}
              ]
            },
            {
              number: 7,
              category: 'css',
              assetUrl: null,
              type: 'multipleChoice',
              question: "What's the difference between inline and inline-block and block?",
              answers: [
                {answerText: "", correct: true},
                {answerText: "blah"},
                {answerText: "blah"},
                {answerText: "blah"},
                {answerText: "blah"}
              ]
            },
            {
              number: 8,
              category: 'css',
              assetUrl: null,
              type: 'multipleChoice',
              question: "Describe pseudo-elements and discuss what they are used for.",
              answers: [
                {answerText: "A CSS pseudo-element is used to style specified parts of an element. For example, it can be used to: Style the first letter, or line, of an element. Insert content before, or after, the content of an element.", correct: true},
                {answerText: "blah"},
                {answerText: "blah"},
                {answerText: "blah"},
                {answerText: "blah"}
              ]
            },
            {
              number: 9,
              category: 'js',
              assetUrl: question9,
              type: 'image',
              question: "Here's a class.  How would you instantiate this class?",
              answers: [
                {answerText: "const joe = new Person('Joe');", correct: true},
                {answerText: "blah"},
                {answerText: "blah"},
                {answerText: "blah"},
                {answerText: "blah"}
              ]
            },
            {
              number: 10,
              category: 'js',
              assetUrl: null,
              type: 'multipleChoice',
              question: "When would you not use an arrow function rather than a es5 function?",
              answers: [
                {answerText: "Defining a method on a prototype object.", correct: true},
                {answerText: "blah"},
                {answerText: "blah"},
                {answerText: "blah"},
                {answerText: "blah"}
              ]
            },
            {
              number: 11,
              category: 'js',
              assetUrl: null,
              type: 'multipleChoice',
              question: "Which of the following is an object:",
              answers: [
                {answerText: "{ 1: 'one', 2: 'two', 3: 'three'}", correct: true},
                {answerText: "blah"},
                {answerText: "blah"},
                {answerText: "blah"},
                {answerText: "blah"}
              ]
            },
            {
              number: 12,
              category: 'js',
              assetUrl: null,
              type: 'multipleChoice',
              question: "What is event delegation and event bubbling?",
              answers: [
                {answerText: "Event delegation refers to the process of using event propagation (bubbling) to handle events at a higher level in the DOM than the element on which the event originated. It allows us to attach a single event listener for elements that exist now or in the future.", correct: true},
                {answerText: "blah"},
                {answerText: "blah"},
                {answerText: "blah"},
                {answerText: "blah"}
              ]
            },
            {
              number: 13,
              category: 'js',
              assetUrl: null,
              type: 'multipleChoice',
              question: "What is hoisting?",
              answers: [
                {answerText: "Hoisting is the JavaScript interpreter's action of moving all variable and function declarations to the top of the current scope. However, only the actual declarations are hoisted", correct: true},
                {answerText: "blah"},
                {answerText: "blah"},
                {answerText: "blah"},
                {answerText: "blah"}
              ]
            },
            {
              number: 14,
              category: 'js',
              assetUrl: null,
              type: 'multipleChoice',
              question: "What is the difference between =, ==, and ===?",
              answers: [
                {answerText: "Assignment, comparison without type check, comparison with type check.", correct: true},
                {answerText: "blah"},
                {answerText: "blah"},
                {answerText: "blah"},
                {answerText: "blah"}
              ]
            },
            {
              number: 15,
              category: 'js',
              assetUrl: null,
              type: 'multipleChoice',
              question: "Example of Promise in jQuery.",
              answers: [
                {answerText: "$( 'div' ).promise().done(function() { $( 'p' ).append( ' Finished! ' ); });", correct: true},
                {answerText: "blah"},
                {answerText: "blah"},
                {answerText: "blah"},
                {answerText: "blah"}
              ]
            },
            {
              number: 16,
              category: 'js',
              assetUrl: question16,
              type: 'image',
              question: "In the example below, what would the expected output be for b?",
              answers: [
                {answerText: "hey", correct: true},
                {answerText: "blah"},
                {answerText: "blah"},
                {answerText: "blah"},
                {answerText: "blah"}
              ]
            },
            {
              number: 17,
              category: 'js',
              assetUrl: "https://www.youtube.com/embed/8aGhZQkoFbQ?start=768&end=894",
              type: 'videoSnippet',
              question: "What is this snippet explaining about Node.js?",
              answers: [
                {answerText: "How the event loop works with the stack and the task queue.", correct: true},
                {answerText: "blah"},
                {answerText: "blah"},
                {answerText: "blah"},
                {answerText: "blah"}
              ]
            },
            {
              number: 18,
              category: 'js',
              assetUrl: null,
              type: 'multipleChoice',
              question: "What is an IIFE?",
              answers: [
                {answerText: "An immediately-invoked function expression (or IIFE, pronounced \"iffy\") is a JavaScript programming language idiom which produces a lexical scope using JavaScript's function scoping.", correct: true},
                {answerText: "blah"},
                {answerText: "blah"},
                {answerText: "blah"},
                {answerText: "blah"}
              ]
            },
            {
              number: 19,
              category: 'js',
              assetUrl: null,
              type: 'multipleChoice',
              question: "What is the difference between passing by value and passing by reference?",
              answers: [
                {answerText: "Pass by reference is passing a reference to a memory location, where as passing by value is passing the actual value stored in the memory location.", correct: true},
                {answerText: "blah"},
                {answerText: "blah"},
                {answerText: "blah"},
                {answerText: "blah"}
              ]
            },
            {
              number: 20,
              category: 'js',
              assetUrl: question20,
              type: 'image',
              question: "Identify the callback in this example:",
              answers: [
                {answerText: "correct answer from example...", correct: true},
                {answerText: "blah"},
                {answerText: "blah"},
                {answerText: "blah"},
                {answerText: "blah"}
              ]
            },
            {
              number: 21,
              category: 'js',
              assetUrl: null,
              type: 'multipleChoice',
              question: "What's the difference between import and require?",
              answers: [
                {answerText: "Require is CommonJS and import is ES6.", correct: true},
                {answerText: "blah"},
                {answerText: "blah"},
                {answerText: "blah"},
                {answerText: "blah"}
              ]
            },
            {
              number: 22,
              category: 'js',
              assetUrl: null,
              type: 'multipleChoice',
              question: "Name three module systems available in Node.js",
              answers: [
                {answerText: "AMD, CommonJS, and ES6 or ES2015 Modules", correct: true},
                {answerText: "blah"},
                {answerText: "blah"},
                {answerText: "blah"},
                {answerText: "blah"}
              ]
            },
            {
              number: 23,
              category: 'js',
              assetUrl: null,
              type: 'multipleChoice',
              question: "Why does console.log in a node file output to terminal instead of the console in the browser?",
              answers: [
                {answerText: "Because the node command is not happening inside the browser.", correct: true},
                {answerText: "blah"},
                {answerText: "blah"},
                {answerText: "blah"},
                {answerText: "blah"}
              ]
            },
            {
              number: 24,
              category: 'js',
              assetUrl: null,
              type: 'multipleChoice',
              question: "In `require('./express')`, what is express?",
              answers: [
                {answerText: "A module depedency.", correct: true},
                {answerText: "blah"},
                {answerText: "blah"},
                {answerText: "blah"},
                {answerText: "blah"}
              ]
            },
            {
              number: 25,
              category: 'js',
              assetUrl: null,
              type: 'multipleChoice',
              question: "What filename is contains all the module dependencies in a project?",
              answers: [
                {answerText: "package.json", correct: true},
                {answerText: "blah"},
                {answerText: "blah"},
                {answerText: "blah"},
                {answerText: "blah"}
              ]
            },
            {
              number: 26,
              category: 'js',
              assetUrl: null,
              type: 'multipleChoice',
              question: "Would gulp be a dev depenency or a dependency?",
              answers: [
                {answerText: "dev dependency", correct: true},
                {answerText: "blah"},
                {answerText: "blah"},
                {answerText: "blah"},
                {answerText: "blah"}
              ]
            },
            {
              number: 27,
              category: 'js',
              assetUrl: null,
              type: 'multipleChoice',
              question: "Choose the correct pair",
              answers: [
                {answerText: "require/module.exports", correct: true},
                {answerText: "blah"},
                {answerText: "blah"},
                {answerText: "blah"},
                {answerText: "blah"}
              ]
            },
            {
              number: 28,
              category: 'js',
              assetUrl: null,
              type: 'multipleChoice',
              question: "What's the difference between const {myObj} = require('./filename') and const myObj = require('./filename')",
              answers: [
                {answerText: "{myObj} is a named export that does not require a default export", correct: true},
                {answerText: "blah"},
                {answerText: "blah"},
                {answerText: "blah"},
                {answerText: "blah"}
              ]
            },
            {
              number: 29,
              category: 'js',
              assetUrl: null,
              type: 'multipleChoice',
              question: "What is Mongoose?",
              answers: [
                {answerText: "Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.", correct: true},
                {answerText: "blah"},
                {answerText: "blah"},
                {answerText: "blah"},
                {answerText: "blah"}
              ]
            },
            {
              number: 30,
              category: 'js',
              assetUrl: null,
              type: 'multipleChoice',
              question: "What does REST mean in RESTful API?",
              answers: [
                {answerText: "Representational State Transfer, where state is transferred as an object", correct: true},
                {answerText: "blah"},
                {answerText: "blah"},
                {answerText: "blah"},
                {answerText: "blah"}
              ]
            },
            {
              number: 31,
              category: 'js',
              assetUrl: null,
              type: 'multipleChoice',
              question: "What is one advantage to a non-relational database over a relational database?",
              answers: [
                {answerText: "The database schema can be flexible and change without changing the relationships between tables, as it would with a relational database.", correct: true},
                {answerText: "blah"},
                {answerText: "blah"},
                {answerText: "blah"},
                {answerText: "blah"}
              ]
            }
        ]
      }
    }

    render() {
      const questions = this.state.questions.map((question, index1) => {
        let answers = question.answers.map((answer, index2) => {
            return (
              <Answer assetUrl={question.assetUrl} type={question.type}
                key={index2} {...answer} />
            )
          });

        return (
              <ul className="question">
                <li><span class="questionText" key={index1}>{question.number}. {question.question}</span></li>
                {question.type === 'videoSnippet' ?
                  <iframe width="560" height="315" src={question.assetUrl}
                    title="videoSnippet" frameborder="0" allowfullscreen>
                  </iframe> : question.type === 'image' ?
                  <img src={question.assetUrl} alt="alt text" /> : null }
                {answers}
              </ul>
        )
    });

      return (
            <div class="questionWrap">
              {questions}
            </div>
      );

  }

  // {
  //   number: 1,
  //   assetUrl: null,
  //   type: 'multipleChoice',
  //   question: "What is your favorite color?",
  //   answers: [
  //     {answerText: "red", correct: true},
  //     {answerText: "blue"},
  //     {answerText: "green"},
  //     {answerText: "thistle"},
  //     {answerText: "cornsilk"}
  //   ]
  // },
  // {
  //   number: 2,
  //   assetUrl: null,
  //   type: 'multipleChoice',
  //   question: "What is your favorite programming or scripting language?",
  //   answers: [
  //     {answerText: "Python", correct: true},
  //     {answerText: "Javascript"},
  //     {answerText: "Ruby"},
  //     {answerText: "Rust"},
  //     {answerText: "Bash"}
  //   ]
  // },
  // {
  //   number: 3,
  //   assetUrl: null,
  //   type: 'multipleChoice',
  //   question: "How many fingers am I holding up?",
  //   answers: [
  //     {answerText: "one"},
  //     {answerText: "two", correct: true},
  //     {answerText: "three"},
  //     {answerText: "four"},
  //     {answerText: "five"}
  //   ]
  // },
  // {
  //   number: 4,
  //   assetUrl: "http://placekitten.com/g/400/400",
  //   type: 'image',
  //   question: 'Which line throws a reference error?',
  //   answers: [
  //     {answerText: "2"},
  //     {answerText: "4"},
  //     {answerText: "6"},
  //     {answerText: "8"},
  //     {answerText: "9"}
  //   ]
  // },
  // {
  //   number: 5,
  //   assetUrl: null,
  //   type: 'fillInBlank',
  //   question: 'IIFE stands for ______ Invoked Function _______',
  //   answers: [
  //     {answerText: "Invoked, Expression"},
  //     {answerText: "Internal, External"},
  //     {answerText: "Inside, Extra"},
  //     {answerText: "Immediately, Expression"},
  //     {answerText: "Internally, Expression"}
  //   ]
  // },
  // {
  //   number: 6,
  //   assetUrl: 'https://www.youtube.com/embed/NlOF03DUoWc?start=23&end=26',
  //   type: 'videoSnippet',
  //   question: 'What is the speaker referring to in this segment?',
  //   answers: [
  //     {answerText: "hoisting"},
  //     {answerText: "namespacing"},
  //     {answerText: "functional programming"},
  //     {answerText: "es6"},
  //     {answerText: "html5"}
  //   ]
  // }

}
