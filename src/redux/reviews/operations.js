import {setReviews} from './actions';
import {formatReviews} from './mappers';

const Operations = {
  getReviews: (movieId) => (dispatch, getState, api) => {
    return api.get(`/comments/${movieId}`)
      .then((response) => {
        dispatch(setReviews(formatReviews(response.data)));
      });
  },
  addReview: (movieId) => (dispatch, getState, api) => {
    return api.post(`/comments/${movieId}`)
      .then((response) => {
        dispatch(setReviews(formatReviews(response.data)));
      });
  }
};

export {Operations};
