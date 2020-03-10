import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Movie} from '../components/types';
import {PlayerState} from '../consts';
import {Operations} from '../redux/player/operations';
import {getPlayerMovie} from '../redux/player/selectors';

export default function withVideoPlayer(Component) {

  class WithVideoPlayer extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        state: PlayerState.PLAYING,
        time: 0,
        duration: 0,
        isMute: true,
        isFullscreen: false,
      };

      this._handlePlay = this._handlePlay.bind(this);
      this._handleFullscreen = this._handleFullscreen.bind(this);
      this._handleDurationUpdate = this._handleDurationUpdate.bind(this);
      this._handleTimeUpdate = this._handleTimeUpdate.bind(this);
      this._handleEnd = this._handleEnd.bind(this);
    }

    componentDidMount() {

      const {setMovie, match: {params: {id}}} = this.props;

      setMovie(id);
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
      const {state, time, duration, isMute, isFullscreen} = this.state;

      if (Boolean(movie) === false) {
        return <></>;
      }

      return (
        <Component
          movie={movie}
          movieState={state}
          movieTime={time}
          movieDuration={duration}
          isFullscreen={isFullscreen}
          isMuted={isMute}
          onPlay={this._handlePlay}
          onTimeUpdate={this._handleTimeUpdate}
          onDurationUpdate={this._handleDurationUpdate}
          onEnd={this._handleEnd}
          onFullscreen={this._handleFullscreen}
        />
      );
    }
  }

  WithVideoPlayer.propTypes = {
    match: PropTypes.object.isRequired,
    movie: Movie,

    setMovie: PropTypes.func,
  };

  function mapStateToProps(state) {
    return {
      movie: getPlayerMovie(state),
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
      setMovie: (id) => {
        dispatch(Operations.setPlayerMovie(id));
      }
    };
  }

  return connect(mapStateToProps, mapDispatchToProps)(withRouter(WithVideoPlayer));
}
