import {createReducer} from 'redux-act';
import {clearPlayerMovie, setPlayerMovie} from './actions';
import {initialState} from './initialState';

export const reducer = createReducer({
  [setPlayerMovie]: _setPlayerMovie,
  [clearPlayerMovie]: _clearPlayerMovie,
}, initialState);

function _setPlayerMovie(state, movie) {
  return Object.assign({}, state, {movie});
}

function _clearPlayerMovie(state) {
  return Object.assign({}, state, {movie: undefined});
}
