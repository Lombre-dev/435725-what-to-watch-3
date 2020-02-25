import PropTypes from 'prop-types';
import React from 'react';
import MovieInfoDetails from '../movie-info-details/movie-info-details';
import MovieInfoOverview from '../movie-info-overview/movie-info-overview';
import MovieInfoReviews from '../movie-info-reviews/movie-info-reviews';
import MovieInfoTabs from '../movie-info-tabs/movie-info-tabs';
import {Movie} from '../types';

class MovieInfo extends React.PureComponent {

  _renderState() {

    const {movie, activeTab} = this.props;

    switch (activeTab) {
      case 0:
        return (
          <MovieInfoOverview
            movie={movie}
          />
        );
      case 1:
        return (
          <MovieInfoDetails
            movie={movie}
          />
        );
      case 2:
        return (
          <MovieInfoReviews
            movie={movie}
          />
        );
    }
    return null;
  }

  render() {

    const {movie, activeTab, onTabClick} = this.props;

    return (
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <a href="main.html" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>

          <div className="movie-card__wrap">
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
                <a href="add-review.html" className="btn movie-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={movie.poster} alt={`${movie.title} poster`} width="218" height="327" />
            </div>
            <div className="movie-card__desc">
              <MovieInfoTabs
                currentTab={activeTab}
                onTabClick={onTabClick}
              />
              {
                this._renderState()
              }
            </div>
          </div>
        </div>
      </section>
    );
  }
}

MovieInfo.propTypes = {
  movie: Movie.isRequired,
  activeTab: PropTypes.number.isRequired,
  onTabClick: PropTypes.func.isRequired,
};

export default MovieInfo;
