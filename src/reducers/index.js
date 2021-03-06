import * as actions from '../actions';
import update from 'immutability-helper';

const lastQuizReset = {
          "correct": [],
          "incorrect": [],
          "js": [],
          "js_right": [],
          "html": [],
          "html_right": [],
          "css": [],
          "css_right": [],
          "node": [],
          "node_right": [],
          "api": [],
          "api_right": [],
          "mongo": [],
          "mongo_right": []
}

const initialState = {

      id: null,
      userDataDbUpdated: false,
      currentQuiz: {
          "correct": [],
          "incorrect": [],
          "js": [],
          "js_right": [],
          "html": [],
          "html_right": [],
          "css": [],
          "css_right": [],
          "node": [],
          "node_right": [],
          "api": [],
          "api_right": [],
          "mongo": [],
          "mongo_right": []
      },
      missedQuestions: [],
      correctQuestions: [],
      questions: [],
      currentUser: {
        user: {},
        userData: {
          "missedQuestions": [],
          "numberOfQuizzes": 0,
          "totalQuestions": 0,
          "totalCorrect": 0,
          "jsQuestionsAnswered": 0,
          "jsQuestionsCorrect": 0,
          "cssQuestionsAnswered": 0,
          "cssQuestionsCorrect": 0,
          "htmlQuestionsAnswered": 0,
          "htmlQuestionsCorrect": 0,
          "nodeQuestionsAnswered": 0,
          "nodeQuestionsCorrect": 0,
          "apiQuestionsAnswered": 0,
          "apiQuestionsCorrect": 0,
          "mongoQuestionsAnswered": 0,
          "mongoQuestionsCorrect": 0
        },
        lastQuizData: {
          "totalQuestions": 0,
          "dateOfQuiz": "",
          "totalCorrect": 0
        }
      }
};

export const reducer = (state=initialState, action, lqReset=lastQuizReset) => {
  if (action.type === actions.CHECK_QUESTION){
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
  } else if (action.type === actions.LOAD_QUESTIONS_SUCCESS){
        //console.log('REDUCER action: about to load questions into state...', action);
    return Object.assign({}, state, {
      questions: [...action.questionsArray.questions]
    })
  } else if (action.type === actions.FETCH_USER_DATA_SUCCESS){
      //console.log('REDUCER, action.currentuser: about to load user data into state...', action);
      return Object.assign({}, state, {
        id: action.currentuser.id,
        currentUser:  action.currentuser.currentUser
    })
  } else if (action.type === actions.ADD_CURRENT_USER_TO_STATE) {
    //console.log('REDUCER: updating global state with currently logged in user object...', action.userObj);
    return {
      ...state,
      currentUser: {
        user: action.userObj.user,
        userData: state.currentUser.userData,
        lastQuizData: state.currentUser.lastQuizData
      }
    }
  } else if (action.type === actions.UPDATE_USERDATA_DB_SUCCESS){
       return {
         ...state,
         userDataDbUpdated: action.userDataDbUpdated
       }
  } else if (action.type === actions.RESET_USERDATA_DB_SUCCESS){
        return {
         ...state,
         userDataDbUpdated: action.userDataDbUpdated
       }
  
  } else if (action.type === actions.RESET_LASTQUIZ_DATA){
      return {
         ...state,
         currentQuiz: lqReset
      }
  } else if (action.type === actions.UPDATE_CURRENT){
    //console.log('## REDUCER: Updating GLOBAL user data with quiz results now from action...',action.quizData)
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
    const newLastQuizData = update(state.currentUser.lastQuizData,
      {totalQuestions: {$apply: function(n) {return 10;}},
      dateOfQuiz: {$set: new Date().toString()},
      totalCorrect: {$apply: function(n) {return 10-action.quizData.incorrect.length}}
    })

    return {
        ...state,
        currentQuiz: action.quizData,
        currentUser: {
          user: state.currentUser.user,
          userData: newUserData,
          lastQuizData: newLastQuizData
        }
    }
  }
  return state;
};
