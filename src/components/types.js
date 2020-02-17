import PropTypes from 'prop-types';
import {GENRES, RATING_LEVELS} from './consts';

export const Movie = PropTypes.shape({
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.oneOf(GENRES)).isRequired,
  year: PropTypes.number.isRequired,
  poster: PropTypes.string,
  frames: PropTypes.arrayOf(PropTypes.string),
  overview: PropTypes.shape({
    rating: PropTypes.shape({
      score: PropTypes.number.isRequired,
      level: PropTypes.oneOf(RATING_LEVELS).isRequired,
      reviewsCount: PropTypes.number.isRequired,
    }).isRequired,
    description: PropTypes.string,
    story: PropTypes.string,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
});
