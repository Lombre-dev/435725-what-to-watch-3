import PropTypes from 'prop-types';
import React from 'react';
import Main from '../main/main';
import {Movie} from '../types';

const App = ({currentMovie, movies}) => {
  return (
    <Main
      currentMovie={currentMovie}
      movies={movies}
      onMovieCardTitleClick={handleMovieCardTitleClick}
    />
  );
};

const handleMovieCardTitleClick = () => {
};

App.propTypes = {
  currentMovie: Movie.isRequired,
  movies: PropTypes.arrayOf(Movie),
};

export default App;
