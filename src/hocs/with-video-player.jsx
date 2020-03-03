import React from 'react';
import {Movie} from '../components/types';
import VideoPlayer from '../components/video-player/video-player';

export default function withVideoPlayer(Component) {

  class WithVideoPlayer extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isActive: true,
        isPlaying: false,
        isFullscreen: false,
        time: 0,
        duration: 0,
      };

      this._handlePlay = this._handlePlay.bind(this);
      this._handleFullscreen = this._handleFullscreen.bind(this);
      this._handleDurationUpdate = this._handleDurationUpdate.bind(this);
      this._handleTimeUpdate = this._handleTimeUpdate.bind(this);
      this._handleEnd = this._handleEnd.bind(this);
    }

    _handlePlay() {
      this.setState((prevState) => {
        return {
          isActive: true,
          isPlaying: !prevState.isPlaying,
        };
      });
    }

    _handleDurationUpdate({duration}) {
      this.setState({
        duration,
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
        isActive: false,
        isPlaying: false,
        trackTime: 0,
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
      const {isActive, isPlaying, isFullscreen, time, duration} = this.state;

      return (
        <Component
          movieTitle={movie.title}
          movieTime={time}
          movieDuration={duration}
          isPlaying={isPlaying}
          isFullscreen={isFullscreen}
          onPlay={this._handlePlay}
          onFullscreen={this._handleFullscreen}
        >
          <VideoPlayer
            id={0}
            isActive={isActive}
            isPlaying={isPlaying}
            poster={movie.poster}
            src={movie.src}
            width={`100%`}
            height={`100%`}
            onTimeUpdate={this._handleTimeUpdate}
            onDurationUpdate={this._handleDurationUpdate}
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
