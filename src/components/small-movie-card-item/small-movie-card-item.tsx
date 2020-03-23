import * as React from 'react';
import {Link} from 'react-router-dom';
import {TMovie, AppPages, PlayerState} from '../../types';
import VideoPlayer from '../video-player/video-player';

type TProps = {
  movie: TMovie;
  isPreviewActive: boolean;
  onHover: (movieId: number) => void;
  onLeave: () => void;
};

class SmallMovieCardItem extends React.PureComponent<TProps> {
  public constructor(props: TProps) {
    super(props);

    this.handleHover = this.handleHover.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
  }

  private handleHover() {

    const {movie, onHover} = this.props;

    onHover(movie.id);
  }

  private handleLeave() {

    const {onLeave} = this.props;

    onLeave();
  }

  public render() {

    const {movie, isPreviewActive} = this.props;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleLeave}
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

export default SmallMovieCardItem;
