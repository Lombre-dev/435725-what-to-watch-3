import React from 'react';
import Main from '../main/main';
import {Movie, MovieList} from '../types';

const App = ({currentMovie, movieList}) => {
  return (
    <Main
      currentMovie={currentMovie}
      movieList={movieList}
      onMovieCardTitleClick={handleMovieCardTitleClick}
    />
  );
};

const handleMovieCardTitleClick = () => {
};

App.propTypes = {
  currentMovie: Movie.isRequired,
  movieList: MovieList,
};

export default App;
