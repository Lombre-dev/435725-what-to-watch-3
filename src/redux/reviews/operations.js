import {getAppMovies} from '../app/selectors';
import {setReviewMovie, setReviews} from './actions';
import {formatReviews} from './mappers';

const Operations = {
  setReviewMovie: (movieId) => (dispatch, getState, _api) => {

    const allMovies = getAppMovies(getState());
    const intMovieId = parseInt(movieId, 10);

    dispatch(setReviewMovie(allMovies.find((movie) => movie.id === intMovieId)));
  },
  getReviews: (movieId) => (dispatch, getState, api) => {
    return api.get(`/comments/${movieId}`)
      .then((response) => {
        dispatch(setReviews(formatReviews(response.data)));
      });
  },
  addReview: (movieId, rating, comment) => (dispatch, getState, api) => {
    return api.post(`/comments/${movieId}`, {rating, comment})
      .then((response) => {
        dispatch(setReviews(formatReviews(response.data)));
      });
  }
};

export {Operations};
