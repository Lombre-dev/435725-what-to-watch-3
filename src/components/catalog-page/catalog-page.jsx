import React from 'react';
import {connect} from 'react-redux';
import BigMovieCard from '../big-movie-card/big-movie-card';
import Footer from '../footer/footer';
import MovieCatalog from '../movie-catalog/movie-catalog';
import {Movie} from '../types';

function CatalogPage({promoMovie}) {
  return (
    <>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link">
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
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={promoMovie.poster} alt={`${promoMovie.title} poster`} width="218" height="327" />
            </div>
            <BigMovieCard
              movie={promoMovie}
              isCanReviewed={false}
            />
          </div>
        </div>
      </section>

      <div className="page-content">
        <MovieCatalog />
        <Footer />
      </div>
    </>
  );
}

CatalogPage.propTypes = {
  promoMovie: Movie.isRequired,
};

CatalogPage.defaultProps = {
  movies: [],
};

function mapStateToProps(state) {
  return {
    promoMovie: state.promoMovie,
  };
}

export {CatalogPage};
export default connect(mapStateToProps)(CatalogPage);
