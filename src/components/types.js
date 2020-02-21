import PropTypes from 'prop-types';
import {GENRES} from './consts';

export const Movie = PropTypes.shape({
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.oneOf(GENRES)).isRequired,
  year: PropTypes.number.isRequired,
  poster: PropTypes.string,
  frames: PropTypes.arrayOf(PropTypes.string).isRequired,
  preview: PropTypes.string.isRequired,
  ratingScore: PropTypes.number.isRequired,
  ratingReviewsCount: PropTypes.number.isRequired,
  description: PropTypes.string,
  story: PropTypes.string,
  director: PropTypes.string.isRequired,
  actors: PropTypes.arrayOf(PropTypes.string).isRequired,
});
