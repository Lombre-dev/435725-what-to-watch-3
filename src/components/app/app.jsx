/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import Main from '../main/main.jsx';

const App = (props) => {
  return (
    <Main currentMovie={props.currentMovie} />
  );
};

export default App;
