import * as React from 'react';
import {Link} from 'react-router-dom';
import {AppPages, PlayerState} from '../../consts';
import {TMovie} from '../types';
import VideoPlayer from '../video-player/video-player';

type TSmallMovieCardProps = {
  movie: TMovie;
  isPreviewActive: boolean;
  onHover: Function;
  onLeave: Function;
};

class SmallMovieCard extends React.PureComponent<TSmallMovieCardProps> {
  public constructor(props: TSmallMovieCardProps) {
    super(props);

    this._handleHover = this._handleHover.bind(this);
    this._handleLeave = this._handleLeave.bind(this);
  }

  private _handleHover() {

    const {movie, onHover} = this.props;

    onHover({id: movie.id});
  }

  private _handleLeave() {

    const {movie, onLeave} = this.props;

    onLeave({id: movie.id});
  }

  public render() {

    const {movie, isPreviewActive} = this.props;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseEnter={this._handleHover}
        onMouseLeave={this._handleLeave}
      >
        <Link className="small-movie-card__link" to={`${AppPages.MOVIES}/${movie.id}`}>
          <div className="small-movie-card__image" >
            <VideoPlayer
              id={movie.id}
              state={isPreviewActive ? PlayerState.PLAYING : PlayerState.LOADING}
              poster={movie.poster}
              src={movie.preview}
            />
          </div>
          <h3 className="small-movie-card__title">{movie.title}</h3>
        </Link>
      </article>
    );
  }
}

export default SmallMovieCard;
