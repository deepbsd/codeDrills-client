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

export const UPDATE_CURRENT = 'UPDATE_CURRENT';
export const updateCurrent = quizData => ({
  type: UPDATE_CURRENT,
  quizData
})
