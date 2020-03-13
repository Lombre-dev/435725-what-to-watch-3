import React from 'react';
import {connect} from 'react-redux';
import {getCatalogPromoMovie} from '../../redux/catalog/selectors';
import BigMovieCard from '../big-movie-card/big-movie-card';
import Catalog from '../catalog/catalog';
import Footer from '../footer/footer';
import Logo from '../logo/logo';
import {Movie} from '../types';
import UserBlock from '../user-block/user-block';

function CatalogPage({promoMovie}) {

  if (Boolean(promoMovie) === false) {
    return <></>;
  }

  return (
    <>
      <section className="movie-card">
        <div className="movie-card__bg" style={{backgroundColor: promoMovie.backgroundColor}}>
          <img src={promoMovie.backgroundImage} alt={promoMovie.title} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header movie-card__head">
          <Logo />
          <UserBlock />
        </header>
        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={promoMovie.poster} alt={`${promoMovie.title} poster`} width="218" height="327" />
            </div>
            <BigMovieCard
              movie={promoMovie}
            />
          </div>
        </div>
      </section>
      <div className="page-content">
        <Catalog />
        <Footer />
      </div>
    </>
  );
}

CatalogPage.propTypes = {
  promoMovie: Movie,
};

function mapStateToProps(state) {
  return {
    promoMovie: getCatalogPromoMovie(state),
  };
}

export {CatalogPage};
export default connect(mapStateToProps)(CatalogPage);
