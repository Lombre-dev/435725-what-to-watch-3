import {createReducer} from 'redux-act';
import {clearUserAuthError, clearUserData, clearUserFavoriteMovies, setUserAuthError, setUserAuthRequired, setUserData, setUserFavoriteMovies} from './actions';
import {initialState} from './initialState';

export const reducer = createReducer({
  [clearUserData]: _clearData,
  [setUserData]: _setData,
  [setUserAuthError]: _setAuthError,
  [setUserAuthRequired]: _setAuthRequired,
  [clearUserAuthError]: _clearUserAuthError,
  [clearUserFavoriteMovies]: _clearFavoriteMovies,
  [setUserFavoriteMovies]: _setFavoriteMovies,
}, initialState);

function _clearData(state) {
  return Object.assign({}, state, initialState);
}

function _setData(state, user) {
  return Object.assign({}, state, user);
}

function _setAuthRequired(state, authRequired) {
  return Object.assign({}, state, {authRequired});
}

function _setAuthError(state, errorCode) {
  return Object.assign({}, state, {authError: errorCode});
}

function _clearUserAuthError(state) {
  return Object.assign({}, state, {authError: undefined});
}

function _clearFavoriteMovies(state) {
  return Object.assign({}, state, {favoriteMovies: initialState.favoriteMovies});
}

function _setFavoriteMovies(state, movies) {
  return Object.assign({}, state, {favoriteMovies: movies});
}
