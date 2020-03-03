import PropTypes from 'prop-types';
import React from 'react';

export default class VideoPlayer extends React.PureComponent {

  constructor(props) {
    super(props);

    this._videoRef = React.createRef();

    this._handleTimeUpdate = this._handleTimeUpdate.bind(this);
    this._handleEnd = this._handleEnd.bind(this);
  }

  componentDidMount() {

    const {poster, src} = this.props;
    const video = this._videoRef.current;

    video.ontimeupdate = this._handleTimeUpdate;
    video.onended = this._handleEnd;
    video.preload = `none`;
    video.poster = poster;
    video.src = src;
  }

  componentWillUnmount() {

    const video = this._videoRef.current;

    video.ontimeupdate = null;
    video.onended = null;
    video.poster = ``;
    video.src = ``;
  }

  componentDidUpdate() {

    const {isActive, isMuted} = this.props;
    const video = this._videoRef.current;

    if (isMuted) {
      video.muted = isMuted;
    } else {
      delete video.muted;
    }

    if (isActive) {
      video.play();
    } else {
      video.load();
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
  isActive: PropTypes.bool.isRequired,
  poster: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  src: PropTypes.string.isRequired,
  onTimeUpdate: PropTypes.func,
  onEnd: PropTypes.func,
  isMuted: PropTypes.bool,
};

VideoPlayer.defaultProps = {
  width: `280`,
  height: `175`,
  isMuted: true,
};
