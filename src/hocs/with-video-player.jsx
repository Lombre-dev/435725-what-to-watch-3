import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {PlayerState} from '../components/consts';
import {Movie} from '../components/types';
import VideoPlayer from '../components/video-player/video-player';
import {setPlayerMovie} from '../redux/player/actions';
import {getPlayerMovie} from '../redux/player/selectors';

export default function withVideoPlayer(Component) {

  class WithVideoPlayer extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        state: PlayerState.PLAYING,
        mute: true,
        time: 0,
        duration: 0,
        isFullscreen: false,
      };

      this._handlePlay = this._handlePlay.bind(this);
      this._handleFullscreen = this._handleFullscreen.bind(this);
      this._handleDurationUpdate = this._handleDurationUpdate.bind(this);
      this._handleTimeUpdate = this._handleTimeUpdate.bind(this);
      this._handleEnd = this._handleEnd.bind(this);
    }

    componentDidMount() {

      const {mockSetPlayerMovie, match: {params: {id}}} = this.props;

      mockSetPlayerMovie(id);
    }

    _handlePlay() {
      this.setState((prevState) => {
        return {
          state: prevState.state !== PlayerState.PLAYING ? PlayerState.PLAYING : PlayerState.PAUSED,
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

    _handleEnd() {
      this.setState({
        state: PlayerState.ENDED,
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
      const {state, time, duration, mute, isFullscreen} = this.state;

      if (!movie) {
        return <></>;
      }

      return (
        <Component
          movieId={movie.id}
          movieTitle={movie.title}
          movieTime={time}
          movieDuration={duration}
          movieState={state}
          isFullscreen={isFullscreen}
          onPlay={this._handlePlay}
          onFullscreen={this._handleFullscreen}
        >
          <VideoPlayer
            id={0}
            state={state}
            poster={movie.poster}
            src={movie.src}
            width={`100%`}
            height={`100%`}
            onTimeUpdate={this._handleTimeUpdate}
            onDurationUpdate={this._handleDurationUpdate}
            onEnd={this._handleEnd}
            isMuted={mute}
          />
        </Component >
      );
    }
  }

  WithVideoPlayer.propTypes = {
    movie: Movie,
    // mock
    match: PropTypes.object.isRequired,
    mockSetPlayerMovie: PropTypes.func,
  };

  function mapStateToProps(state) {
    return {
      movie: getPlayerMovie(state),
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
      mockSetPlayerMovie: (id) => {
        dispatch(setPlayerMovie(id));
      }
    };
  }

  return connect(mapStateToProps, mapDispatchToProps)(withRouter(WithVideoPlayer));
}
