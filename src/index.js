import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

export const Settings = {
  GENRES: [`Comedy`, `Crime`, `Documentary`, `Drama`, `Horror`, `Kids & Family`, `Romance`, `Sci-Fi`, `Thriller`],
};

const Data = {
  CURRENT_MOVIE: {
    title: `The Grand Budapest Hotel`, genre: `Drama`, year: 2014, posterUrl: `img/the-grand-budapest-hotel-poster.jpg`
  }
};

ReactDOM.render(<App currentMovie={Data.CURRENT_MOVIE} />, document.getElementById(`root`));
