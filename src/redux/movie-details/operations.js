import {getMoviesByGenre} from '../../utils/movie-utils';
import {getAllMovies} from '../catalog/selectors';
import {setDetailedMovie, setMoviesLikeDetailedMovie} from './actions';

const Operations = {
  setDetailedMovie: (movieId) => (dispatch, getState, _api) => {

    const intMovieId = parseInt(movieId, 10);
    const allMovies = getAllMovies(getState());
    const movie = allMovies.find((value) => value.id === intMovieId);

    dispatch(setDetailedMovie(movie));
    dispatch(setMoviesLikeDetailedMovie(movie ? getMoviesByGenre(allMovies, movie.genres[0], [movie]) : []));
  },
};

export {Operations};
