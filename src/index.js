import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import App from './components/app/app';
import {MOVIES} from './mocks/movies';
import {reducer} from './reducer';

/* eslint-disable indent */
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);


ReactDOM.render(
  <Provider store={store}>
    <App
      currentMovie={MOVIES[0]}
      movies={MOVIES}
    />
  </Provider>,
  document.getElementById(`root`)
);
