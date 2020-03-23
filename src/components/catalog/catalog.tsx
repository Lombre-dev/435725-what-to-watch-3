import * as React from 'react';
import {connect} from 'react-redux';
import {getCatalogMoreMovies} from '../../redux/catalog/actions';
import {Operations} from '../../redux/catalog/operations';
import {getCatalogGenre, getCatalogGenres, getCatalogHasMoreMovies, getCatalogMovies} from '../../redux/catalog/selectors';
import GenreFilters from '../genre-filters/genre-filters';
import ShowMore from '../show-more/show-more';
import SmallMovieCards from '../small-movie-cards/small-movie-cards';
import {TMovie} from '../../types';

type TProps = {
  genre: string;
  genres: string[];
  movies: TMovie[];
  hasMoreMovies: boolean;
  onShowMore: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onMount: () => void;
};

class Catalog extends React.PureComponent<TProps> {

  public componentDidMount() {

    const {onMount} = this.props;

    onMount();
  }

  public render() {

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
        <GenreFilters
          genre={genre}
          genres={genres}
        />
        <SmallMovieCards
          movies={movies}
        />
        {
          hasMoreMovies && <ShowMore onClick={onShowMore} />
        }
      </section>
    );
  }

  public static defaultProps = {
    movies: [],
  }
}

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
    onMount: () => {
      dispatch(Operations.getCatalog());
    },
    onShowMore: () => {
      dispatch(getCatalogMoreMovies());
    },
  };
}

export {Catalog};
export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
