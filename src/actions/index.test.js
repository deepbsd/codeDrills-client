import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {API_BASE_URL} from '../config';

import {fetchUserData} from './index';



describe('fetchUserData action creator', () => {
    it('successfully connects to an endpoint', () => {

    })

    it('dispatches fetchUserDataSuccess', () => {

    })
})

describe('fetchUserDataSuccess action creator', () => {
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

describe('updateUserDataDb success action', () => {
    it('successfully updates global state with latest userdata from db', () => {

    })
})

describe('resetUserDataDbSucess', () => {
    it('global state status for reset success is reset from false to true', () => {

    })
})

describe('resetLastQuizData', () => {
    it('Last quiz data gets reset when a new quiz starts', () => {

    })
})

describe('addCurrentUserToState', () => {
    it('new User Object gets added to global state when user logs in', () => {

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
