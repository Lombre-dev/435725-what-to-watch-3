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
      moviesLimit: CATALOG_MOVIES_PER_PAGE_LIMIT,
      genreFilterIndex: this.props.genreFilterIndex,
    };

    this._handleShowMoreClick = this._handleShowMoreClick.bind(this);
  }

  componentDidUpdate() {
    if (this.props.genreFilterIndex !== this.state.genreFilterIndex) {
      this.setState({
        moviesLimit: CATALOG_MOVIES_PER_PAGE_LIMIT,
        genreFilterIndex: this.props.genreFilterIndex,
      });
    }
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

  _handleShowMoreClick() {
    this.setState((prevState) => {
      return {
        moviesLimit: prevState.moviesLimit + CATALOG_MOVIES_PER_PAGE_LIMIT,
      };
    });
  }

  render() {

    const {onMovieListItemClick} = this.props;
    const movies = this._getMovies();
    const currentMovies = movies.slice(0, this.state.moviesLimit);

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
          currentMovies.length < movies.length && <ShowMore onClick={this._handleShowMoreClick} />
        }
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
