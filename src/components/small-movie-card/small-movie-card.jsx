import PropTypes from 'prop-types';
import React from 'react';
import {Movie} from '../types';

export default class SmallMovieCard extends React.PureComponent {

  constructor(props) {
    super(props);

    this._handleComponentHover = this._handleComponentHover.bind(this);
    this._handleTitleClick = this._handleTitleClick.bind(this);
  }

  _handleComponentHover() {

    const {movie, onHover} = this.props;

    onHover({movie});
  }

  _handleTitleClick(e) {

    const {movie, onTitleClick} = this.props;

    e.preventDefault();
    onTitleClick({movie});
  }

  render() {

    const {movie} = this.props;

    return (
      <article className="small-movie-card catalog__movies-card" onMouseEnter={this._handleComponentHover}>
        <div className="small-movie-card__image">
          <img src={movie.frames[0]} alt={movie.title} width="280" height="175" />
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html" onClick={this._handleTitleClick}>{movie.title}</a>
        </h3>
      </article>
    );
  }
}

SmallMovieCard.propTypes = {
  movie: Movie.isRequired,
  onTitleClick: PropTypes.func.isRequired,
  onHover: PropTypes.func.isRequired,
};
