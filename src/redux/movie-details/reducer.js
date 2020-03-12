import {createReducer} from 'redux-act';
import {LoadingDataStatus} from '../../consts';
import {setDetailedMovie, setDetailedMovieLoadingComplete, setDetailedMovieLoadingStart, setMoviesLikeDetailedMovie} from './actions';
import {initialState} from './initialState';

export const reducer = createReducer({
  [setDetailedMovieLoadingStart]: _setLoadingStart,
  [setDetailedMovie]: _setDetailedMovie,
  [setMoviesLikeDetailedMovie]: _setMoviesLikeDetailed,
  [setDetailedMovieLoadingComplete]: _setLoadingComplete,
}, initialState);

function _setLoadingStart(state) {
  return Object.assign({}, state, {status: LoadingDataStatus.LOADING});
}

function _setLoadingComplete(state) {
  return Object.assign({}, state, {status: LoadingDataStatus.READY});
}

function _setDetailedMovie(state, movie) {
  return Object.assign({}, state, {movie});
}

function _setMoviesLikeDetailed(state, movies) {
  return Object.assign({}, state, {moviesLike: movies});
}
