import PropTypes from 'prop-types';
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from '../main/main';
import MovieDetailInfo from '../movie-detail-info/movie-detail-info';
import {Movie} from '../types';

export default class App extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      detailInfoMovie: undefined,
    };

    this._handleMovieListItemClick = this._handleMovieListItemClick.bind(this);
  }

  _handleMovieListItemClick({movie}) {
    this.setState(() => {
      return {
        detailInfoMovie: movie,
      };
    });
  }

  _renderState() {

    const {detailInfoMovie} = this.state;
    const {currentMovie, movies} = this.props;

    if (detailInfoMovie) {
      return (
        <MovieDetailInfo
          movie={detailInfoMovie}
        />
      );
    }

    return (
      <Main
        currentMovie={currentMovie}
        movies={movies}
        onMovieListItemClick={this._handleMovieListItemClick}
      />
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
            <MovieDetailInfo
              movie={movies[0]}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  currentMovie: Movie.isRequired,
  movies: PropTypes.arrayOf(Movie),
};
