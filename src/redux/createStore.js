import {createStore} from 'redux';
import {initialState} from './initialState';
import reducer from './reducer';


/* eslint-disable indent */
export const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);
