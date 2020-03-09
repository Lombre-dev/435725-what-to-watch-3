import {createReducer} from 'redux-act';
import {AuthorizationStatus} from '../../consts';
import {clearUserAuthError, setUserAuthError, setUserData} from './actions';
import {initialState} from './initialState';
import {formatUser} from './mappers';

export const reducer = createReducer({
  [setUserData]: _setUserData,
  [setUserAuthError]: _setUserAuthError,
  [clearUserAuthError]: _clearUserAuthError,
}, initialState);

function _setUserData(state, user) {
  return Object.assign({}, state, formatUser(user), {authStatus: AuthorizationStatus.AUTH});
}

function _setUserAuthError(state, errorCode) {
  return Object.assign({}, state, {authError: errorCode});
}

function _clearUserAuthError(state) {
  return Object.assign({}, state, {authError: undefined});
}
