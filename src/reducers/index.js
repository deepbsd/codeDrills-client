// IMPORTS
import * as actions from '../actions';
import update from 'immutability-helper';


// INITIAL STATE
const initialState = {
  authToken: null, // authToken !== null does not mean it has been validated
  correctQuestions: [],
  currentQuiz: {
    "api": [],
    "api_right": [],
    "correct": [],
    "css": [],
    "css_right": [],
    "html": [],
    "html_right": [],
    "incorrect": [],
    "js": [],
    "js_right": [],
    "mongo": [],
    "mongo_right": [],
    "node": [],
    "node_right": [],
  },
  currentUser: {
    lastQuizData: {
      "dateOfQuiz": "",
      "totalCorrect": 0,
      "totalQuestions": 0
    },
    user: {},
    userData: {
      "apiQuestionsAnswered": 0,
      "apiQuestionsCorrect": 0,
      "cssQuestionsAnswered": 0,
      "cssQuestionsCorrect": 0,
      "htmlQuestionsAnswered": 0,
      "htmlQuestionsCorrect": 0,
      "jsQuestionsAnswered": 0,
      "jsQuestionsCorrect": 0,
      "missedQuestions": [],
      "mongoQuestionsAnswered": 0,
      "mongoQuestionsCorrect": 0,
      "nodeQuestionsAnswered": 0,
      "nodeQuestionsCorrect": 0,
      "numberOfQuizzes": 0,
      "totalCorrect": 0,
      "totalQuestions": 0
    }
  },
  data: '',
  error: null,
  loading: false,
  missedQuestions: [],
  questions: []
};


//REDUCERS
export const reducer = (state = initialState, action) => {
  if (action.type === actions.ADD_CURRENT_USER_TO_STATE) {
    return Object.assign({}, state, {
      currentUser: {
        user: action.userObj.user
      }
    })
  } else if (action.type === actions.AUTH_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  } else if (action.type === actions.AUTH_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    });
  } else if (action.type === actions.AUTH_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      currentUser: action.currentUser,
      userName: action.currentUser.username
    });
  } else if (action.type === actions.CHECK_QUESTION) {
    if (action.answerObj.correct) {
      return Object.assign({}, state, {
        correctQuestions: [...state.correctQuestions, action.answerObj.number]
      })
    } else {
      return Object.assign({}, state, {
        missedQuestions: [...state.missedQuestions, action.answerObj.number]
      })
    }
  } else if (action.type === actions.CLEAR_AUTH) {
    return Object.assign({}, state, {
      authToken: null,
      currentUser: null
    });
  } else if (action.type === actions.FETCH_PROTECTED_DATA_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  } else if (action.type === actions.FETCH_PROTECTED_DATA_SUCCESS) {
    return Object.assign({}, state, {
      data: action.data,
      error: null
    });
  } else if (action.type === actions.FETCH_USER_DATA_SUCCESS) {
    return Object.assign({}, state, {
      currentUser: action.currentuser
    })
  } else if (action.type === actions.LOAD_QUESTIONS_SUCCESS) {
    return Object.assign({}, state, {
      questions: [...action.questionsArray.questions]
    })
  } else if (action.type === actions.SET_AUTH_TOKEN) {
    return Object.assign({}, state, {
      authToken: action.authToken
    });
  } else if (action.type === actions.UPDATE_CURRENT) {
    const newUserData = update(state.currentUser.userData, {
      missedQuestions: {
        $push: action.quizData.incorrect
      },
      numberOfQuizzes: {
        $apply: function(n) {
          return n + 1;
        }
      },
      totalQuestions: {
        $apply: function(n) {
          return n + 10;
        }
      },
      totalCorrect: {
        $apply: function(n) {
          return n + action.quizData.correct.length
        }
      },
      jsQuestionsAnswered: {
        $apply: function(n) {
          return n + action.quizData.js.length
        }
      },
      jsQuestionsCorrect: {
        $apply: function(n) {
          return n + action.quizData.js_right.length
        }
      },
      cssQuestionsAnswered: {
        $apply: function(n) {
          return n + action.quizData.css.length
        }
      },
      cssQuestionsCorrect: {
        $apply: function(n) {
          return n + action.quizData.css_right.length
        }
      },
      htmlQuestionsAnswered: {
        $apply: function(n) {
          return n + action.quizData.html.length
        }
      },
      htmlQuestionsCorrect: {
        $apply: function(n) {
          return n + action.quizData.html_right.length
        }
      },
      nodeQuestionsAnswered: {
        $apply: function(n) {
          return n + action.quizData.node.length
        }
      },
      nodeQuestionsCorrect: {
        $apply: function(n) {
          return n + action.quizData.node_right.length
        }
      },
      apiQuestionsAnswered: {
        $apply: function(n) {
          return n + action.quizData.api.length
        }
      },
      apiQuestionsCorrect: {
        $apply: function(n) {
          return n + action.quizData.api_right.length
        }
      },
      mongoQuestionsAnswered: {
        $apply: function(n) {
          return n + action.quizData.mongo.length
        }
      },
      mongoQuestionsCorrect: {
        $apply: function(n) {
          return n + action.quizData.mongo_right.length
        }
      }
    })
    const newLastQuizData = update(state.currentUser.lastQuizData, {
      totalQuestions: {
        $apply: function(n) {
          return n + 10;
        }
      },
      dateOfQuiz: {
        $set: new Date().toString()
      },
      totalCorrect: {
        $apply: function(n) {
          return 10 - action.quizData.incorrect.length
        }
      }
    })
    return {
      ...state,
      currentQuiz: action.quizData,
      currentUser: {
        userData: newUserData,
        lastQuizData: newLastQuizData
      }
    }
  }
  return state;
};
