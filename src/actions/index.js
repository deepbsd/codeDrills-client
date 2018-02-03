import {API_BASE_URL} from '../config';


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

export const fetchQuestions = () => dispatch => {
  fetch(`${API_BASE_URL}/api/questions`)
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

export const fetchMockUserData = () => dispatch => {
  console.log('bjahsd');
  fetch(`${API_BASE_URL}/mock/user`)
    .then(res => {
      if (!res.ok) {
        console.log('Error. Mock user data has not been loaded.');
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(mockUserData => {
        dispatch(loadMockDataSuccess(mockUserData));
    });
    console.log('Mock user data has been loaded.');
};

export const LOAD_MOCK_DATA_SUCCESS = 'LOAD_MOCK_DATA_SUCCESS';
export const loadMockDataSuccess = (mockUserData) => ({
  type: LOAD_MOCK_DATA_SUCCESS,
  mockUserData
});
