import React from 'react';
import {Movie} from '../components/types';
import VideoPlayer from '../components/video-player/video-player';

export default function withVideoPlayer(Component) {

  class WithVideoPlayer extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
        isFullscreen: false,
        time: 0,
      };

      this._handlePlay = this._handlePlay.bind(this);
      this._handleFullscreen = this._handleFullscreen.bind(this);
      this._handleTimeUpdate = this._handleTimeUpdate.bind(this);
      this._handleEnd = this._handleEnd.bind(this);
    }

    _handlePlay() {
      this.setState((prevState) => {
        return {
          isPlaying: !prevState.isPlaying,
        };
      });
    }

    _handleTimeUpdate({time}) {
      this.setState({
        time,
      });
    }

    _handleVideoPause() {
      this.setState({
        isPlaying: false,
      });
    }

    _handleEnd() {
      this.setState({
        isPlaying: false,
        time: 0,
      });
    }

    _handleFullscreen() {
      this.setState((prevState) => {
        return {
          isFullscreen: !prevState.isFullscreen,
        };
      });
    }

    render() {

      const {movie} = this.props;
      const {isPlaying} = this.state;

      return (
        <Component
          isPlaying={isPlaying}
          onPlay={this._handlePlay}
          onFullscreen={this._handleFullscreen}
        >
          <VideoPlayer
            id={0}
            isActive={isPlaying}
            poster={movie.poster}
            src={movie.src}
            width={`100%`}
            height={`100%`}
            onTimeUpdate={this._handleTimeUpdate}
            onEnd={this._handleEnd}
          />
        </Component >
      );
    }
  }

  WithVideoPlayer.propTypes = {
    movie: Movie.isRequired,
  };

  return WithVideoPlayer;
}
