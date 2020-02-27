import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {getMoviesByGenre} from '../../utils/movie-utils';
import Footer from '../footer/footer';
import Main from '../main/main';
import MoreLikeThis from '../more-like-this/more-like-this';
import MovieInfo from '../movie-info';
import {Movie} from '../types';

class App extends React.PureComponent {

  _renderState() {

    const {currentMovie, movies} = this.props;

    if (currentMovie) {
      return (
        <>
          <MovieInfo
            movie={currentMovie}
          />
          <div className="page-content">
            <MoreLikeThis
              movies={getMoviesByGenre(movies, currentMovie.genres[0], [currentMovie])}
            />
            <Footer />
          </div>
        </>
      );
    }

    return (
      <Main />
    );
  }

  render() {

    const {movies} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">{
            this._renderState()
          }</Route>
          <Route exact path="/dev-movie-detail-info">
            <MovieInfo
              movie={movies[0]}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  currentMovie: Movie,
  movies: PropTypes.arrayOf(Movie),
};

function mapStateToProps(state) {
  return {
    movies: state.catalogMovies,
    currentMovie: state.currentMovie,
  };
}

export {App};
export default connect(mapStateToProps)(App);
