import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {setPlayerMovie} from '../../redux/player/actions';
import {Movie} from '../types';

function BigMovieCard({movie, isCanReviewed, onPlay}) {
  return (
    <div className="movie-card__desc">
      <h2 className="movie-card__title">{movie.title}</h2>
      <p className="movie-card__meta">
        <span className="movie-card__genre">{movie.genres.join(`, `)}</span>
        <span className="movie-card__year">{movie.year}</span>
      </p>

      <div className="movie-card__buttons">
        <button className="btn btn--play movie-card__button" type="button" onClick={() => onPlay(movie)}>
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
        {
          isCanReviewed && <a href="add-review.html" className="btn movie-card__button">Add review</a>
        }
      </div>
    </div>
  );
}

BigMovieCard.propTypes = {
  movie: Movie.isRequired,
  isCanReviewed: PropTypes.bool.isRequired,
  onPlay: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    onPlay: (movie) => {
      dispatch(setPlayerMovie(movie));
    },
  };
}

export {BigMovieCard};
export default connect(null, mapDispatchToProps)(BigMovieCard);
