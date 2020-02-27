import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer';
import GenreFilter from '../genre-filter/genre-filter';
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
        <GenreFilter
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
    genres: state.catalogGenres,
    currentGenre: state.catalogGenre,
    movies: state.catalogMovies,
    hasMoreMovies: state.hasMoreCatalogMovies,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onShowMore: () => {
      dispatch(ActionCreator.getMoreCatalogMovies());
    },
  };
}

export {MovieCatalog};
export default connect(mapStateToProps, mapDispatchToProps)(MovieCatalog);
