import {TMovie} from '../../components/types';

function formatMovie(source: any): TMovie {
  return Object.assign({}, source, {
    title: source.name,
    genres: [source.genre],
    year: source.released,
    poster: source.poster_image,
    frames: [source.preview_image],
    preview: source.preview_video_link,
    src: source.video_link,
    ratingScore: source.rating,
    ratingReviewsCount: source.scores_count,
    story: source.description, // ?
    actors: source.starring,
    duration: source.run_time,
    backgroundImage: source.background_image,
    backgroundColor: source.background_color,
    isFavorite: source.is_favorite,
  });
}

function formatMovies(source: any[]): TMovie[] {
  return source.map((item) => formatMovie(item));
}

export {formatMovie, formatMovies};
