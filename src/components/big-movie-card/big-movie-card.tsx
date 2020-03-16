import * as React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {AppPages} from '../../consts';
import {Operations} from '../../redux/user/operations';
import {TMovie} from '../types';

type TBigMovieCardProps = {
  movie: TMovie;
  updateFavoriteStatus: Function;
};

class BigMovieCard extends React.PureComponent<TBigMovieCardProps> {
  public constructor(props: TBigMovieCardProps) {
    super(props);

    this._handleListClick = this._handleListClick.bind(this);
  }

  private _handleListClick() {

    const {updateFavoriteStatus, movie} = this.props;

    updateFavoriteStatus(movie.id, !movie.isFavorite);
  }

  public render() {

    const {movie} = this.props;

    return (
      <div className="movie-card__desc">
        <h2 className="movie-card__title">{movie.title}</h2>
        <p className="movie-card__meta">
          <span className="movie-card__genre">{movie.genres.join(`, `)}</span>
          <span className="movie-card__year">{movie.year}</span>
        </p>

        <div className="movie-card__buttons">
          <Link className="btn btn--play movie-card__button" to={`${AppPages.PLAYER}/${movie.id}`}>
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </Link>
          <button className="btn btn--list movie-card__button" type="button" onClick={this._handleListClick}>
            <svg viewBox="0 0 19 20" width="19" height="20">
              <use xlinkHref={movie.isFavorite ? `#in-list` : `#add`}></use>
            </svg>
            <span>My list</span>
          </button>
          <Link className="btn movie-card__button" to={`${AppPages.MOVIES}/${movie.id}/review`}>Add review</Link>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch: Function) {
  return {
    updateFavoriteStatus: (movieId: string, isFavorite: boolean) => {
      dispatch(Operations.updateFavoriteMovie(movieId, isFavorite));
    },
  };
}

export {BigMovieCard};
export default connect(null, mapDispatchToProps)(BigMovieCard);
