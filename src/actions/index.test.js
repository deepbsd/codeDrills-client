import React from 'react';
import {shallow, mount, render} from 'enzyme';
//import {API_BASE_URL} from '../config';

import fetchMock from 'fetch-mock';

import {storeFactory, checkProps, findByTestAttr} from '../testUtils';

//import {fetchUserData} from './index';

import * as actions from './index';

// Maybe need a new test api here...
const API_BASE_TEST_URL = 'https://testapi.herokuapp.com/api';
//const API_BASE_TEST_URL = 'https://codeDrills.herokuapp.com/api';

describe('startQuiz', () => {
    it('should create a start quiz action', () => {
        const expectedAction = {
            type: 'START_QUIZ'
        }
        expect(actions.startQuiz()).toEqual(expectedAction);
    })
})

    const answerObj = { number: 4,
                        question: 'what is your favorite color?',
                        category: 'css',
                        assetUrl: 'http://www.favoritecolors.com',
                        type: null,
                        answers: [{answerText: 'red', chosen: false, correct: true},
                            {answerText: 'blue', chosen: false, correct: false},
                            {answerText: 'orange', chosen: false, correct: false},
                            {answerText: 'green', chosen: false, correct: false},
                            {answerText: 'yellow', chosen: false, correct: false},
                        ]}

describe('checkQuestion', () => {
    it('should create a checkQuestion action', () => {
        const expectedAction = {
            type: actions.CHECK_QUESTION,
            answerObj
        }
        expect(actions.checkQuestion(answerObj)).toEqual(expectedAction);
    })
})

// Need to work on mocking endpoint
describe('fetchUserData', () => {
    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    })

    let JoeUser = {
      username: 'joe',
      firstName: 'Joe',
      lastName: 'Blow',
      email: 'joe@blow.com'
    } 
    
    const testUser = 'JoeUser';

    it('dispatches fetchUserDataSuccess', () => {
     //fetchMock
       //.getOnce(`${API_BASE_TEST_URL}/userdata/${testUser}`, { body: { JoeUser }, headers: { 'content-type': 'application/json' } } )

    
    const store = storeFactory( { JoeUser } )
    return store.dispatch(actions.fetchUserData(testUser))

    const expectedActions = [
      { type: actions.FETCH_USER_DATA },
      { type: actions.FETCH_USER_DATA_SUCCESS, body: { testUser } }
    ]

    //expect(store.getActions()).toEqual(expectedActions)    
  })
})


// Need to work on mocking endpoint
describe('updateUserDb', () => {
    afterEach(() => {
      fetchMock.reset()
      fetchMock.restore()
    });
    
    let testUserData = {
      user: { username: 'joe', email: 'joe@blow.com' },
      userQuizData: { totalQuizzes: 2, totalQuestions: 20, totalCorrect: 19  },
      lastQuizData: { totalQuestions: 10, totalCorrect: 9 }
    };

    const testUser = 'joe';
    
    it('successfully dispatches UPDATE_USERDATA_DB_SUCCESS', () => {
      //fetchMock
        //.putOnce(`${API_BASE_TEST_URL}/userdata/${testUser}`, { body: { testUserData }, headers: {'content-type': 'application/json' } })

     const store = storeFactory( { testUserData } )
     return store.dispatch(actions.updateUserDataDb(testUserData))

     const expectedActions = [
       { type: actions.UPDATE_USERDATA_DB },
       { type: actions.UPDATE_USERDATA_DB_SUCCESS, body: { testUser } }
     ]
     //expect(store.getActions()).toEqual(expectedActions)
    })
})

describe('updateUserDataDbSuccess', () => {

    it('creates a UPDATE_USERDA_DB_SUCCESS action', () => {
        const expectedAction = {
            type: actions.UPDATE_USERDATA_DB_SUCCESS,
            userDataDbUpdated: true
        }
        expect(actions.updateUserDataDbSuccess()).toEqual(expectedAction);
    })
})

describe('resetUserDataDbSucess', () => {
    it('resets to false the UserDataDbSuccess value', () => {
        const expectedAction = {
            type: actions.RESET_USERDATA_DB_SUCCESS,
            userDataDbUpdated: false
        }
        expect(actions.resetUserDataDbSuccess()).toEqual(expectedAction);
    })
})

describe('resetLastQuizData', () => {
    it('Last quiz data gets reset when a new quiz starts', () => {
        const expectedAction = {
            type: actions.RESET_LASTQUIZ_DATA
        }
        expect(actions.resetLastQuizData()).toEqual(expectedAction);
    })
})

describe('addCurrentUserToState', () => {
    it('new User Object gets added to global state when user logs in', () => {
        const userObj = {username: 'Joe'}
        const expectedAction = {
            type: actions.ADD_CURRENT_USER_TO_STATE,
            userObj
        }
        expect(actions.addCurrentUserToState(userObj)).toEqual(expectedAction);
    })
})

describe('fetchQuestions', () => {
    it('gets called when user logs in and app starts', () => {

    })
    it('sucessfully calls loadQuestionSuccess', () => {

    })
})

describe('loadQuestionsSucess', () => {
    it('successfully updates global state with questions', () => {

    })
})

describe('updateCurrent', () => {
    it('gets called for each question to update whether answer is right or wrong', () => {

    })

})
