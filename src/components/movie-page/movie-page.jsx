import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {Operations} from '../../redux/movie-details/operations';
import {getDetailedMovie, getMoviesLikeDetailedMovie} from '../../redux/movie-details/selectors';
import BigMovieCard from '../big-movie-card/big-movie-card';
import Footer from '../footer/footer';
import Logo from '../logo/logo';
import MoreLikeThis from '../more-like-this/more-like-this';
import MovieInfo from '../movie-info';
import {Movie} from '../types';
import UserBlock from '../user-block/user-block';

class MoviePage extends React.PureComponent {

  componentDidMount() {

    const {setMovie, match: {params: {id}}} = this.props;

    setMovie(id);
  }

  componentDidUpdate(prevProps) {

    const {match: {params: {id: currentId}}, setMovie} = this.props;
    const {match: {params: {id: prevId}}} = prevProps;

    if (currentId !== prevId) {
      setMovie(currentId);
    }
  }

  render() {

    const {movie, moviesLikeCurrent} = this.props;

    if (Boolean(movie) === false) {
      return <></>;
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
                isCanReviewed={true}
              />
            </div>
          </div>
          <MovieInfo
            movie={movie}
          />
        </section>

        <div className="page-content">
          <MoreLikeThis
            movies={moviesLikeCurrent}
          />
          <Footer />
        </div>
      </>
    );
  }
}

MoviePage.propTypes = {
  match: PropTypes.object.isRequired,
  movie: Movie,
  moviesLikeCurrent: PropTypes.arrayOf(Movie),

  setMovie: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    movie: getDetailedMovie(state),
    moviesLikeCurrent: getMoviesLikeDetailedMovie(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setMovie: (id) => {
      dispatch(Operations.setDetailedMovie(id));
    }
  };
}

export {MoviePage};
export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
