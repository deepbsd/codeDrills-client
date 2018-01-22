import * as actions from '../actions';
import update from 'immutability-helper';

import question5 from './img/question5.png';
import question9 from './img/question9.png';
import question16 from './img/question16.png';
import question20 from './img/question20.png';



const initialState = {
      loggedIn: true,
      blurbs: [
        {title: null,
        blurb: `CodeDrills helps web developers practice for technical interviews.
                    Here you can take quizzes about HTML, CSS, and many aspects of JS
                    to help you prepare for technical interview questions. The
                    interview is your bridge from where you are in your career to
                    where you want to be.`
      },
      {title: 'Track Progress in Categories of Coding',
      blurb: `There are 40 questions currently, and they cover HTML, CSS, Vanilla JS,
              Node.js, API's and MongoDB. Each quiz is 10 questions, and your Progress
              in each category is recorded and displayed in various types of graphs.`
      },
      {title: 'See Your Progress Visually with Chart.js',
      blurb: `Chart.js includes support for many different types of graphs, but currently
              your progress in each category mentioned above is displayed with a pie chart,
              a radar chart, and a polar chart.  Your latest quiz performance is displayed as a
              comparison with your historical performance in a radar chart.`
      },
      {title: 'Full Stack Web Dev Emphasis',
      blurb: `Today's full stack web developer must be fluent in a host of technologies. These
              quizzes will focus on the MERN stack (MongoDB, Express.js, React.js, and Node.js).
              Additionally, questions about API's and non-relational databases in general will
              be asked.`
      },
      {title: 'Future Ideas',
      blurb: `Since this is an early release, it includes a very basic set of functionality.
              In future releases, I expect that users will be able to add their own questions,
              will be able to talk in a forum with other developers, and will be able to log in
              using their Github or Stack Overflow accounts.`
      }
      ],
      navs: [
      {
          link: "register",
          href: "/register",
          private: false,
          public: true
      },
      {
          link: "about",
          href: "/about",
          private: true,
          public: true
      },
      {
          link: "login",
          href: "/login",
          private: false,
          public: true
      },
      {
          link: "logout",
          href: null,
          private: true,
          public: false
      },
      {
          link: "profile",
          href: "/profile",
          private: true,
          public: false
      },
      {
          link: "start quiz",
          href: "/startquiz",
          private: true,
          public: false
      }
    ],
    questions: [
      {
        number: 1,
        category: 'html',
        assetUrl: null,
        type: 'multipleChoice',
        question: "Why is it generally a good idea to position CSS <link>s between <head></head> and JS <script>s just before </body>?",
        answers: [
          {answerText: "To have the CSS ready so the page can render properly yet not try to execute the JS until the page elements have fully rendered", chosen: false, correct: true},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false}
        ]
      },
      {
        number: 2,
        category: 'html',
        assetUrl: null,
        type: 'multipleChoice',
        question: "What does a doctype declaration do?",
        answers: [
          {answerText: "Specifies the Document Type Definition (DTD) and its version", chosen: false, correct: true},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false}
        ]
      },
      {
        number: 3,
        category: 'html',
        assetUrl: null,
        type: 'multipleChoice',
        question: "Identify which of the following are HTML5 elements?",
        answers: [
          {answerText: "article, aside, section, main, nav, aside, summary, time, figure, figcaption, footer, header, mark, details", chosen: false, correct: true},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false}
        ]
      },
      {
        number: 4,
        category: 'css',
        assetUrl: null,
        type: 'multipleChoice',
        question: "What is the difference between classes and IDs in CSS?",
        answers: [
          {answerText: "Use IDs to target one element, styles to target many elements", chosen: false, correct: true},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false}
        ]
      },
      {
        number: 5,
        category: 'css',
        assetUrl: question5,
        type: 'image',
        question: "Describe how the divs below are floated.",
        answers: [
          {answerText: "Box2 and Box3 are floated left inside an enclosing div. Box1 is outside that enclosing div.  Float is cleared before Box4.", chosen: false, correct: true},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false}
        ]
      },
      {
        number: 6,
        category: 'css',
        assetUrl: null,
        type: 'multipleChoice',
        question: "What does * { box-sizing: border-box; } do? What are its advantages?",
        answers: [
          {answerText: "You don't have to include margin and padding in height/width size percentages.", chosen: false, correct: true},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false}
        ]
      },
      {
        number: 7,
        category: 'css',
        assetUrl: null,
        type: 'multipleChoice',
        question: "What's the difference between inline and inline-block and block?",
        answers: [
          {answerText: "inline is default, everything on single line; inline-block allows elements on line but allows height and width measurements as with block items; block is how divs and sections are treated by default.", chosen: false, correct: true},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false}
        ]
      },
      {
        number: 8,
        category: 'css',
        assetUrl: null,
        type: 'multipleChoice',
        question: "Describe pseudo-elements and discuss what they are used for.",
        answers: [
          {answerText: "A CSS pseudo-element is used to style specified parts of an element. For example, it can be used to: Style the first letter, or line, of an element. Insert content before, or after, the content of an element.", chosen: false, correct: true},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false}
        ]
      },
      {
        number: 9,
        category: 'js',
        assetUrl: question9,
        type: 'image',
        question: "Here's a class.  How would you instantiate this class?",
        answers: [
          {answerText: "const joe = new Person('Joe');", chosen: false, correct: true},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false}
        ]
      },
      {
        number: 10,
        category: 'js',
        assetUrl: null,
        type: 'multipleChoice',
        question: "When would you not use an arrow function rather than a es5 function?",
        answers: [
          {answerText: "Defining a method on a prototype object.", chosen: false, correct: true},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false}
        ]
      },
      {
        number: 11,
        category: 'js',
        assetUrl: null,
        type: 'multipleChoice',
        question: "Which of the following is an object:",
        answers: [
          {answerText: "{ 1: 'one', 2: 'two', 3: 'three'}", chosen: false, correct: true},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false}
        ]
      },
      {
        number: 12,
        category: 'js',
        assetUrl: null,
        type: 'multipleChoice',
        question: "What is event delegation and event bubbling?",
        answers: [
          {answerText: "Event delegation refers to the process of using event propagation (bubbling) to handle events at a higher level in the DOM than the element on which the event originated. It allows us to attach a single event listener for elements that exist now or in the future.", chosen: false, correct: true},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false}
        ]
      },
      {
        number: 13,
        category: 'js',
        assetUrl: null,
        type: 'multipleChoice',
        question: "What is hoisting?",
        answers: [
          {answerText: "Hoisting is the JavaScript interpreter's action of moving all variable and function declarations to the top of the current scope. However, only the actual declarations are hoisted", chosen: false, correct: true},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false}
        ]
      },
      {
        number: 14,
        category: 'js',
        assetUrl: null,
        type: 'multipleChoice',
        question: "What is the difference between =, ==, and ===?",
        answers: [
          {answerText: "Assignment, comparison without type check, comparison with type check.", chosen: false, correct: true},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false}
        ]
      },
      {
        number: 15,
        category: 'js',
        assetUrl: null,
        type: 'multipleChoice',
        question: "Example of Promise in jQuery.",
        answers: [
          {answerText: "$( 'div' ).promise().done(function() { $( 'p' ).append( ' Finished! ' ); });", chosen: false, correct: true},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false}
        ]
      },
      {
        number: 16,
        category: 'js',
        assetUrl: question16,
        type: 'image',
        question: "In the example below, what would the expected output be for b?",
        answers: [
          {answerText: "hey", chosen: false, correct: true},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false}
        ]
      },
      {
        number: 17,
        category: 'js',
        assetUrl: "https://www.youtube.com/embed/8aGhZQkoFbQ?start=768&end=894",
        type: 'videoSnippet',
        question: "What is this snippet explaining about Node.js?",
        answers: [
          {answerText: "How the event loop works with the stack and the task queue.", chosen: false, correct: true},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false}
        ]
      },
      {
        number: 18,
        category: 'js',
        assetUrl: null,
        type: 'multipleChoice',
        question: "What is an IIFE?",
        answers: [
          {answerText: "An immediately-invoked function expression (or IIFE, pronounced \"iffy\") is a JavaScript programming language idiom which produces a lexical scope using JavaScript's function scoping.", chosen: false, correct: true},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false}
        ]
      },
      {
        number: 19,
        category: 'js',
        assetUrl: null,
        type: 'multipleChoice',
        question: "What is the difference between passing by value and passing by reference?",
        answers: [
          {answerText: "Pass by reference is passing a reference to a memory location, where as passing by value is passing the actual value stored in the memory location.", chosen: false, correct: true},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false}
        ]
      },
      {
        number: 20,
        category: 'js',
        assetUrl: question20,
        type: 'image',
        question: "Identify the callback in this example:",
        answers: [
          {answerText: "It's the ES6 style function with the rocket operator.", chosen: false, correct: true},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false}
        ]
      },
      {
        number: 21,
        category: 'node',
        assetUrl: null,
        type: 'multipleChoice',
        question: "What's the difference between import and require?",
        answers: [
          {answerText: "Require is CommonJS and import is ES6.", chosen: false, correct: true},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false}
        ]
      },
      {
        number: 22,
        category: 'node',
        assetUrl: null,
        type: 'multipleChoice',
        question: "Name three module systems available in Node.js",
        answers: [
          {answerText: "AMD, CommonJS, and ES6 or ES2015 Modules", chosen: false, correct: true},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false}
        ]
      },
      {
        number: 23,
        category: 'node',
        assetUrl: null,
        type: 'multipleChoice',
        question: "Why does console.log in a node file output to terminal instead of the console in the browser?",
        answers: [
          {answerText: "Because the node command is not happening inside the browser.", chosen: false, correct: true},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false}
        ]
      },
      {
        number: 24,
        category: 'node',
        assetUrl: null,
        type: 'multipleChoice',
        question: "In `require('./express')`, what is express?",
        answers: [
          {answerText: "A module depedency.", chosen: false, correct: true},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false}
        ]
      },
      {
        number: 25,
        category: 'node',
        assetUrl: null,
        type: 'multipleChoice',
        question: "What filename is contains all the module dependencies in a project?",
        answers: [
          {answerText: "package.json", chosen: false, correct: true},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false}
        ]
      },
      {
        number: 26,
        category: 'node',
        assetUrl: null,
        type: 'multipleChoice',
        question: "Would gulp be a dev depenency or a dependency?",
        answers: [
          {answerText: "dev dependency", chosen: false, correct: true},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false}
        ]
      },
      {
        number: 27,
        category: 'node',
        assetUrl: null,
        type: 'multipleChoice',
        question: "Choose the correct pair",
        answers: [
          {answerText: "require/module.exports", chosen: false, correct: true},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false}
        ]
      },
      {
        number: 28,
        category: 'node',
        assetUrl: null,
        type: 'multipleChoice',
        question: "What's the difference between const {myObj} = require('./filename') and const myObj = require('./filename')",
        answers: [
          {answerText: "{myObj} is a named export that does not require a default export", chosen: false, correct: true},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false}
        ]
      },
      {
        number: 29,
        category: 'mongo',
        assetUrl: null,
        type: 'multipleChoice',
        question: "What is Mongoose?",
        answers: [
          {answerText: "Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.", chosen: false, correct: true},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false}
        ]
      },
      {
        number: 30,
        category: 'api',
        assetUrl: null,
        type: 'multipleChoice',
        question: "What does REST mean in RESTful API?",
        answers: [
          {answerText: "Representational State Transfer, where state is transferred as an object", chosen: false, correct: true},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false}
        ]
      },
      {
        number: 31,
        category: 'mongo',
        assetUrl: null,
        type: 'multipleChoice',
        question: "What is one advantage to a non-relational database over a relational database?",
        answers: [
          {answerText: "The database schema can be flexible and change without changing the relationships between tables, as it would with a relational database.", chosen: false, correct: true},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false}
        ]
      },
      {
        number: 32,
        category: 'mongo',
        assetUrl: null,
        type: 'multipleChoice',
        question: "What's the difference between SQL and Non-SQL databases at a high level?",
        answers: [
          {answerText: "SQL databases store data in tables and rows using relational algebra; noSQL databases store data in collections of JSON documents", chosen: false, correct: true},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false}
        ]
      },
      {
        number: 33,
        category: 'mongo',
        assetUrl: null,
        type: 'multipleChoice',
        question: "What types of NoSQL databases are there?",
        answers: [
          {answerText: "Document-oriented, key-value, graph, column-oriented", chosen: false, correct: true},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false}
        ]
      },
      {
        number: 34,
        category: 'mongo',
        assetUrl: null,
        type: 'multipleChoice',
        question: "What kind of NoSQL database is MongoDB?",
        answers: [
          {answerText: "Document-oriented", chosen: false, correct: true},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false}
        ]
      },
      {
        number: 35,
        category: 'mongo',
        assetUrl: null,
        type: 'multipleChoice',
        question: "What is a namespace in MongoDB?",
        answers: [
          {answerText: "The namespace is a combination of the database name and the name of the collection or index...", chosen: false, correct: true},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false}
        ]
      },
      {
        number: 36,
        category: 'mongo',
        assetUrl: null,
        type: 'multipleChoice',
        question: "What is the ObjectID composed of for a MongoDB record?",
        answers: [
          {answerText: "Timestamp, Client Machine ID, Client process ID, 3 byte incremented counter", chosen: false, correct: true},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false}
        ]
      },
      {
        number: 37,
        category: 'api',
        assetUrl: null,
        type: 'multipleChoice',
        question: "What are the two types of API functions in Node?",
        answers: [
          {answerText: "blocking and non-blocking", chosen: false, correct: true},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false}
        ]
      },
      {
        number: 38,
        category: 'api',
        assetUrl: null,
        type: 'multipleChoice',
        question: "What are endpoints?",
        answers: [
          {answerText: "Part of the URL after the domain where the router hands the browser to a different program on the website. ", chosen: false, correct: true},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false}
        ]
      },
      {
        number: 39,
        category: 'api',
        assetUrl: null,
        type: 'multipleChoice',
        question: "How and when would I use Postman?",
        answers: [
          {answerText: "To test an API before I have the front-end working with the back-end app.", chosen: false, correct: true},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false}
        ]
      },
      {
        number: 40,
        category: 'api',
        assetUrl: null,
        type: 'multipleChoice',
        question: "What HTTP methods are supported by REST?",
        answers: [
          {answerText: "GET,POST,PUT,DELETE,OPTIONS,HEAD", chosen: false, correct: true},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false},
          {answerText: "blah", chosen: false}
        ]
      }
  ],
  currentQuiz: {
        correct: [],
        incorrect: [],
        js: [],
        js_right: [],
        html: [],
        html_right: [],
        css: [],
        css_right: [],
        node: [],
        node_right: [],
        api: [],
        api_right: [],
        mongo: [],
        mongo_right: []
    },
  missedQuestions: [],
  correctQuestions: [],
  currentUser: {
      user: {
          username: 'Joe',
          firstName: 'Joe',
          lastName: 'Blow',
          email: 'joeblow@whatever.com',
          password: 'sonorapass'
      },
      userData: {
          missedQuestions: [],
          numberOfQuizzes: 20,
          totalQuestions: 200,
          totalCorrect: 187,
          jsQuestionsAnswered: 60,
          jsQuestionsCorrect: 50,
          cssQuestionsAnswered: 45,
          cssQuestionsCorrect: 42,
          htmlQuestionsAnswered: 35,
          htmlQuestionsCorrect: 35,
          nodeQuestionsAnswered: 30,
          nodeQuestionsCorrect: 28,
          apiQuestionsAnswered: 30,
          apiQuestionsCorrect: 29,
          mongoQuestionsAnswered: 5,
          mongoQuestionsCorrect: 5
      },
      lastQuizData: {
          totalQuestions: 10,
          dateOfQuiz: new Date("2017-06-12T16:08:00"),
          totalCorrect: 9,
          timeOnQuiz: 1000340
      },
      missedMost: {
          category: 'Vanilla Javascript',
          moreThan3: [5, 18, 45],
          neverCorrect: {
              question: "What's the difference between 'let' and 'var'?",
              lastAnswer: '\'let\' is not a constant',
              choices: ["'let' is ES5",
              "'var' is ES5",
              "'let is ES6'",
              "'let' pollutes the parent namespace",
              "'var' is not what the cool kids do anymore"],
              correctAnswer: "'let' is ES6"
          }
      },
      chartData: {
        labels: ["JS Questions Answered", "JS Questions Correct", "CSS Questions Answered", "CSS Questions Correct", "HTML Questions Answered", "HTML Questions Correct", "Node Questions Answered","Node Questions Correct","API Questions Answered","API Questions Correct"],
        datasets: [
          {
            label: "Questions Correctly Answered",
            data: [60, 50, 45, 42, 35, 35, 30, 28, 30, 29],
            backgroundColor: ['purple', 'thistle', 'orange', 'yellow', '#0033ff', 'cyan', 'crimson', '#ff0066', 'green', 'lime']
          }
        ]
      },
      radarData: {
        labels: ["JS Pct","CSS Pct", "HTML Pct","Node Pct","API Pct"],
        datasets: [
          {
            label: "Overall Percentages",
            backgroundColor: 'rgba(255, 204, 204,0.7)',
            borderColor: 'rgba(255,99,132,1)',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
            data: [50/60, 42/45, 35/35, 28/30, 29/30],
          },
          {
            label: "Latest Percentages",
            backgroundColor: 'rgba(255, 200, 132,0.7)',
            borderColor: 'rgba(255,99,132,1)',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
            data: [58/60, 45/45, 34/35, 29/30, 30/30],
          }
        ]
      },
      polarData: {
        labels: ["JS Pct","CSS Pct", "HTML Pct","Node Pct","API Pct"],
        datasets: [
          {
            label: "Questions Correctly Answered",
            backgroundColor: ['purple', 'thistle', 'orange', 'yellow', '#0033ff', 'cyan', 'crimson', '#ff0066', 'green', 'lime'],
            borderColor: 'rgba(255,99,132,1)',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
            data: [50/60, 42/45, 35/35, 28/30, 29/30],
          }
        ]
      }
  }
};

