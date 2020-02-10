import PropTypes from 'prop-types';
import {GENRES} from '../../mocks/genres.js';


export const Movie = PropTypes.shape({
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.oneOf(GENRES)).isRequired,
  year: PropTypes.number.isRequired,
  posterUrl: PropTypes.string,
  framesUrl: PropTypes.arrayOf(PropTypes.string),
});

export const MovieList = PropTypes.arrayOf(Movie);
