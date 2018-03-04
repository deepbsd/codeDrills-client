import {API_BASE_URL} from '../config';

import store from '../store';

export const START_QUIZ = 'START_QUIZ';
export const startQuiz = () => ({
  type: START_QUIZ,
})

export const LOGIN_USER = 'LOGIN_USER';
export const loginUser = loggedIn => ({
    type: LOGIN_USER,
    loggedIn
});

export const CHECK_QUESTION = 'CHECK_QUESTION';
export const  checkQuestion = (answerObj) => ({
  type: CHECK_QUESTION,
  answerObj
});


export const fetchUserData = () => dispatch => {
  {/* let userName = store.getState().auth.username; */}
  let userName = "deepbsd";
  fetch(`${API_BASE_URL}/users/${userName}`)
    .then(results => {
      if (!results.ok) {
        console.log('Oops, did not get the user data!', results);
        return Promise.reject(results.statusText);
      }
      console.log("REDUCER: ", results);
      return results.json();
    })
    .then(userData => {
      return userData;
    })
    .then(currentUser => {
      dispatch(fetchUserDataSuccess(currentUser))
    });
};

export const FETCH_USER_DATA_SUCCESS = 'FETCH_USER_DATA_SUCCESS';
export const fetchUserDataSuccess = (currentuser) => ({
  type: FETCH_USER_DATA_SUCCESS,
  currentuser
});


export const fetchQuestions = () => dispatch => {
  fetch(`${API_BASE_URL}/questions`)
    .then(res => {
      if (!res.ok) {
        console.log('Oops, did not get the questions...');
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(questionsArray => {
        dispatch(loadQuestionsSuccess(questionsArray));
    });
    console.log('successfully fetched questions I think...');
};

export const LOAD_QUESTIONS_SUCCESS = 'LOAD_QUESTIONS_SUCCESS';
export const loadQuestionsSuccess = (questionsArray) => ({
  type: LOAD_QUESTIONS_SUCCESS,
  questionsArray
});

export const UPDATE_CURRENT = 'UPDATE_CURRENT';
export const updateCurrent = quizData => ({
  type: UPDATE_CURRENT,
  quizData
});