export const reducer = (state=initialState, action) => {
  if (action.type === actions.LOGIN_USER) {
    console.log('Logged In: '+state.loggedIn);
    return Object.assign({}, state, {
      loggedIn: !action.loggedIn
    });
  } else if (action.type === actions.CHECK_QUESTION){
    if (action.answerObj.correct){
      console.log('You got it right!');
      return Object.assign({}, state, {
        correctQuestions: [...state.correctQuestions, action.answerObj.number]
      })
    } else {
      console.log('You got it wrong!')
      return Object.assign({}, state, {
        missedQuestions: [...state.missedQuestions, action.answerObj.number]
      })
    }
  } else if (action.type === actions.UPDATE_CURRENT){
    console.log('Updating user data with quiz results now...')
    const newUserData = update(state.currentUser.userData,
      {missedQuestions: {$push: action.quizData.incorrect},
      numberOfQuizzes: {$apply: function(n) {return n+1;}},
      totalQuestions: {$apply: function(n) {return n+10;}},
      totalCorrect: {$apply: function(n) {return n+action.quizData.correct.length}},
      jsQuestionsAnswered: {$apply: function(n) {return n+action.quizData.js.length}},
      jsQuestionsCorrect: {$apply: function(n) {return n+action.quizData.js_right.length}},
      cssQuestionsAnswered: {$apply: function(n) {return n+action.quizData.css.length}},
      cssQuestionsCorrect: {$apply: function(n) {return n+action.quizData.css_right.length}},
      htmlQuestionsAnswered: {$apply: function(n) {return n+action.quizData.html.length}},
      htmlQuestionsCorrect: {$apply: function(n) {return n+action.quizData.html_right.length}},
      nodeQuestionsAnswered: {$apply: function(n) {return n+action.quizData.node.length}},
      nodeQuestionsCorrect: {$apply: function(n) {return n+action.quizData.node_right.length}},
      apiQuestionsAnswered: {$apply: function(n) {return n+action.quizData.api.length}},
      apiQuestionsCorrect: {$apply: function(n) {return n+action.quizData.api_right.length}},
      mongoQuestionsAnswered: {$apply: function(n) {return n+action.quizData.mongo.length}},
      mongoQuestionsCorrect: {$apply: function(n) {return n+action.quizData.mongo_right.length}}
    })
    return {
        ...state,
        currentQuiz: action.quizData,
        currentUser: {
          userData: newUserData
        }
    }
  }
  return state;
};
