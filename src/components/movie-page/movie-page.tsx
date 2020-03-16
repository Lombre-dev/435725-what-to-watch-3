import * as React from 'react';
import {connect} from 'react-redux';
import {Redirect, withRouter} from 'react-router-dom';
import {setDetailedMovieRedirectTo} from '../../redux/movie/actions';
import {Operations} from '../../redux/movie/operations';
import {getDetailedMovie, getDetailedMovieRedirectTo, getDetailedMovieRelatedMovies, getDetailedMovieStatus} from '../../redux/movie/selectors';
import BigMovieCard from '../big-movie-card/big-movie-card';
import Footer from '../footer/footer';
import LoadingDataBlock from '../loading-data-block/loading-data-block';
import Logo from '../logo/logo';
import MoreLikeThis from '../more-like-this/more-like-this';
import MovieInfo from '../movie-info';
import UserBlock from '../user-block/user-block';

type TMoviePageProps = {
  match: TMatchParamsWithId,
  status?: LoadingDataStatus,
  redirectTo?: string,
  movie?: TMovie,
  relatedMovies?: TMovie[],

  updateMovie?: Function,
  resetRedirect?: Function,
};

class MoviePage extends React.PureComponent<TMoviePageProps> {

  public componentDidMount() {

    const {updateMovie, match} = this.props;

    updateMovie(match.params.id);
  }

  public componentDidUpdate(prevProps) {

    const {match: {params: {id: currentId}}, updateMovie} = this.props;
    const {match: {params: {id: prevId}}} = prevProps;

    if (currentId !== prevId) {
      updateMovie(currentId);
    }
  }

  public componentWillUnmount() {

    const {resetRedirect} = this.props;

    resetRedirect();
  }

  public render() {

    const {redirectTo, status, movie, relatedMovies} = this.props;

    if (redirectTo) {
      return <Redirect to={redirectTo} />;
    }

    if (status !== LoadingDataStatus.READY && !movie) {
      return <LoadingDataBlock status={status} />;
    }

    return (
      <>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src={movie.backgroundImage} alt={movie.title} />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header movie-card__head">
              <Logo />
              <UserBlock />
            </header>

            <div className="movie-card__wrap">
              <BigMovieCard
                movie={movie}
              />
            </div>
          </div>
          <MovieInfo
            movie={movie}
          />
        </section>

        <div className="page-content">
          <MoreLikeThis
            movies={relatedMovies}
          />
          <Footer />
        </div>
      </>
    );
  }
}

function mapStateToProps(state: Object) {
  return {
    status: getDetailedMovieStatus(state),
    redirectTo: getDetailedMovieRedirectTo(state),
    movie: getDetailedMovie(state),
    relatedMovies: getDetailedMovieRelatedMovies(state),
  };
}

function mapDispatchToProps(dispatch: Object) {
  return {
    updateMovie: (movieId) => {
      dispatch(Operations.init(movieId));
    },
    resetRedirect: () => {
      dispatch(setDetailedMovieRedirectTo(undefined));
    },
  };
}

export {MoviePage};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MoviePage));
