import PropTypes from 'prop-types';
import React from 'react';
import {PlayerState} from '../../consts';

class VideoPlayer extends React.PureComponent {

  constructor(props) {
    super(props);

    this._videoRef = React.createRef();

    this._handleDurationUpdate = this._handleDurationUpdate.bind(this);
    this._handleTimeUpdate = this._handleTimeUpdate.bind(this);
    this._handleEnd = this._handleEnd.bind(this);
  }

  componentDidMount() {

    const {poster, src, state, isMuted} = this.props;
    const video = this._videoRef.current;

    video.ondurationchange = this._handleDurationUpdate;
    video.ontimeupdate = this._handleTimeUpdate;
    video.onended = this._handleEnd;
    video.preload = state === PlayerState.LOADING ? `metadata` : `none`;
    video.poster = poster;
    video.src = src;

    if (isMuted) {
      video.muted = true;
    }

    if (state === PlayerState.PLAYING) {
      video.play();
    }
  }

  componentWillUnmount() {

    const video = this._videoRef.current;

    video.ondurationchange = null;
    video.ontimeupdate = null;
    video.onended = null;
    video.poster = ``;
    video.src = ``;
  }

  componentDidUpdate() {

    const {state, isMuted} = this.props;
    const video = this._videoRef.current;

    if (isMuted) {
      video.muted = isMuted;
    } else {
      delete video.muted;
    }

    switch (state) {
      case PlayerState.INITED:
        // do nothing
        break;
      case PlayerState.PLAYING:
        video.play();
        break;
      case PlayerState.PAUSED:
        video.pause();
        break;
      case PlayerState.LOADING:
      case PlayerState.ENDED:
        video.load();
        break;
    }
  }

  _handleDurationUpdate() {

    const {onDurationUpdate} = this.props;
    const video = this._videoRef.current;

    if (onDurationUpdate) {
      onDurationUpdate({duration: video.duration});
    }
  }

  _handleTimeUpdate() {

    const {onTimeUpdate} = this.props;
    const video = this._videoRef.current;

    if (onTimeUpdate) {
      onTimeUpdate({time: video.currentTime});
    }
  }

  _handleEnd() {

    const {onEnd} = this.props;

    if (onEnd) {
      onEnd();
    }
  }

  render() {

    const {width, height} = this.props;

    return (
      <video ref={this._videoRef} width={width} height={height}></video>
    );
  }
}

VideoPlayer.propTypes = {
  id: PropTypes.number.isRequired,
  state: PropTypes.oneOf(Object.values(PlayerState)).isRequired,
  poster: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  src: PropTypes.string.isRequired,
  onDurationUpdate: PropTypes.func,
  onTimeUpdate: PropTypes.func,
  onEnd: PropTypes.func,
  isMuted: PropTypes.bool,
};

VideoPlayer.defaultProps = {
  width: `280`,
  height: `175`,
  isMuted: true,
};

export default VideoPlayer;
