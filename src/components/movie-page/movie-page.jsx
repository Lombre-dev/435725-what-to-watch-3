import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {getCurrentMovie, getMoviesLikeCurrent} from '../../redux/movie-details/selectors';
import BigMovieCard from '../big-movie-card/big-movie-card';
import Footer from '../footer/footer';
import Logo from '../logo/logo';
import MoreLikeThis from '../more-like-this/more-like-this';
import MovieInfo from '../movie-info';
import {Movie} from '../types';
import UserBlock from '../user-block/user-block';

function MoviePage({currentMovie, moviesLikeCurrent}) {

  return (
    <>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">

            <Logo />
            <UserBlock />
          </header>

          <div className="movie-card__wrap">
            <BigMovieCard
              movie={currentMovie}
              isCanReviewed={true}
            />
          </div>
        </div>
        <MovieInfo
          movie={currentMovie}
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

MoviePage.propTypes = {
  currentMovie: Movie.isRequired,
  moviesLikeCurrent: PropTypes.arrayOf(Movie).isRequired,
};

function mapStateToProps(state) {
  return {
    currentMovie: getCurrentMovie(state),
    moviesLikeCurrent: getMoviesLikeCurrent(state),
  };
}

export {MoviePage};
export default connect(mapStateToProps)(MoviePage);
