import {AuthorizationErrorCode} from '../../consts';
import {formatMovies} from '../catalog/mappers';
import {setFavoriteMovies, setUserAuthError, setUserData} from './actions';

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
  },
  getFavoriteMovies: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        dispatch(setFavoriteMovies(formatMovies(response.data)));
      });
  },
  updateFavoriteMovie: (movieId, isFavorite) => (dispatch, getState, api) => {
    return api.post(`/favorite/${movieId}/${isFavorite ? 1 : 0}`)
      .then((response) => {
        // eslint-disable-next-line no-console
        console.log(`updateFavoriteMovie`, movieId, isFavorite, response);
      });
  },
};

export {Operations};
