import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import LoadingDataBlock from '../components/loading-data-block/loading-data-block';
import {Movie} from '../components/types';
import {LoadingDataStatus, PlayerState} from '../consts';
import {Operations} from '../redux/movie/operations';
import {getDetailedMovie, getDetailedMovieStatus} from '../redux/movie/selectors';

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

      const {init, match: {params: {id}}} = this.props;

      init(id);
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

      const {status} = this.props;

      if (status !== LoadingDataStatus.READY) {
        return <LoadingDataBlock status={status} />;
      }

      const {movie} = this.props;
      const {state, time, duration, isMute, isFullscreen} = this.state;

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
    status: PropTypes.oneOf(Object.values(LoadingDataStatus)),

    init: PropTypes.func,
  };

  function mapStateToProps(state) {
    return {
      status: getDetailedMovieStatus(state),
      movie: getDetailedMovie(state),
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
      init: (id) => {
        dispatch(Operations.init(id));
      }
    };
  }

  return connect(mapStateToProps, mapDispatchToProps)(withRouter(WithVideoPlayer));
}
