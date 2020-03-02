import {createStore} from 'redux';
import reducer from './reducer';

/* eslint-disable indent */
export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);
