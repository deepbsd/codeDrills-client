import {API_BASE_URL} from '../config';


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
    .then( (data) => {
      console.log("***ACTION:  calling fetch userDataSuccess: ", data);
      dispatch(fetchUserDataSuccess(data.currentUser))
    })
    .catch( res => { console.log('**ERROR fetching UserData: ')});
};

export const FETCH_USER_DATA_SUCCESS = 'FETCH_USER_DATA_SUCCESS';
export const fetchUserDataSuccess = (currentuser) => ({
  type: FETCH_USER_DATA_SUCCESS,
  currentuser
});

export const createNewUserData = (currentUser) => dispatch => {
  console.log("***CURRENT USER: ", currentUser)
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
