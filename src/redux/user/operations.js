import {AuthorizationErrorCode, AuthorizationStatus, ServerErrors} from '../../consts';
import {setAppMovies} from '../app/actions';
import {formatMovies} from '../app/mappers';
import {getAppMovies} from '../app/selectors';
import {setCatalogPromoMovie} from '../catalog/actions';
import {getCatalogPromoMovie} from '../catalog/selectors';
import {setDetailedMovieValue} from '../movie/actions';
import {getDetailedMovie} from '../movie/selectors';
import {clearUserData, clearUserFavoriteMovies, setUserAuthRequired, setUserData, setUserFavoriteMovies} from './actions';
import {formatUser} from './mappers';

const Operations = {
  checkAuthorization: () => (dispatch, getState, api) => {

    dispatch(clearUserData());

    return api.get(`/login`)
      .then((response) => {
        dispatch(setUserData(Object.assign(
            formatUser(response.data),
            {authStatus: AuthorizationStatus.AUTH}
        )));
      })
      .catch(() => {
        dispatch(setUserData(
            {authStatus: AuthorizationStatus.NO_AUTH}
        ));
      });
  },

  login: ({email, password}) => (dispatch, getState, api) => {

    dispatch(clearUserData());

    return api.post(`/login`, {email, password})
      .then((response) => {
        dispatch(setUserData(Object.assign(
            formatUser(response.data),
            {authStatus: AuthorizationStatus.AUTH}
        )));
      }).catch(() => {
        dispatch(setUserData(
            {authError: AuthorizationErrorCode.AUTHORIZATION_FAIL}
        ));
      });
  },

  getFavoriteMovies: () => (dispatch, getState, api) => {

    dispatch(clearUserFavoriteMovies());

    return api.get(`/favorite`)
      .then((response) => {
        dispatch(setUserFavoriteMovies(formatMovies(response.data)));
      });
  },

  updateFavoriteMovie: (movieId, isFavorite) => (dispatch, getState, api) => {
    return api.post(`/favorite/${movieId}/${isFavorite ? 1 : 0}`)
      .then(() => {

        const state = getState();
        const allMovies = getAppMovies(state);
        const promoMovie = getCatalogPromoMovie(state);
        const detailedMovie = getDetailedMovie(state);
        const appMovie = getAppMovies(state).find((movie) => movie.id === movieId);

        appMovie.isFavorite = isFavorite;
        dispatch(setAppMovies(allMovies));

        const movie = Object.assign({}, appMovie);

        if (promoMovie && promoMovie.id === appMovie.id) {
          dispatch(setCatalogPromoMovie(movie));
        }

        if (detailedMovie && detailedMovie.id === movieId) {
          dispatch(setDetailedMovieValue(movie));
        }

      }).catch((error) => {
        if (error.response.status === ServerErrors.UNAUTHORIZED) {
          dispatch(setUserAuthRequired(true));
        }
      });
  },
};

export {Operations};
