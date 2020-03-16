import {createReducer} from 'redux-act';
import {LoadingDataStatus} from '../../consts';
import {setDetailedMovieLoadingComplete, setDetailedMovieLoadingError, setDetailedMovieLoadingStart, setDetailedMovieRedirectTo, setDetailedMovieRelatedMovies, setDetailedMovieReviews, setDetailedMovieValue} from './actions';
import {initialState} from './initialState';

export const reducer = createReducer({
  [setDetailedMovieLoadingStart]: _setLoadingStart,
  [setDetailedMovieLoadingComplete]: _setLoadingComplete,
  [setDetailedMovieLoadingError]: _setLoadingError,

  [setDetailedMovieValue]: _setMovie,
  [setDetailedMovieRelatedMovies]: _setRelatedMovies,
  [setDetailedMovieRedirectTo]: _setRedirectTo,
  [setDetailedMovieReviews]: _setReviews,
}, initialState);

function _setMovie(state, movie) {
  return Object.assign({}, state, {movie});
}

function _setRelatedMovies(state, movies) {
  return Object.assign({}, state, {relatedMovies: movies});
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
