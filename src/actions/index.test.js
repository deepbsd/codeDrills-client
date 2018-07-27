import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {API_BASE_URL} from '../config';

import {storeFactory, checkProps, findByTestAttr} from '../testUtils';

//import {fetchUserData} from './index';

import * as actions from './index';

// Maybe need a new test api here...
const API_BASE_TEST_URL = 'https://codedrills-api.herokuapp.com/api';

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
            type: 'CHECK_QUESTION',
            answerObj
        }
        expect(actions.checkQuestion(answerObj)).toEqual(expectedAction);
    })
})

describe('fetchUserData', () => {

    const fetchUserData = jest.fn();

    it('should create an action to fetch a users data', () => {

    })

    it('successfully connects to an endpoint', () => {

    })

    it('dispatches fetchUserDataSuccess', () => {

    })
})

describe('fetchUserDataSuccess', () => {

    const currentuser = { name: 'Joe' }
    it('should create a FETCH_USER_DATA_SUCCESS action', () => {
        const expectedAction = {
            type: 'FETCH_USER_DATA_SUCCESS',
            currentuser
        }
        expect(actions.fetchUserDataSuccess(currentuser)).toEqual(expectedAction)
    })
    it('sucessfully updates global state with userdata', () => {

    })
    it('connects successfully to endpoint', () => {

    })
})

describe('createNewUserData', () => {
    it('action successfully returns ok for POST request', () => {

    })
    it('successfully posts data to new mock user', () => {

    })
})

describe('updateUserDb', () => {
    it('action successfully connects to userdata endpoint', () => {

    })
    it('successfully calls the updateUserDataDb action', () => {

    })
})

describe('updateUserDataDbSuccess', () => {

    it('creates a UPDATE_USERDA_DB_SUCCESS action', () => {
        const expectedAction = {
            type: 'UPDATE_USERDATA_DB_SUCCESS',
            userDataDbUpdated: true
        }
        expect(actions.updateUserDataDbSuccess()).toEqual(expectedAction);
    })
})

describe('resetUserDataDbSucess', () => {
    it('resets to false the UserDataDbSuccess value', () => {
        const expectedAction = {
            type: 'RESET_USERDATA_DB_SUCCESS',
            userDataDbUpdated: false
        }
        expect(actions.resetUserDataDbSuccess()).toEqual(expectedAction);
    })
})

describe('resetLastQuizData', () => {
    it('Last quiz data gets reset when a new quiz starts', () => {
        const expectedAction = {
            type: 'RESET_LASTQUIZ_DATA'
        }
        expect(actions.resetLastQuizData()).toEqual(expectedAction);
    })
})

//describe('addCurrentUserToState', () => {
//    it('new User Object gets added to global state when user logs in', () => {
//        const userObj = {username: 'Joe'}
//        const expectedAction = {
//            type: 'ADD_CURRENT_USER_TO_STATE',
//            userObj
//        }
//        expect(actions.addCurrentUserToState(userObj)).toEqual(expectedAction);
//    })
//})

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
