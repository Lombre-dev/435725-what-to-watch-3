import * as React from 'react';
import {connect} from 'react-redux';
import {Redirect, withRouter} from 'react-router-dom';
import LoadingDataBlock from '../components/loading-data-block/loading-data-block';
import {TMatchParamsWithId, TMovie} from '../components/types';
import {LoadingDataStatus, PlayerState} from '../consts';
import {setDetailedMovieRedirectTo} from '../redux/movie/actions';
import {Operations} from '../redux/movie/operations';
import {getDetailedMovie, getDetailedMovieRedirectTo, getDetailedMovieStatus} from '../redux/movie/selectors';

export default function withVideoPlayer(Component) {

  type TProps = {
    match: TMatchParamsWithId;
    movie?: TMovie;
    status: LoadingDataStatus;
    redirectTo?: string;

    onMount: (movieId: number) => void;
    onUnmount: () => void;
  }

  type TState = {
    state: PlayerState;
    time: number;
    duration: number;
    isMute: boolean;
    isFullscreen: boolean;
  }

  class WithVideoPlayer extends React.PureComponent<TProps, TState> {
    public constructor(props: TProps) {
      super(props);

      this.state = {
        state: PlayerState.PLAYING,
        time: 0,
        duration: 0,
        isMute: true,
        isFullscreen: false,
      };

      this.handlePlay = this.handlePlay.bind(this);
      this.handleFullscreen = this.handleFullscreen.bind(this);
      this.handleDurationUpdate = this.handleDurationUpdate.bind(this);
      this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
      this.handleEnd = this.handleEnd.bind(this);
    }

    public componentDidMount() {

      const {onMount, match} = this.props;

      onMount(match.params.id);
    }

    public componentWillUnmount() {

      const {onUnmount} = this.props;

      onUnmount();
    }

    private handlePlay() {
      this.setState((prevState) => {
        return {
          state: prevState.state !== PlayerState.PLAYING ? PlayerState.PLAYING : PlayerState.PAUSED,
        };
      });
    }

    private handleDurationUpdate({duration}) {
      this.setState({
        duration,
      });
    }

    private handleTimeUpdate({time}) {
      this.setState({
        time,
      });
    }

    private handleEnd() {
      this.setState({
        state: PlayerState.ENDED,
        time: 0,
      });
    }

    private handleFullscreen() {
      this.setState((prevState) => {
        return {
          isFullscreen: !prevState.isFullscreen,
        };
      });
    }

    public render() {

      const {state, time, duration, isMute, isFullscreen} = this.state;
      const {status, redirectTo, movie} = this.props;

      if (redirectTo) {
        return <Redirect to={redirectTo} />;
      }

      if (status !== LoadingDataStatus.READY) {
        return <LoadingDataBlock status={status} />;
      }

      return (
        <Component
          movie={movie}
          movieState={state}
          movieTime={time}
          movieDuration={duration}
          isFullscreen={isFullscreen}
          isMuted={isMute}
          onPlay={this.handlePlay}
          onTimeUpdate={this.handleTimeUpdate}
          onDurationUpdate={this.handleDurationUpdate}
          onEnd={this.handleEnd}
          onFullscreen={this.handleFullscreen}
        />
      );
    }
  }

  function mapStateToProps(state) {
    return {
      status: getDetailedMovieStatus(state),
      redirectTo: getDetailedMovieRedirectTo(state),
      movie: getDetailedMovie(state),
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
      onMount: (movieId: number) => {
        dispatch(Operations.init(movieId));
      },
      onUnmount: () => {
        dispatch(setDetailedMovieRedirectTo(undefined));
      },
    };
  }

  return connect(mapStateToProps, mapDispatchToProps)(withRouter(WithVideoPlayer));
}
