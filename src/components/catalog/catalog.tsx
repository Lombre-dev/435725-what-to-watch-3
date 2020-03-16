import * as React from 'react';
import {connect} from 'react-redux';
import {getCatalogMoreMovies} from '../../redux/catalog/actions';
import {Operations} from '../../redux/catalog/operations';
import {getCatalogGenre, getCatalogGenres, getCatalogHasMoreMovies, getCatalogMovies} from '../../redux/catalog/selectors';
import GenreFilterList from '../genre-filter-list/genre-filter-list';
import ShowMore from '../show-more/show-more';
import SmallMovieCardList from '../small-movie-card-list';
import {TMovie} from '../types';

type TCatalogProps = {
  genres: string[];
  genre: string;
  movies: TMovie[];
  hasMoreMovies: boolean;
  onShowMore?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

  onMount?: Function;
};

class Catalog extends React.PureComponent<TCatalogProps> {

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

  public static defaultProps = {
    movies: [],
  }
}

function mapStateToProps(state: Record<string, any>) {
  return {
    genres: getCatalogGenres(state),
    genre: getCatalogGenre(state),
    movies: getCatalogMovies(state),
    hasMoreMovies: getCatalogHasMoreMovies(state),
  };
}

function mapDispatchToProps(dispatch: Function) {
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
