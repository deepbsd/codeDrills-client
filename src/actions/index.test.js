import React from 'react';
import {shallow, mount, render} from 'enzyme';
//import {API_BASE_URL} from '../config';

import {storeFactory, checkProps, findByTestAttr} from '../testUtils';

import fetchMock from 'fetch-mock';

import {fetchUserData} from './index';

import * as actions from './index';

// Maybe need a new test api here...
//const API_BASE_TEST_URL = 'https://testapi.herokuapp.com/api';
const API_BASE_TEST_URL = 'https://codeDrills.herokuapp.com/api';

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






















