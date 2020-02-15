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

    const {movie, onComponentHoverCallback} = this.props;

    onComponentHoverCallback({movie});
  }

  _handleTitleClick(e) {

    const {movie, onTitleClickCallback} = this.props;

    e.preventDefault();
    onTitleClickCallback({movie});
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
  onTitleClickCallback: PropTypes.func.isRequired,
  onComponentHoverCallback: PropTypes.func.isRequired,
};
