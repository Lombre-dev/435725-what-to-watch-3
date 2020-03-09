import {setCatalogMovies, setPromoMovie} from './actions';

const Operations = {
  getCatalog: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        dispatch(setCatalogMovies(response.data));
      });
  },
  getPromoMovie: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        dispatch(setPromoMovie(response.data));
      });
  }
};

export {Operations};
