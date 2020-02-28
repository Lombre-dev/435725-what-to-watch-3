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
    );
  }
}

MovieInfo.propTypes = {
  movie: Movie.isRequired,
  activeTab: PropTypes.number.isRequired,
  onTabClick: PropTypes.func.isRequired,
};

export default MovieInfo;
