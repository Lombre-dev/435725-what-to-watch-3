import * as React from 'react';
import {getDuration} from '../../utils/movie-utils';
import {TMovie} from '../types';

type TMovieInfoDetailsProps = {
  movie: TMovie;
};

function MovieInfoDetails(props: TMovieInfoDetailsProps) {

  const {actors} = props.movie;

  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{props.movie.director}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value">
            {
              actors.map((actor, index) => {
                return (
                  <React.Fragment key={actor}>
                    {actor}{index < actors.length - 1 && <>, <br /></>}
                  </React.Fragment>
                );
              })
            }
          </span>
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{getDuration(props.movie.duration)}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{props.movie.genres.join(`, `)}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{props.movie.year}</span>
        </p>
      </div>
    </div>
  );
}

export default MovieInfoDetails;
