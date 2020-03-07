import {createReducer} from 'redux-act';
import {AuthorizationStatus} from '../../consts';
import {setUserData} from './actions';
import {initialState} from './initialState';
import {formatUser} from './mappers';

export const reducer = createReducer({
  [setUserData]: _setUserData,
}, initialState);

function _setUserData(state, user) {
  return Object.assign({}, state, formatUser(user), {authorizationStatus: AuthorizationStatus.AUTH});
}
