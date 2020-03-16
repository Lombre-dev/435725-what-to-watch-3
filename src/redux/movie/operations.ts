import {AppPages} from '../../consts';
import {getMoviesByGenre} from '../../utils/movie-utils';
import {getAppMovies} from '../app/selectors';
import {setDetailedMovieLoadingComplete, setDetailedMovieLoadingError, setDetailedMovieLoadingStart, setDetailedMovieRedirectTo, setDetailedMovieRelatedMovies, setDetailedMovieReviews, setDetailedMovieValue} from './actions';
import {formatReviews} from './mappers';

const Operations = {
  init: (movieId: string) => (dispatch, getState, _api) => {

    const intMovieId = parseInt(movieId, 10);
    const allMovies = getAppMovies(getState());
    const movie = allMovies.find((value) => value.id === intMovieId);

    dispatch(setDetailedMovieLoadingStart());

    if (movie) {
      dispatch(setDetailedMovieValue(movie));
      dispatch(setDetailedMovieRelatedMovies(movie ? getMoviesByGenre(allMovies, movie.genres[0], [movie]) : []));
      dispatch(setDetailedMovieLoadingComplete());
    } else {
      dispatch(setDetailedMovieRedirectTo(AppPages.MAIN));
    }
  },

  getReviews: (movieId: string) => (dispatch, getState, api) => {

    dispatch(setDetailedMovieLoadingStart());

    return api.get(`/comments/${movieId}`)
      .then((response) => {
        dispatch(setDetailedMovieReviews(formatReviews(response.data)));
        dispatch(setDetailedMovieLoadingComplete());
      })
      .catch(() => {
        dispatch(setDetailedMovieLoadingError());
      });
  },

  addReview: (movieId: string, rating: number, comment: string) => (dispatch, getState, api) => {

    dispatch(setDetailedMovieLoadingStart());

    return api.post(`/comments/${movieId}`, {rating, comment})
      .then((response) => {
        dispatch(setDetailedMovieReviews(formatReviews(response.data)));
        dispatch(setDetailedMovieLoadingComplete());
        dispatch(setDetailedMovieRedirectTo(`${AppPages.MOVIES}/${movieId}`));
      })
      .catch(() => {
        dispatch(setDetailedMovieLoadingError());
      });
  },
};

export {Operations};
