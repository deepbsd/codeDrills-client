import {SubmissionError} from 'redux-form';

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';
import {createNewUserData} from './index';

export const registerUser = user => dispatch => {
    const newUser = JSON.stringify(user);
    console.log("NEWUSER: ", newUser);
    return fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => normalizeResponseErrors(res))
        .then(console.log("NEWUSER: ",newUser))
        .then(res => res.json())
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
        console.log("NEWUSER: ", newUser)
        .then( () => createNewUserData(newUser))
};
