import PropTypes from 'prop-types';
import {GENRES} from '../mocks/genres';

export const Movie = PropTypes.shape({
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.oneOf(GENRES)).isRequired,
  year: PropTypes.number.isRequired,
  poster: PropTypes.string,
  frames: PropTypes.arrayOf(PropTypes.string),
});

export const MovieList = PropTypes.arrayOf(Movie);