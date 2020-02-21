import PropTypes from 'prop-types';
import React from 'react';

export default class VideoPlayer extends React.PureComponent {

  constructor(props) {
    super(props);

    this._videoRef = React.createRef();
    this.state = {
      isActive: false,
    };

    this._handleVideoPlay = this._handleVideoPlay.bind(this);
    this._handleVideoEnd = this._handleVideoEnd.bind(this);
  }

  componentDidMount() {

    const {poster, isMuted, src} = this.props;
    const video = this._videoRef.current;

    video.onplay = this._handleVideoPlay;
    video.onend = this._handleVideoEnd;
    video.preload = `none`;
    video.poster = poster;
    video.muted = isMuted;
    video.src = src;
  }

  componentWillUnmount() {

    const video = this._videoRef.current;

    video.onplay = null;
    video.onend = null;
    video.poster = ``;
    video.src = ``;
  }

  componentDidUpdate() {

    const {isActive: isActiveProps} = this.props;
    const {isActive: isActiveState} = this.state;
    const video = this._videoRef.current;

    if (isActiveProps) {
      if (!isActiveState) {
        video.play();
      }
    } else {
      if (isActiveState) {
        video.load();
        this.setState(() => {
          return {
            isActive: false,
          };
        });
      }
    }
  }

  _handleVideoPlay() {
    this.setState(() => {
      return {
        isActive: true,
      };
    });
  }

  _handleVideoEnd() {
    this.setState(() => {
      return {
        isActive: false,
      };
    });
  }

  render() {
    return (
      <video ref={this._videoRef} width="280" height="175"></video>
    );
  }
}

VideoPlayer.propTypes = {
  isActive: PropTypes.bool.isRequired,
  poster: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  isMuted: PropTypes.bool,
};

VideoPlayer.defaultProps = {
  isMuted: true,
};
