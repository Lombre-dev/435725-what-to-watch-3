import {createReducer} from 'redux-act';
import {TMovie, TUser} from '../../components/types';
import {clearUserData, setUserAuthRequired, setUserData, setUserFavoriteMovies} from './actions';
import {initialState} from './initialState';

export const reducer = createReducer({
  [clearUserData.toString()]: _clearData,
  [setUserData.toString()]: _setData,
  [setUserAuthRequired.toString()]: _setAuthRequired,
  [setUserFavoriteMovies.toString()]: _setFavoriteMovies,
}, initialState);

function _clearData(state) {
  return Object.assign({}, state, initialState);
}

function _setData(state, user: TUser) {
  return Object.assign({}, state, user);
}

function _setAuthRequired(state, authRequired: boolean) {
  return Object.assign({}, state, {authRequired});
}

function _setFavoriteMovies(state, movies: TMovie[]) {
  return Object.assign({}, state, {favoriteMovies: movies});
}
