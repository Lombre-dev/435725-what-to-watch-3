import * as React from 'react';
import {getActors, getRatingLevel, getRatingReviewsCount, getRatingScore} from '../../utils/movie-utils';
import {TMovie} from '../types';

type TProps = {
  movie: TMovie;
};

function MovieInfoOverview(props: TProps) {
  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{getRatingScore(props.movie.ratingScore)}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{getRatingLevel(props.movie.ratingScore)}</span>
          <span className="movie-rating__count">{getRatingReviewsCount(props.movie.ratingReviewsCount)}</span>
        </p>
      </div>
      <div className="movie-card__text">
        <p>{props.movie.description}</p>
        <p>{props.movie.story}</p>
        <p className="movie-card__director"><strong>Director: {props.movie.director}</strong></p>
        <p className="movie-card__starring"><strong>Starring: {getActors(props.movie.actors)}</strong></p>
      </div>
    </>
  );
}

export default React.memo(MovieInfoOverview);
