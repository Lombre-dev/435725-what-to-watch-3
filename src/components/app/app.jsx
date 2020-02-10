/* eslint-disable react/prop-types */
import React from 'react';
import Main from '../main/main.jsx';

const App = ({currentMovie}) => {
  return (
    <Main currentMovie={currentMovie} />
  );
};

export default App;
