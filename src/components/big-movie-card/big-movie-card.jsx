import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {AppPages, AuthorizationStatus} from '../../consts';
import {getUserAuthStatus} from '../../redux/user/selectors';
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
        <Link className="btn btn--play movie-card__button" to={`${AppPages.PLAYER}/${movie.id}`}>
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref="#play-s"></use>
          </svg>
          <span>Play</span>
        </Link>
        <button className="btn btn--list movie-card__button" type="button">
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref="#add"></use>
          </svg>
          <span>My list</span>
        </button>
        {
          isCanReviewed &&
          <Link className="btn movie-card__button" to={`${AppPages.MOVIES}/${movie.id}/review`}>Add review</Link>
        }
      </div>
    </div>
  );
}

BigMovieCard.propTypes = {
  movie: Movie.isRequired,
  isCanReviewed: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    isCanReviewed: getUserAuthStatus(state) === AuthorizationStatus.AUTH,
  };
}

export {BigMovieCard};
export default connect(mapStateToProps)(BigMovieCard);
