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
    questions: [],
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
  } else if (action.type === actions.LOAD_QUESTIONS){
    console.log('Loading Questions...');
    return Object.assign({}, state, {
      questions: action.questionsArray
    })
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
