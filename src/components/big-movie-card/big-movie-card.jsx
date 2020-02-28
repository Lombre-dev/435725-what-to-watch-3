import PropTypes from 'prop-types';
import React from 'react';
import {Movie} from '../types';

function BigMovieCard({movie, isCanReviewed}) {
  return (
    <div className="movie-card__desc">
      <h2 className="movie-card__title">{movie.title}</h2>
      <p className="movie-card__meta">
        <span className="movie-card__genre">{movie.genres.join(`, `)}</span>
        <span className="movie-card__year">{movie.year}</span>
      </p>

      <div className="movie-card__buttons">
        <button className="btn btn--play movie-card__button" type="button">
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref="#play-s"></use>
          </svg>
          <span>Play</span>
        </button>
        <button className="btn btn--list movie-card__button" type="button">
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref="#add"></use>
          </svg>
          <span>My list</span>
        </button>
        {isCanReviewed && <a href="add-review.html" className="btn movie-card__button">Add review</a>}
      </div>
    </div>
  );
}

BigMovieCard.propTypes = {
  movie: Movie.isRequired,
  isCanReviewed: PropTypes.bool.isRequired,
};

export default BigMovieCard;
