import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

export const Settings = {
  GENRES: [`Comedy`, `Crime`, `Documentary`, `Drama`, `Horror`, `Kids & Family`, `Romance`, `Sci-Fi`, `Thriller`],
};

const Data = {
  CURRENT_MOVIE: {
    title: `The Grand Budapest Hotel`, genre: `Drama`, year: 2014, posterUrl: `img/the-grand-budapest-hotel-poster.jpg`
  },
  /* module2-task1 >>>
  MOVIE_LIST: [
    // {title: `The Grand Budapest Hotel`, genre: `Drama`, year: 2014, posterUrl: `img/the-grand-budapest-hotel-poster.jpg`},
    {title: `Fantastic Beasts: The Crimes of Grindelwal`, genre: `Drama`, year: 2014, posterUrl: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`},
    {title: `Bohemian Rhapsody`, genre: `Drama`, year: 2014, posterUrl: `img/bohemian-rhapsody.jpg`},
    {title: `Macbeth`, genre: `Drama`, year: 2014, posterUrl: `img/macbeth.jpg`},
    {title: `Aviator`, genre: `Drama`, year: 2014, posterUrl: `img/aviator.jpg`},
    {title: `We need to talk about Kevin`, genre: `Drama`, year: 2014, posterUrl: `img/we-need-to-talk-about-kevin.jpg`},
    {title: `What We Do in the Shadows`, genre: `Drama`, year: 2014, posterUrl: `img/what-we-do-in-the-shadows.jpg`},
    {title: `Revenant`, genre: `Drama`, year: 2014, posterUrl: `img/revenant.jpg`},
    {title: `Johnny English`, genre: `Drama`, year: 2014, posterUrl: `img/johnny-english.jpg`},
    {title: `Shutter Island`, genre: `Drama`, year: 2014, posterUrl: `img/shutter-island.jpg`},
    {title: `Pulp Fiction`, genre: `Drama`, year: 2014, posterUrl: `img/pulp-fiction.jpg`},
    {title: `No Country for Old Men`, genre: `Drama`, year: 2014, posterUrl: `img/no-country-for-old-men.jpg`},
    {title: `Snatch`, genre: `Drama`, year: 2014, posterUrl: `img/snatch.jpg`},
    {title: `Moonrise Kingdom`, genre: `Drama`, year: 2014, posterUrl: `img/moonrise-kingdom.jpg`},
    {title: `Seven Years in Tibet`, genre: `Drama`, year: 2014, posterUrl: `img/seven-years-in-tibet.jpg`},
    {title: `Midnight Special`, genre: `Drama`, year: 2014, posterUrl: `img/midnight-special.jpg`},
    {title: `War of the Worlds`, genre: `Drama`, year: 2014, posterUrl: `img/war-of-the-worlds.jpg`},
    {title: `Dardjeeling Limited`, genre: `Drama`, year: 2014, posterUrl: `img/dardjeeling-limited.jpg`},
    {title: `Orlando`, genre: `Drama`, year: 2014, posterUrl: `img/orlando.jpg`},
    {title: `Mindhunter`, genre: `Drama`, year: 2014, posterUrl: `img/mindhunter.jpg`},
    {title: `Midnight Special`, genre: `Drama`, year: 2014, posterUrl: `img/midnight-special.jpg`},
  ],
  module2-task1 <<< */
};

ReactDOM.render(<App currentMovie={Data.CURRENT_MOVIE} /* movieList={Data.MOVIE_LIST} */ />, document.getElementById(`root`));
