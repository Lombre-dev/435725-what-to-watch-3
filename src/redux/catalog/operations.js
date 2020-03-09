import {setCatalogMovies, setPromoMovie} from './actions';

const Operations = {
  // startLoad - например включает режимы, сброс данных, включает спиннеры
  // в state isLoading для отображения прогресса
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
