import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import App from './components/app/app';
import {ALL_GENRE, CATALOG_MOVIES_PER_PAGE_LIMIT} from './components/consts';
import {MOVIES} from './mocks/movies';
import {reducer} from './reducer';
import {getGenresFromMovies} from './utils/movie-utils';

const initialState = {
  currentMovie: undefined,
  promoMovie: MOVIES[0],

  allMovies: MOVIES, // вот это мок мне нужен, чтобы поменять набор фильмов при смене жанра
  catalogGenres: [ALL_GENRE].concat(getGenresFromMovies(MOVIES)),
  catalogGenre: ALL_GENRE,
  catalogMovies: MOVIES.slice(0, CATALOG_MOVIES_PER_PAGE_LIMIT),
  hasMoreCatalogMovies: MOVIES.length > CATALOG_MOVIES_PER_PAGE_LIMIT,
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
);

/* eslint-disable indent */
ReactDOM.render(
  <Provider store={store}>
    <App
      currentMovie={MOVIES[0]}
      movies={MOVIES}
    />
  </Provider>,
  document.getElementById(`root`)
);
