import {Operations as CatalogOperations} from '../catalog/operations';
import {Operations as UserOperations} from '../user/operations';
import {setAppLoadingError, setAppLoadingStart, setAppMovies} from './actions';
import {formatMovies} from './mappers';

const Operations = {
  init: () => (dispatch, getState, api) => {

    dispatch(setAppLoadingStart());
    dispatch(UserOperations.checkAuthorization());
    dispatch(CatalogOperations.getPromoMovie());

    return api.get(`/films`)
      .then((response) => {
        dispatch(setAppMovies(formatMovies(response.data)));
      })
      .catch(() => {
        dispatch(setAppLoadingError());
      });
  },
};

export {Operations};
