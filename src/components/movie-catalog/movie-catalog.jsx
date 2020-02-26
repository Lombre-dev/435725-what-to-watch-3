import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {ALL_GENRE, GENRES, GENRE_ALIASES} from '../consts';
import GenreFilterList from '../genre-filter-list/genre-filter-list';
import SmallMovieCardList from '../small-movie-card-list';
import {Movie} from '../types';

class MovieCatalog extends React.PureComponent {

  _getGenres() {

    const {movies} = this.props;
    const genres = [ALL_GENRE];

    movies.forEach((movie) => {
      movie.genres.forEach((genre) => {

        const alias = GENRE_ALIASES[genre] || genre;

        if (genres.includes(alias)) {
          return;
        }
        genres.push(alias);
      });
    });

    return genres;
  }

  _getCurrentMovies() {

    const {genreFilterIndex, movies} = this.props;
    const genre = GENRES[genreFilterIndex - 1];

    return genre ? movies.filter((movie) => movie.genres.includes(genre)) : movies;
  }

  render() {

    const {onMovieListItemClick} = this.props;
    const currentMovies = this._getCurrentMovies();

    return (
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <GenreFilterList
          genres={this._getGenres()}
        />
        <SmallMovieCardList
          movies={currentMovies}
          onItemClick={onMovieListItemClick}
        />
        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div>
      </section>
    );
  }

}

MovieCatalog.propTypes = {
  movies: PropTypes.arrayOf(Movie),
  onMovieListItemClick: PropTypes.func.isRequired,
  // TODO: без след. пропcoв ругается линтер
  genreFilterIndex: PropTypes.number,
};

MovieCatalog.defaultProps = {
  movies: [],
};

function mapStateToProps(state) {
  return {
    genreFilterIndex: state.genreFilterIndex,
  };
}

export {MovieCatalog};
export default connect(mapStateToProps)(MovieCatalog);
