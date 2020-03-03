import React from 'react';
import {getActors, getRatingLevel, getRatingReviewsCount, getRatingScore} from '../../utils/movie-utils';
import {Movie} from '../types';

function MovieInfoOverview({movie}) {
  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{getRatingScore(movie.ratingScore)}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{getRatingLevel(movie.ratingScore)}</span>
          <span className="movie-rating__count">{getRatingReviewsCount(movie.ratingReviewsCount)}</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{movie.description}</p>
        <p>{movie.story}</p>
        <p className="movie-card__director"><strong>Director: {movie.director}</strong></p>
        <p className="movie-card__starring"><strong>Starring: {getActors(movie.actors)}</strong></p>
      </div>
    </>
  );
}

MovieInfoOverview.propTypes = {
  movie: Movie.isRequired,
};

export default MovieInfoOverview;
