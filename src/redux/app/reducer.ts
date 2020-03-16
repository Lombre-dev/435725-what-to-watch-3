import {createReducer} from 'redux-act';
import {LoadingDataStatus} from '../../consts';
import {setAppLoadingError, setAppLoadingStart, setAppMovies} from './actions';
import {initialState} from './initialState';

export const reducer = createReducer({
  [setAppLoadingStart]: _setLoadingStart,
  [setAppLoadingError]: _setLoadingError,

  [setAppMovies]: _setMovies,
}, initialState);

function _setMovies(state, movies) {
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
