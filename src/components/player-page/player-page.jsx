import PropTypes from 'prop-types';
import React from 'react';
import {Link} from 'react-router-dom';
import {AppPages, PlayerState} from '../../consts';
import {formatTime as getFormatTime} from '../../utils/player-utils';
import {Movie} from '../types';
import VideoPlayer from '../video-player/video-player';

class PlayerPage extends React.PureComponent {

  constructor(props) {
    super(props);

    this._ref = React.createRef();
  }

  componentDidUpdate(prevProps) {

    const {isFullscreen, onFullscreen} = this.props;
    const element = this._ref.current;

    if (prevProps.isFullscreen !== isFullscreen) {
      if (isFullscreen) {
        element.requestFullscreen();
        element.onfullscreenchange = () => {
          document.onfullscreenchange = null;
          if (document.fullscreenElement !== element) {
            onFullscreen();
          }
        };
      } else {
        element.onfullscreenchange = null;
        if (document.fullscreenElement === element) {
          document.exitFullscreen();
        }
      }
    }
  }

  componentWillUnmount() {

    const element = this._ref.current;

    if (document.fullscreenElement === element) {
      document.exitFullscreen();
    }

    document.onfullscreenchange = null;
  }

  render() {

    const {
      movie,
      movieState,
      movieTime,
      movieDuration,
      onPlay,
      onTimeUpdate,
      onDurationUpdate,
      onEnd,
      onFullscreen,
      isMuted,
    } = this.props;

    const progress = movieDuration > 0 ? (movieTime / movieDuration) * 100 : 0;

    return (
      <div className="player" ref={this._ref}>

        <VideoPlayer
          id={movie.id}
          state={movieState}
          poster={movie.poster}
          src={movie.src}
          width={`100%`}
          height={`100%`}
          onTimeUpdate={onTimeUpdate}
          onDurationUpdate={onDurationUpdate}
          onEnd={onEnd}
          isMuted={isMuted}
        />

        <Link className="player__exit" to={`${AppPages.MOVIES}/${movie.id}`} style={{textDecoration: `none`}}>Exit</Link>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value={progress} max="100"></progress>
              <div className="player__toggler" style={{left: `${progress}%`}}>Toggler</div>
            </div>
            <div className="player__time-value">{getFormatTime(movieDuration - movieTime)}</div>
          </div>

          <div className="player__controls-row">
            <button type="button" className="player__play" onClick={onPlay}>
              {
                movieState === PlayerState.PLAYING ?
                  <>
                    <svg viewBox="0 0 14 21" width="14" height="21">
                      <use xlinkHref="#pause" />
                    </svg>
                    <span>Pause</span>
                  </> :
                  <>
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s" />
                    </svg>
                    <span>Play</span>
                  </>
              }
            </button>
            <div className="player__name">{movie.title}</div>

            <button type="button" className="player__full-screen" onClick={onFullscreen}>
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen" />
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div >
      </div >
    );
  }
}

PlayerPage.propTypes = {
  movie: Movie,
  movieState: PropTypes.oneOf(Object.values(PlayerState)),
  movieTime: PropTypes.number,
  movieDuration: PropTypes.number,
  isFullscreen: PropTypes.bool,
  isMuted: PropTypes.bool,
  onPlay: PropTypes.func,
  onTimeUpdate: PropTypes.func,
  onDurationUpdate: PropTypes.func,
  onEnd: PropTypes.func,
  onFullscreen: PropTypes.func,
};

export default PlayerPage;
