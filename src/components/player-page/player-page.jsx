import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {clearPlayerMovie} from '../../redux/player/actions';

function PlayerPage({isPlaying, onExit, onPlay, onFullscreen, children}) {
  return (
    <div className="player">

      {
        children
      }

      <button type="button" className="player__exit" onClick={onExit}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style="left: 30%;">Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={onPlay}>
            {
              isPlaying ?
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
          <div className="player__name">Transpotting</div>

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

PlayerPage.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onPlay: PropTypes.func.isRequired,
  onFullscreen: PropTypes.func.isRequired,
  onExit: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    onExit: () => {
      dispatch(clearPlayerMovie());
    },
  };
}

export {PlayerPage};
export default connect(null, mapDispatchToProps)(PlayerPage);
