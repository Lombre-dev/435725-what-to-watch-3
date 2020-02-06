/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import Main from '../main/main.jsx';

const App = (props) => {
  return (
    <Main title={props.film.title} genre={props.film.genre} year={props.film.year} />
  );
};

export default App;
