import {setUserData} from './actions';

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
      });
  }
};

export {Operations};
