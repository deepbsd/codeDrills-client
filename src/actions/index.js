import {API_BASE_URL} from '../config';

import store from '../store';

export const START_QUIZ = 'START_QUIZ';
export const startQuiz = () => ({
  type: START_QUIZ,
});

export const CHECK_QUESTION = 'CHECK_QUESTION';
export const  checkQuestion = (answerObj) => ({
  type: CHECK_QUESTION,
  answerObj
});


export const fetchUserData = (userName) => dispatch => {
  {/* let userName = store.getState(); */}
  {/* let userName = "deepbsd"; */}
  console.log("ACTION --userName: ", userName);

  fetch(`${API_BASE_URL}/users/${userName}`)
    .then(results => {
      if (!results.ok) {
        console.log('Oops, did not get the user data!', results);
        return Promise.reject(results.statusText);
      }
      console.log("ACTION --fetchUserData: ", results);
      return results.json();
    })
    .then(userData => {
      return userData;
    })
    .then(currentUser => {
      {/* Currently only works for registered users... */}
      dispatch(fetchUserDataSuccess(currentUser))
    });
};

export const FETCH_USER_DATA_SUCCESS = 'FETCH_USER_DATA_SUCCESS';
export const fetchUserDataSuccess = (currentuser) => ({
  type: FETCH_USER_DATA_SUCCESS,
  currentuser
});

export const createNewUserData = (currentUser) => dispatch => {
  fetch(`${API_BASE_URL}/userdata/`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json,'
    },
    body: JSON.stringify({
      username: currentUser.username,
      firstName: currentUser.firstName,
      lastName: currentUser.lastName
    })
  })
  .then(results => {
    if (!results.ok){
      console.log('OOPS!  Did not post new userData!', results);
      return Promise.reject(results.statusText);
    }
    console.log("ACTION --createNewUserData: ", results);
    return results.json();
  })
};


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
