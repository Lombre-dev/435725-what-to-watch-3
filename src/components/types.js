import PropTypes from 'prop-types';

export const Review = PropTypes.shape({
  author: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
});

export const Movie = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired, // PropTypes.arrayOf(PropTypes.oneOf(GENRES)).isRequired,
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
  backgroundImage: PropTypes.string,
  backgroundColor: PropTypes.string,
});

export const User = PropTypes.shape({
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
});
