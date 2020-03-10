import {createReducer} from 'redux-act';
import {setDetailedMovie, setMoviesLikeDetailedMovie} from './actions';
import {initialState} from './initialState';

export const reducer = createReducer({
  [setDetailedMovie]: _setDetailedMovie,
  [setMoviesLikeDetailedMovie]: _setMoviesLikeDetailed,
}, initialState);

function _setDetailedMovie(state, movie) {
  return Object.assign({}, state, {movie});
}

function _setMoviesLikeDetailed(state, movies) {
  return Object.assign({}, state, {moviesLike: movies});
}
