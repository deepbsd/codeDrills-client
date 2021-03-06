import {SubmissionError} from 'redux-form';

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';
import {createNewUserData} from './index';

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
          //console.log("***HEY THERE: ", newUser)
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
