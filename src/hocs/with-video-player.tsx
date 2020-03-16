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

  type TWithVideoPlayerProps = {
    match: TMatchParamsWithId;
    movie?: TMovie;
    status: LoadingDataStatus;
    redirectTo?: string;

    onMount?: Function;
    onUnmount?: Function;
  }

  type TWithVideoPlayerState = {
    state: PlayerState;
    time: number;
    duration: number;
    isMute: boolean;
    isFullscreen: boolean;
  }

  class WithVideoPlayer extends React.PureComponent<TWithVideoPlayerProps, TWithVideoPlayerState> {
    public constructor(props: TWithVideoPlayerProps) {
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

    public componentDidMount() {

      const {onMount, match} = this.props;

      onMount(match.params.id);
    }

    public componentWillUnmount() {

      const {onUnmount} = this.props;

      onUnmount();
    }

    private _handlePlay() {
      this.setState((prevState) => {
        return {
          state: prevState.state !== PlayerState.PLAYING ? PlayerState.PLAYING : PlayerState.PAUSED,
        };
      });
    }

    private _handleDurationUpdate({duration}) {
      this.setState({
        duration,
      });
    }

    private _handleTimeUpdate({time}) {
      this.setState({
        time,
      });
    }

    private _handleEnd() {
      this.setState({
        state: PlayerState.ENDED,
        time: 0,
      });
    }

    private _handleFullscreen() {
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
          onPlay={this._handlePlay}
          onTimeUpdate={this._handleTimeUpdate}
          onDurationUpdate={this._handleDurationUpdate}
          onEnd={this._handleEnd}
          onFullscreen={this._handleFullscreen}
        />
      );
    }
  }

  function mapStateToProps(state: Record<string, any>) {
    return {
      status: getDetailedMovieStatus(state),
      redirectTo: getDetailedMovieRedirectTo(state),
      movie: getDetailedMovie(state),
    };
  }

  function mapDispatchToProps(dispatch: Function) {
    return {
      onMount: (movieId: string) => {
        dispatch(Operations.init(movieId));
      },
      onUnmount: () => {
        dispatch(setDetailedMovieRedirectTo(undefined));
      },
    };
  }

  return connect(mapStateToProps, mapDispatchToProps)(withRouter(WithVideoPlayer));
}
