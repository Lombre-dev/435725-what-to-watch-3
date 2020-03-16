import {createReducer} from 'redux-act';
import {clearUserData, setUserAuthError, setUserAuthRequired, setUserData, setUserFavoriteMovies} from './actions';
import {initialState} from './initialState';

export const reducer = createReducer({
  [clearUserData.toString()]: _clearData,
  [setUserData.toString()]: _setData,
  [setUserAuthError.toString()]: _setAuthError,
  [setUserAuthRequired.toString()]: _setAuthRequired,
  [setUserFavoriteMovies.toString()]: _setFavoriteMovies,
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

function _setFavoriteMovies(state, movies) {
  return Object.assign({}, state, {favoriteMovies: movies});
}
