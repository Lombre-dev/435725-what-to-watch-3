import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {getMoviesByGenre} from '../../utils/movie-utils';
import BigMovieCard from '../big-movie-card/big-movie-card';
import Footer from '../footer/footer';
import MoreLikeThis from '../more-like-this/more-like-this';
import MovieInfo from '../movie-info';
import {Movie} from '../types';

function MoviePage({currentMovie, movies}) {

  return (
    <>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <a href="main.html" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
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
          movies={getMoviesByGenre(movies, currentMovie.genres[0], [currentMovie])}
        />
        <Footer />
      </div>
    </>
  );
}

MoviePage.propTypes = {
  currentMovie: Movie.isRequired,
  movies: PropTypes.arrayOf(Movie).isRequired,
};

function mapStateToProps(state) {
  return {
    currentMovie: state.currentMovie,
    movies: state.allMovies,
  };
}

export {MoviePage};
export default connect(mapStateToProps)(MoviePage);
