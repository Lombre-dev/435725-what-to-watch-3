import * as React from 'react';
import {PlayerState} from '../../consts';

type Props = {
  id: number;
  state: PlayerState;
  poster: string;
  width?: string;
  height?: string;
  src: string;
  onDurationUpdate?: Function;
  onTimeUpdate?: Function;
  onEnd?: Function;
  isMuted?: boolean;
};

class VideoPlayer extends React.PureComponent<Props> {

  private _videoRef: React.RefObject<HTMLVideoElement>;

  public constructor(props: Props) {
    super(props);

    this._videoRef = React.createRef();

    this.handleDurationUpdate = this.handleDurationUpdate.bind(this);
    this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
  }

  public componentDidMount() {

    const {poster, src, state, isMuted} = this.props;
    const video = this._videoRef.current;

    video.ondurationchange = this.handleDurationUpdate;
    video.ontimeupdate = this.handleTimeUpdate;
    video.onended = this.handleEnd;
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

  public componentWillUnmount() {

    const video = this._videoRef.current;

    video.ondurationchange = null;
    video.ontimeupdate = null;
    video.onended = null;
    video.poster = ``;
    video.src = ``;
  }

  public componentDidUpdate() {

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

  private handleDurationUpdate() {

    const {onDurationUpdate} = this.props;
    const video = this._videoRef.current;

    if (onDurationUpdate) {
      onDurationUpdate({duration: video.duration});
    }
  }

  private handleTimeUpdate() {

    const {onTimeUpdate} = this.props;
    const video = this._videoRef.current;

    if (onTimeUpdate) {
      onTimeUpdate({time: video.currentTime});
    }
  }

  private handleEnd() {

    const {onEnd} = this.props;

    if (onEnd) {
      onEnd();
    }
  }

  public render() {

    const {width, height} = this.props;

    return (
      <video ref={this._videoRef} width={width} height={height}></video>
    );
  }

  public static defaultProps = {
    width: `280`,
    height: `175`,
    isMuted: true,
  }
}

export default VideoPlayer;
