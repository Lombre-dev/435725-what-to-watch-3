import {formatMovie} from '../app/mappers';
import {getAppMovies} from '../app/selectors';
import {setCatalogLoadingComplete, setCatalogLoadingError, setCatalogLoadingStart, setCatalogMovies, setCatalogPromoMovie} from './actions';

const Operations = {

  init: () => (dispatch) => {
    dispatch(Operations.getPromoMovie());
  },

  getCatalog: () => (dispatch, getState) => {
    dispatch(setCatalogMovies(getAppMovies(getState())));
  },

  getPromoMovie: () => (dispatch, getState, api) => {

    dispatch(setCatalogLoadingStart());

    return api.get(`/films/promo`)
      .then((response) => {
        dispatch(setCatalogPromoMovie(formatMovie(response.data)));
        dispatch(setCatalogLoadingComplete());
      }).catch(() => {
        dispatch(setCatalogLoadingError());
      });
  }
};

export {Operations};
