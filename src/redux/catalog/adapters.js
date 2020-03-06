function formatMovie(source) {

  console.log(source);

  const keyMap = {
    'poster_image': `poster`,
    'preview_image': `frames`,
    'background_image': `backgroundImage`,
    'background_color': `backgroundColor`,
    'scores_count': `ratingScore`,
    'starring': `actors`,
    'run_time': `duration`,
    'is_favorite': `isFavorite`,
    'video_link': `src`,
    'preview_video_link': `preview`
  };

  const sourceKeys = Object.keys(source);
  const result = {};

  return null;
}

export {formatMovie};

/*
export const Movie = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.oneOf(GENRES)).isRequired,
  year: PropTypes.number.isRequired,
  poster: PropTypes.string,
  frames: PropTypes.arrayOf(PropTypes.string).isRequired,
  preview: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  ratingScore: PropTypes.number.isRequired,
  ratingReviewsCount: PropTypes.number.isRequired,
  description: PropTypes.string,
  story: PropTypes.string,
  duration: PropTypes.number.isRequired,
  reviews: PropTypes.arrayOf(Review),
  director: PropTypes.string.isRequired,
  actors: PropTypes.arrayOf(PropTypes.string).isRequired,
});
*/
