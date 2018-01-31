import * as actions from '../actions';
import update from 'immutability-helper';

const initialState = {
    loggedIn: true,
};

export const reducer = (state = initialState, action) => {
  if (action.type === actions.LOGIN_USER) {
    console.log('Logged In: ' + state.loggedIn);
    return Object.assign({}, state, {
      loggedIn: !action.loggedIn
    });
  } else if (action.type === actions.CHECK_QUESTION) {
    if (action.answerObj.correct) {
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
  } else if (action.type === actions.LOAD_QUESTIONS_SUCCESS) {
    console.log('about to load questions into state...', action);
    return Object.assign({}, state, {
      questions: [...action.questionsArray.questions]
    })
  } else if (action.type === actions.UPDATE_CURRENT) {
    console.log('Updating user data with quiz results now...')
    const newUserData = update(state.currentUser.userData, {
      missedQuestions: {$push: action.quizData.incorrect},
      numberOfQuizzes: {$apply: function(n) {return n+1;}},
      totalQuestions: {$apply: function(n) {return n+10;}},
      totalCorrect: {$apply: function(n) {n + action.quizData.correct.length}},
      jsQuestionsAnswered: {$apply: function(n) { return n + action.quizData.js.length}},
      jsQuestionsCorrect: {$apply: function(n) { return n + action.quizData.js_right.length}},
      cssQuestionsAnswered: {$apply: function(n) { return n + action.quizData.css.length}},
      cssQuestionsCorrect: {$apply: function(n) { return n + action.quizData.css_right.length}},
      htmlQuestionsAnswered: {$apply: function(n) { return n + action.quizData.html.length}},
      htmlQuestionsCorrect: {$apply: function(n) { return n + action.quizData.html_right.length}},
      nodeQuestionsAnswered: {$apply: function(n) { return n + action.quizData.node.length}},
      nodeQuestionsCorrect: {$apply: function(n) { return n + action.quizData.node_right.length}},
      apiQuestionsAnswered: {$apply: function(n) { return n + action.quizData.api.length}},
      apiQuestionsCorrect: {$apply: function(n) { return n + action.quizData.api_right.length}},
      mongoQuestionsAnswered: {$apply: function(n) { return n + action.quizData.mongo.length}},
      mongoQuestionsCorrect: {$apply: function(n) { return n + action.quizData.mongo_right.lengt }}
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