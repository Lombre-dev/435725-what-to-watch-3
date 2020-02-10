/* eslint-disable react/prop-types */
import React from 'react';
import Main from '../main/main.jsx';

const App = (props) => {

  const {currentMovie, movieList} = props;

  return (
    <Main currentMovie={currentMovie} movieList={movieList} />
  );
};

export default App;
