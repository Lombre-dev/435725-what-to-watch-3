import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {getMoreCatalogMovies} from '../../redux/catalog/actions';
import {getCurrentGenre, getGenres, getHasMoreMovies, getMovies} from '../../redux/catalog/selectors';
import GenreFilterList from '../genre-filter-list/genre-filter-list';
import ShowMore from '../show-more/show-more';
import SmallMovieCardList from '../small-movie-card-list';
import {Movie} from '../types';

class MovieCatalog extends React.PureComponent {

  render() {

    const {
      genres,
      currentGenre,
      movies,
      hasMoreMovies,
      onShowMore
    } = this.props;

    return (
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <GenreFilterList
          genres={genres}
          currentGenre={currentGenre}
        />
        <SmallMovieCardList
          movies={movies}
        />
        {hasMoreMovies && <ShowMore onClick={onShowMore} />}
      </section>
    );
  }

}

MovieCatalog.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentGenre: PropTypes.string.isRequired,
  movies: PropTypes.arrayOf(Movie),
  hasMoreMovies: PropTypes.bool.isRequired,
  onShowMore: PropTypes.func.isRequired,
};

MovieCatalog.defaultProps = {
  movies: [],
};

function mapStateToProps(state) {
  return {
    genres: getGenres(state),
    currentGenre: getCurrentGenre(state),
    movies: getMovies(state),
    hasMoreMovies: getHasMoreMovies(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onShowMore: () => {
      dispatch(getMoreCatalogMovies());
    },
  };
}

export {MovieCatalog};
export default connect(mapStateToProps, mapDispatchToProps)(MovieCatalog);
