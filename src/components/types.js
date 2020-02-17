import PropTypes from 'prop-types';
import {GENRES} from './consts';

export const Movie = PropTypes.shape({
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.oneOf(GENRES)).isRequired,
  year: PropTypes.number.isRequired,
  poster: PropTypes.string,
  frames: PropTypes.arrayOf(PropTypes.string).isRequired,
  overview: PropTypes.shape({
    rating: PropTypes.shape({
      score: PropTypes.number.isRequired,
      reviewsCount: PropTypes.number.isRequired,
    }).isRequired,
    description: PropTypes.string,
    story: PropTypes.string,
    director: PropTypes.string.isRequired,
    actors: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
});
