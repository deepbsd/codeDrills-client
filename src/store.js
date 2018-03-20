// import {createStore, applyMiddleware} from 'redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import {loadAuthToken} from './local-storage';
import authReducer from './reducers/auth';
import protectedDataReducer from './reducers/protected-data';
import {setAuthToken, refreshAuthToken} from './actions/auth';
import {reducer} from './reducers';

// Hydrate the authToken from localStorage if it exists
const authToken = loadAuthToken();

const store = createStore(
  combineReducers({
    reducer: reducer,
    form: formReducer,
    auth: authReducer,
    protectedData: protectedDataReducer
  }),
  applyMiddleware(thunk)
);


if (authToken) {
  const token = authToken;
  store.dispatch(setAuthToken(token));
  store.dispatch(refreshAuthToken());
  console.log("In the Store--token: ",token);
}


// export default createStore(reducer, applyMiddleware(thunk));
export default store;
