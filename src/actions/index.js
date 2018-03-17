// IMPORTS
import {API_BASE_URL} from '../config';
import jwtDecode from 'jwt-decode';
import {saveAuthToken, clearAuthToken} from '../local-storage';
import {SubmissionError} from 'redux-form';


// ACTIONS
export const ADD_CURRENT_USER_TO_STATE = 'ADD_CURRENT_USER_T0_STATE';
export const addCurrentUserToState = (userObj) => ({
  type: ADD_CURRENT_USER_TO_STATE,
  userObj
});

export const AUTH_ERROR = 'AUTH_ERROR';
export const authError = error => ({
    type: AUTH_ERROR,
    error
});

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const authRequest = () => ({
    type: AUTH_REQUEST
});

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const authSuccess = currentUser => ({
    type: AUTH_SUCCESS,
    currentUser
});

export const CHECK_QUESTION = 'CHECK_QUESTION';
export const  checkQuestion = (answerObj) => ({
  type: CHECK_QUESTION,
  answerObj
});

export const CLEAR_AUTH = 'CLEAR_AUTH';
export const clearAuth = () => ({
    type: CLEAR_AUTH
});

export const DO_LOGIN_SUCCESS = 'DO_LOGIN_SUCCESS';
export const doLoginSucces = (username, userdata) => ({
  type: DO_LOGIN_SUCCESS,
  username,
  userdata
});

export const FETCH_PROTECTED_DATA_ERROR = 'FETCH_PROTECTED_DATA_ERROR';
export const fetchProtectedDataError = error => ({
    type: FETCH_PROTECTED_DATA_ERROR,
    error
});

export const FETCH_PROTECTED_DATA_SUCCESS = 'FETCH_PROTECTED_DATA_SUCCESS';
export const fetchProtectedDataSuccess = data => ({
    type: FETCH_PROTECTED_DATA_SUCCESS,
    data
});

export const FETCH_USER_DATA_SUCCESS = 'FETCH_USER_DATA_SUCCESS';
export const fetchUserDataSuccess = (currentuser) => ({
  type: FETCH_USER_DATA_SUCCESS,
  currentuser
});

export const LOAD_QUESTIONS_SUCCESS = 'LOAD_QUESTIONS_SUCCESS';
export const loadQuestionsSuccess = (questionsArray) => ({
  type: LOAD_QUESTIONS_SUCCESS,
  questionsArray
});

export const START_QUIZ = 'START_QUIZ';
export const startQuiz = () => ({
  type: START_QUIZ,
});

export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const setAuthToken = authToken => ({
    type: SET_AUTH_TOKEN,
    authToken
});

export const UPDATE_CURRENT = 'UPDATE_CURRENT';
export const updateCurrent = quizData => ({
  type: UPDATE_CURRENT,
  quizData
});


// FUNCTIONS
export const createNewUserData = (currentUser) => dispatch => {
  fetch(`${API_BASE_URL}/userdata/`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: currentUser.username,
      firstName: currentUser.firstName,
      lastName: currentUser.lastName
    })
  })
  .then(results => {
    if (!results.ok){
      return Promise.reject(results.statusText);
    }
    return results.json();
  })
};

export const doLogin = (username, userdata) => {
  debugger;
};

export const fetchProtectedData = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/protected`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(({data}) => dispatch(fetchProtectedDataSuccess(data)))
        .catch(err => {
            dispatch(fetchProtectedDataError(err));
        });
};

export const fetchQuestions = () => dispatch => {
  fetch(`${API_BASE_URL}/questions`)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(questionsArray => {
        dispatch(loadQuestionsSuccess(questionsArray));
    });
};

export const fetchUserData = (userName) => dispatch => {
  fetch(`${API_BASE_URL}/users/${userName}`)
    .then(results => {
      if (!results.ok) {
        return Promise.reject(results.statusText);
      }
      return results.json();
    })
    .then( (data) => {
      dispatch(fetchUserDataSuccess(data.currentUser))
    })
    .catch( res => { console.error('Cannot fetch UserData: ')});
};

export const login = (username, password) => dispatch => {
    dispatch(authRequest());
    return (
        fetch(`${API_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        })
            // Reject any requests which don't return a 200 status, creating
            // errors which follow a consistent format
            .then(res => normalizeResponseErrors(res))
            .then(res => res.json())
            .then(({authToken}) => storeAuthInfo(authToken, dispatch))
            .catch(err => {
                const {code} = err;
                const message =
                    code === 401
                        ? 'Incorrect username or password'
                        : 'Unable to login, please try again';
                dispatch(authError(err));
                // Could not authenticate, so return a SubmissionError for Redux
                // Form
                return Promise.reject(
                    new SubmissionError({
                        _error: message
                    })
                );
            })
    );
};

export const normalizeResponseErrors = res => {
    if (!res.ok) {
        if (
            res.headers.has('content-type') &&
            res.headers.get('content-type').startsWith('application/json')
        ) {
            // It's a nice JSON error returned by us, so decode it
            return res.json().then(err => Promise.reject(err));
        }
        // It's a less informative error returned by express
        return Promise.reject({
            code: res.status,
            message: res.statusText
        });
    }
    return res;
};

export const refreshAuthToken = () => (dispatch, getState) => {
    dispatch(authRequest());
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/auth/refresh`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(({authToken}) => storeAuthInfo(authToken, dispatch))
        .catch(err => {
            dispatch(authError(err));
            dispatch(clearAuth());
            clearAuthToken(authToken);
        });
};

export const registerUser = user => dispatch => {
    const newUser = JSON.stringify(user);
    return fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: newUser
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then( (user) => {
          const newUser = {
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName
          }
          dispatch(createNewUserData(newUser))
        })
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        })
};

const storeAuthInfo = (authToken, dispatch) => {
    const decodedToken = jwtDecode(authToken);
    dispatch(setAuthToken(authToken));
    dispatch(authSuccess(decodedToken.user));
    saveAuthToken(authToken);
};
