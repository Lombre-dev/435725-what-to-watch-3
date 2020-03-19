import {TMovie, TMovieData} from '../../components/types';

function formatMovie(source: TMovieData): TMovie {
  return {
    id: source.id,
    title: source.name,
    genres: [source.genre],
    year: source.released,
    poster: source.poster_image,
    frames: [source.preview_image],
    preview: source.preview_video_link,
    src: source.video_link,
    ratingScore: source.rating,
    ratingReviewsCount: source.scores_count,
    description: source.description,
    story: source.description,
    duration: source.run_time,
    director: source.director,
    actors: source.starring,
    backgroundImage: source.background_image,
    backgroundColor: source.background_color,
    isFavorite: source.is_favorite,
  };
}

function formatMovies(source: TMovieData[]): TMovie[] {
  return source.map((item) => formatMovie(item));
}

export {formatMovie, formatMovies};
