import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {getCatalogMoreMovies} from '../../redux/catalog/actions';
import {Operations} from '../../redux/catalog/operations';
import {getCatalogGenre, getCatalogGenres, getCatalogHasMoreMovies, getCatalogMovies} from '../../redux/catalog/selectors';
import GenreFilterList from '../genre-filter-list/genre-filter-list';
import ShowMore from '../show-more/show-more';
import SmallMovieCardList from '../small-movie-card-list';
import {Movie} from '../types';

class MovieCatalog extends React.PureComponent {

  componentDidMount() {

    const {init} = this.props;

    init();
  }

  render() {

    const {
      genres,
      genre,
      movies,
      hasMoreMovies,
      onShowMore
    } = this.props;

    return (
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <GenreFilterList
          genre={genre}
          genres={genres}
        />
        <SmallMovieCardList
          movies={movies}
        />
        {
          hasMoreMovies && <ShowMore onClick={onShowMore} />
        }
      </section>
    );
  }

}

MovieCatalog.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  genre: PropTypes.string.isRequired,
  movies: PropTypes.arrayOf(Movie),
  hasMoreMovies: PropTypes.bool.isRequired,
  onShowMore: PropTypes.func.isRequired,
  init: PropTypes.func,
};

MovieCatalog.defaultProps = {
  movies: [],
};

function mapStateToProps(state) {
  return {
    genres: getCatalogGenres(state),
    genre: getCatalogGenre(state),
    movies: getCatalogMovies(state),
    hasMoreMovies: getCatalogHasMoreMovies(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    init: () => {
      dispatch(Operations.getCatalog());
    },

    onShowMore: () => {
      dispatch(getCatalogMoreMovies());
    },
  };
}

export {MovieCatalog};
export default connect(mapStateToProps, mapDispatchToProps)(MovieCatalog);
