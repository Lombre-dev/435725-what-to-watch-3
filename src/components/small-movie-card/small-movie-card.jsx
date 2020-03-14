import PropTypes from 'prop-types';
import React from 'react';
import {Link} from 'react-router-dom';
import {AppPages, PlayerState} from '../../consts';
import {Movie} from '../types';
import VideoPlayer from '../video-player/video-player';

class SmallMovieCard extends React.PureComponent {
  constructor(props) {
    super(props);

    this._handleHover = this._handleHover.bind(this);
    this._handleLeave = this._handleLeave.bind(this);
  }

  _handleHover() {

    const {movie, onHover} = this.props;

    onHover({id: movie.id});
  }

  _handleLeave() {

    const {movie, onLeave} = this.props;

    onLeave({id: movie.id});
  }

  render() {

    const {movie, isPreviewActive} = this.props;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseEnter={this._handleHover}
        onMouseLeave={this._handleLeave}
      >
        <Link className="small-movie-card__link" to={`${AppPages.MOVIES}/${movie.id}`}>
          <div className="small-movie-card__image" >
            <VideoPlayer
              id={movie.id}
              state={isPreviewActive ? PlayerState.PLAYING : PlayerState.LOADING}
              poster={movie.poster}
              src={movie.preview}
            />
          </div>
          <h3 className="small-movie-card__title">{movie.title}</h3>
        </Link>
      </article>
    );
  }
}

SmallMovieCard.propTypes = {
  movie: Movie.isRequired,
  isPreviewActive: PropTypes.bool.isRequired,
  onHover: PropTypes.func.isRequired,
  onLeave: PropTypes.func.isRequired,
};

// https://redux.js.org/api/bindactioncreators/
// bindActionCreators(actionCreators, dispatch)

export default SmallMovieCard;
