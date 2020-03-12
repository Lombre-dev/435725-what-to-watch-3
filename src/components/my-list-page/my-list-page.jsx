import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {Operations} from '../../redux/user/operations';
import {getUserFavoriteMovies} from '../../redux/user/selectors';
import Footer from '../footer/footer';
import Logo from '../logo/logo';
import SmallMovieCardList from '../small-movie-card-list';
import {Movie} from '../types';
import {UserBlock} from '../user-block/user-block';

class MyListPage extends React.PureComponent {

  componentDidMount() {

    const {updateFavoriteMovies} = this.props;

    updateFavoriteMovies();
  }

  render() {

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

MyListPage.propTypes = {
  movies: PropTypes.arrayOf(Movie),
  updateFavoriteMovies: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    movies: getUserFavoriteMovies(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateFavoriteMovies: () => {
      dispatch(Operations.getFavoriteMovies());
    },
  };
}

export {MyListPage};
export default connect(mapStateToProps, mapDispatchToProps)(MyListPage);
