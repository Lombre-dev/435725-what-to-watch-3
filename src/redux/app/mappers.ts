import {TMovie, TMovieData} from '../../types';

function formatMovie(movieData: TMovieData): TMovie {
  return {
    id: movieData.id,
    title: movieData.name,
    genres: [movieData.genre],
    year: movieData.released,
    poster: movieData.poster_image,
    frames: [movieData.preview_image],
    preview: movieData.preview_video_link,
    src: movieData.video_link,
    ratingScore: movieData.rating,
    ratingReviewsCount: movieData.scores_count,
    description: movieData.description,
    story: movieData.description,
    duration: movieData.run_time,
    director: movieData.director,
    actors: movieData.starring,
    backgroundImage: movieData.background_image,
    backgroundColor: movieData.background_color,
    isFavorite: movieData.is_favorite,
  };
}

function formatMovies(moviesData: TMovieData[]): TMovie[] {
  return moviesData.map((item) => formatMovie(item));
}

export {formatMovie, formatMovies};
