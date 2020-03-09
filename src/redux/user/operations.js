import {AuthorizationErrorCode} from '../../consts';
import {setUserAuthError, setUserData} from './actions';

const Operations = {
  checkAuthorization: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((response) => {
        dispatch(setUserData(response.data));
      });
  },
  login: ({email, password}) => (dispatch, getState, api) => {
    return api.post(`/login`, {email, password})
      .then((response) => {
        dispatch(setUserData(response.data));
      }).catch((error) => {

        let errorCode;

        // {error: "child "email" fails because ["email" must be a valid email]"}
        if (error.response.data.error.indexOf(`["email" must be a valid email]`) !== -1) {
          errorCode = AuthorizationErrorCode.INCORRECT_LOGIN;
        // {error: "child "email" fails because ["email" is required]"}
        } else if (error.response.data.error.indexOf(`["email" is required]`) !== -1) {
          errorCode = AuthorizationErrorCode.AUTHORIZATION_FAIL;
        }
        dispatch(setUserAuthError(errorCode));
      });
  }
};

export {Operations};
