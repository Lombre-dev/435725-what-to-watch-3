import {setCatalogMovies, setPromoMovie} from './actions';

const Operations = {
  getCatalog: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((respone) => {
        dispatch(setCatalogMovies(respone.data));
      });
  },
  getPromoMovie: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then((respone) => {
        dispatch(setPromoMovie(respone.data));
      });
  }
};

export {Operations};
