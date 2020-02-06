/* eslint-disable react/prop-types */

import React from 'react';

const Main = (props) => {

  const {
    title = `unknown`,
    genre = `unknown`,
    year = `unknown`,
  } = props;

  return (
    <>
      <h1>Main</h1>
      <p>Film: {title}</p>
      <p>Genre: {genre}</p>
      <p>Year: {year}</p>
    </>
  );
};

export default Main;
