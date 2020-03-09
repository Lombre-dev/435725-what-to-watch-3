import {createAction} from 'redux-act';

export const setUserData = createAction(`SET_USER_DATA`);
export const clearUserAuthError = createAction(`CLEAR_USER_AUTH_ERROR`);
export const setUserAuthError = createAction(`SET_USER_AUTH_ERROR`);
