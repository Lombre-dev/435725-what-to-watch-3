/* eslint-disable react/prop-types */
import React from 'react';
import Main from '../main/main.jsx';

const App = (props) => {
  return (
    <Main currentMovie={props.currentMovie} />
  );
};

export default App;
