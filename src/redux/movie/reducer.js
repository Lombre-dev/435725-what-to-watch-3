import {createReducer} from 'redux-act';
import {LoadingDataStatus} from '../../consts';
import {setDetailedMovieLoadingComplete, setDetailedMovieLoadingError, setDetailedMovieLoadingStart, setDetailedMovieMoviesLike, setDetailedMovieRedirectTo, setDetailedMovieReviews, setDetailedMovieValue} from './actions';
import {initialState} from './initialState';

export const reducer = createReducer({
  [setDetailedMovieValue]: _setMovie,
  [setDetailedMovieMoviesLike]: _setMoviesLike,
  [setDetailedMovieRedirectTo]: _setRedirectTo,
  [setDetailedMovieReviews]: _setReviews,
  [setDetailedMovieLoadingStart]: _setLoadingStart,
  [setDetailedMovieLoadingComplete]: _setLoadingComplete,
  [setDetailedMovieLoadingError]: _setLoadingError,
}, initialState);

function _setMovie(state, movie) {
  return Object.assign({}, state, {movie});
}

function _setRedirectTo(state, redirectTo) {
  return Object.assign({}, state, {redirectTo});
}

function _setReviews(state, reviews) {
  return Object.assign({}, state, {reviews});
}

function _setLoadingStart(state) {
  return Object.assign({}, state, {status: LoadingDataStatus.LOADING});
}

function _setLoadingComplete(state) {
  return Object.assign({}, state, {status: LoadingDataStatus.READY});
}

function _setLoadingError(state) {
  return Object.assign({}, state, {status: LoadingDataStatus.ERROR});
}

function _setMoviesLike(state, movies) {
  return Object.assign({}, state, {moviesLike: movies});
}
