import {formatMovie} from '../app/mappers';
import {getAppMovies} from '../app/selectors';
import {setCatalogMovies, setCatalogPromoMovie} from './actions';

const Operations = {
  getCatalog: () => (dispatch, getState, _api) => {
    dispatch(setCatalogMovies(getAppMovies(getState())));
  },

  getPromoMovie: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        dispatch(setCatalogPromoMovie(formatMovie(response.data)));
      });
  }
};

export {Operations};
