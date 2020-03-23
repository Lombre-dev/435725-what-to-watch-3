import {createReducer} from 'redux-act';
import {TMovie, LoadingDataStatus} from '../../types';
import {setAppLoadingError, setAppLoadingStart, setAppMovies} from './actions';
import {initialState} from './initialState';

export const reducer = createReducer({
  [setAppLoadingStart.toString()]: _setLoadingStart,
  [setAppLoadingError.toString()]: _setLoadingError,

  [setAppMovies.toString()]: _setMovies,
}, initialState);

function _setMovies(state, movies: TMovie[]) {
  return Object.assign({}, state, {
    status: LoadingDataStatus.READY,
    movies,
  });
}

function _setLoadingStart(state) {
  return Object.assign({}, state, {
    status: LoadingDataStatus.LOADING,
    movies: [],
  });
}

function _setLoadingError(state) {
  return Object.assign({}, state, {
    status: LoadingDataStatus.ERROR,
  });
}
