import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {releasePlayerMovie} from '../../redux/player/actions';
import {formatTime as getFormatTime} from '../../utils/player-utils';
import {PlayerState} from '../consts';

class PlayerPage extends React.PureComponent {

  constructor(props) {
    super(props);

    this._ref = React.createRef();
  }

  componentDidUpdate() {

    const {isFullscreen, onFullscreen} = this.props;
    const element = this._ref.current;

    if (isFullscreen) {
      if (document.fullscreenElement !== element) {
        document.onfullscreenchange = () => {
          if (document.fullscreenElement !== element) {
            document.onfullscreenchange = null;
            onFullscreen();
          }
        };
        element.requestFullscreen();
      }
    } else {
      document.onfullscreenchange = null;
      if (document.fullscreenElement === element) {
        document.exitFullscreen();
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
      movieTitle,
      movieTime,
      movieDuration,
      movieState,
      onExit,
      onPlay,
      onFullscreen,
      children
    } = this.props;

    const progress = movieDuration > 0 ? (movieTime / movieDuration) * 100 : 0;

    return (
      <div className="player" ref={this._ref}>

        {
          children
        }

        <button type="button" className="player__exit" onClick={onExit}>Exit</button>

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
            <div className="player__name">{movieTitle}</div>

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
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  movieTitle: PropTypes.string,
  movieTime: PropTypes.number,
  movieDuration: PropTypes.number,
  movieState: PropTypes.oneOf(Object.values(PlayerState)),
  isFullscreen: PropTypes.bool,
  onPlay: PropTypes.func,
  onFullscreen: PropTypes.func,
  onExit: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    onExit: () => {
      dispatch(releasePlayerMovie());
    },
  };
}

export {PlayerPage};
export default connect(null, mapDispatchToProps)(PlayerPage);
