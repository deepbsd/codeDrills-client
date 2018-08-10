import * as actions from '../actions';

import {reducer} from './index';



describe('RESET_LAST_QUIZ_DATA', () => {
  const expected = {
          "correct": [],
          "incorrect": [],
          "js": [],
          "js_right": [],
          "html": [],
          "html_right": [],
          "css": [],
          "css_right": [],
          "node": [], "node_right": [],
          "api": [],
          "api_right": [],
          "mongo": [],
          "mongo_right": []
}
  const initialState = {
          "correct": [18],
          "incorrect": [2],
          "js": [6],
          "js_right": [6],
          "html": [4],
          "html_right": [4],
          "css": [3],
          "css_right": [3],
          "node": [5],
          "node_right": [5],
          "api": [1],
          "api_right": [0],
          "mongo": [1],
          "mongo_right": [0]
}

  let state = initialState;

  it('resets state lastQuiz object', () => {
    state = reducer(state, actions.resetLastQuizData());
    expect(state.currentQuiz).toEqual(expected);
  });

});

describe('ADD_CURRENT_USER_TO_STATE', () => {
    let state = { currentUser: { user: { name: 'Joe' } }};
    const testUser = {
        user: { name: 'Joe' }
    }

    const currentUser = testUser;

    it('adds currentUser to global state', () => {
        state = reducer(state, actions.addCurrentUserToState(currentUser));
        expect(state.currentUser).toEqual(testUser);
    });

});
