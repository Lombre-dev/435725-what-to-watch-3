import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {Redirect, withRouter} from 'react-router-dom';
import {LoadingDataStatus} from '../../consts';
import {setDetailedMovieRedirectTo} from '../../redux/movie/actions';
import {Operations} from '../../redux/movie/operations';
import {getDetailedMovie, getDetailedMovieRedirectTo, getDetailedMovieRelatedMovies, getDetailedMovieStatus} from '../../redux/movie/selectors';
import BigMovieCard from '../big-movie-card/big-movie-card';
import Footer from '../footer/footer';
import LoadingDataBlock from '../loading-data-block/loading-data-block';
import Logo from '../logo/logo';
import MoreLikeThis from '../more-like-this/more-like-this';
import MovieInfo from '../movie-info';
import {Movie} from '../types';
import UserBlock from '../user-block/user-block';

class MoviePage extends React.PureComponent {

  componentDidMount() {

    const {onMount, match: {params: {id}}} = this.props;

    onMount(id);
  }

  componentDidUpdate(prevProps) {

    const {match: {params: {id: currentId}}, onMount} = this.props;
    const {match: {params: {id: prevId}}} = prevProps;

    if (currentId !== prevId) {
      onMount(currentId);
    }
  }

  componentWillUnmount() {

    const {onUnmount} = this.props;

    onUnmount();
  }

  render() {

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

MoviePage.propTypes = {
  match: PropTypes.object.isRequired,
  status: PropTypes.oneOf(Object.values(LoadingDataStatus)),
  redirectTo: PropTypes.string,
  movie: Movie,
  relatedMovies: PropTypes.arrayOf(Movie),

  onMount: PropTypes.func,
  onUnmount: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    status: getDetailedMovieStatus(state),
    redirectTo: getDetailedMovieRedirectTo(state),
    movie: getDetailedMovie(state),
    relatedMovies: getDetailedMovieRelatedMovies(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onMount: (movieId) => {
      dispatch(Operations.init(movieId));
    },
    onUnmount: () => {
      dispatch(setDetailedMovieRedirectTo(undefined));
    },
  };
}

export {MoviePage};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MoviePage));
