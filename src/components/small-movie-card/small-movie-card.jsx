import PropTypes from 'prop-types';
import React from 'react';
import {Movie} from '../types';

export default class SmallMovieCard extends React.PureComponent {
  constructor(props) {
    super(props);

    this._handleHover = this._handleHover.bind(this);
    this._handleClick = this._handleClick.bind(this);
  }

  _handleHover() {

    const {movie, onHover} = this.props;

    onHover({movie});
  }

  _handleClick(e) {

    const {movie, onClick} = this.props;

    e.preventDefault();
    onClick({movie});
  }

  render() {

    const {movie} = this.props;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseEnter={this._handleHover}
        onClick={this._handleClick}
      >
        <div className="small-movie-card__image" >
          <img src={movie.frames[0]} alt={movie.title} width="280" height="175" />
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html">{movie.title}</a>
        </h3>
      </article>
    );
  }
}

SmallMovieCard.propTypes = {
  movie: Movie.isRequired,
  onClick: PropTypes.func.isRequired,
  onHover: PropTypes.func.isRequired,
};
