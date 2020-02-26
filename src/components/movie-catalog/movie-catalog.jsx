import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {getMoviesByGenre} from '../../utils/movie-utils';
import {ALL_GENRE, CATALOG_MOVIES_PER_PAGE_LIMIT, GENRES, GENRE_ALIASES} from '../consts';
import GenreFilterList from '../genre-filter-list/genre-filter-list';
import ShowMore from '../show-more/show-more';
import SmallMovieCardList from '../small-movie-card-list';
import {Movie} from '../types';

class MovieCatalog extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      genreFilterIndex: this.props.genreFilterIndex,
    };
  }

  componentDidUpdate() {
  }

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

  _getMovies() {

    const {genreFilterIndex, movies} = this.props;
    const genre = GENRES[genreFilterIndex - 1];

    return genre ? getMoviesByGenre(movies, genre) : movies;
  }

  render() {

    const {onMovieListItemClick, currentPage, onNextPage} = this.props;
    const movies = this._getMovies();
    const currentMovies = movies.slice(0, (currentPage + 1) * CATALOG_MOVIES_PER_PAGE_LIMIT);

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
        {
          currentMovies.length < movies.length && <ShowMore onClick={onNextPage} />
        }
      </section>
    );
  }

}

MovieCatalog.propTypes = {
  movies: PropTypes.arrayOf(Movie),
  onMovieListItemClick: PropTypes.func.isRequired,
  genreFilterIndex: PropTypes.number,
  currentPage: PropTypes.number.isRequired,
  onNextPage: PropTypes.func.isRequired,
  onToPage: PropTypes.func.isRequired,
  onPrevPage: PropTypes.func.isRequired,
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
