import * as React from 'react';
import {connect} from 'react-redux';
import {Operations} from '../../redux/user/operations';
import {getUserFavoriteMovies} from '../../redux/user/selectors';
import Footer from '../footer/footer';
import Logo from '../logo/logo';
import SmallMovieCardList from '../small-movie-card-list';
import {TMovie} from '../types';
import {UserBlock} from '../user-block/user-block';

type TMyListPageProps = {
  movies?: TMovie[];
  onMount?: Function;
};

class MyListPage extends React.PureComponent<TMyListPageProps> {

  public componentDidMount() {

    const {onMount} = this.props;

    onMount();
  }

  public render() {

    const {movies} = this.props;

    return (
      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo />
          <h1 className="page-title user-page__title">My list</h1>
          <UserBlock />
        </header>
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <SmallMovieCardList
            movies={movies}
          />
        </section>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: getUserFavoriteMovies(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onMount: () => {
      dispatch(Operations.getFavoriteMovies());
    },
  };
}

export {MyListPage};
export default connect(mapStateToProps, mapDispatchToProps)(MyListPage);
