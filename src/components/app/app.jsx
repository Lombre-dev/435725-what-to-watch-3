import React from 'react';
import {Movie, MovieList} from '../main/main-types.js';
import Main from '../main/main.jsx';

const App = ({currentMovie, movieList}) => {
  return (
    <Main currentMovie={currentMovie} movieList={movieList} />
  );
};

App.propTypes = {
  currentMovie: Movie.isRequired,
  movieList: MovieList,
};

export default App;
