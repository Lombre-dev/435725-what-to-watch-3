import {getMoviesByGenre} from '../../utils/movie-utils';
import {getAppMovies} from '../app/selectors';
import {setDetailedMovie, setDetailedMovieLoadingComplete, setDetailedMovieLoadingStart, setMoviesLikeDetailedMovie} from './actions';

const Operations = {
  init: (movieId) => (dispatch, getState, _api) => {

    dispatch(setDetailedMovieLoadingStart());

    const intMovieId = parseInt(movieId, 10);
    const allMovies = getAppMovies(getState());
    const movie = allMovies.find((value) => value.id === intMovieId);

    dispatch(setDetailedMovie(movie));
    dispatch(setMoviesLikeDetailedMovie(movie ? getMoviesByGenre(allMovies, movie.genres[0], [movie]) : []));

    dispatch(setDetailedMovieLoadingComplete());
  },
};

export {Operations};
