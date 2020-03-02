import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {setCurrentMovie} from '../../redux/movie-details/actions';
import {Movie} from '../types';
import VideoPlayer from '../video-player/video-player';

class SmallMovieCard extends React.PureComponent {
  constructor(props) {
    super(props);

    this._handleHover = this._handleHover.bind(this);
    this._handleLeave = this._handleLeave.bind(this);
    this._handleClick = this._handleClick.bind(this);
  }

  _handleHover() {

    const {id, onHover} = this.props;

    onHover({id});
  }

  _handleLeave() {

    const {id, onLeave} = this.props;

    onLeave({id});
  }

  _handleClick(e) {

    const {movie, onClick} = this.props;

    e.preventDefault();
    onClick(movie);
  }

  render() {

    const {id, movie, isPreviewActive} = this.props;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseEnter={this._handleHover}
        onMouseLeave={this._handleLeave}
        onClick={this._handleClick}
      >
        <div className="small-movie-card__image" >
          <VideoPlayer
            id={id}
            isActive={isPreviewActive}
            poster={movie.poster}
            src={movie.preview}
          />
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html">{movie.title}</a>
        </h3>
      </article>
    );
  }
}

SmallMovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  movie: Movie.isRequired,
  isPreviewActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onHover: PropTypes.func.isRequired,
  onLeave: PropTypes.func.isRequired,
};

// https://redux.js.org/api/bindactioncreators/
// bindActionCreators(actionCreators, dispatch)

function mapDispatchToProps(dispatch) {
  return {
    onClick: (movie) => {
      dispatch(setCurrentMovie(movie));
    },
  };
}

export {SmallMovieCard};
export default connect(null, mapDispatchToProps)(SmallMovieCard);
