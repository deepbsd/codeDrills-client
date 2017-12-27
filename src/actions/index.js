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
export const  checkQuestion = question => ({
  type: CHECK_QUESTION,
  question
});

export const MAKE_SELECTION = 'MAKE_SELECTION';
export const makeSelection = question => ({
  type: MAKE_SELECTION,
  question
})
