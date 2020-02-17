import PropTypes from 'prop-types';
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from '../main/main';
import MovieDetailInfo from '../movie-detail-info/movie-detail-info';
import {Movie} from '../types';

const App = ({currentMovie, movies}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main
            currentMovie={currentMovie}
            movies={movies}
            onMovieCardTitleClick={handleMovieCardTitleClick}
          />
        </Route>
        <Route exact path="/dev-movie-detail-info">
          <MovieDetailInfo
            movie={currentMovie}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

const handleMovieCardTitleClick = () => {
};

App.propTypes = {
  currentMovie: Movie.isRequired,
  movies: PropTypes.arrayOf(Movie),
};

export default App;
