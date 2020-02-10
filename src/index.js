import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const Data = {
  CURRENT_MOVIE: {
    title: `The Grand Budapest Hotel`, genre: `Drama`, year: 2014, posterUrl: `img/the-grand-budapest-hotel-poster.jpg`
  },
  MOVIE_LIST: [
    /* {
      title: `The Grand Budapest Hotel`,
      genre: `Drama`, year: 2014,
      framesUrl: `img/the-grand-budapest-hotel.jpg`,
      posterUrl: `img/the-grand-budapest-hotel-poster.jpg`
    }, */
    {title: `Fantastic Beasts: The Crimes of Grindelwal`, genre: `Drama`, year: 2014, framesUrl: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`},
    {title: `Bohemian Rhapsody`, genre: `Drama`, year: 2014, framesUrl: `img/bohemian-rhapsody.jpg`},
    {title: `Macbeth`, genre: `Drama`, year: 2014, framesUrl: `img/macbeth.jpg`},
    {title: `Aviator`, genre: `Drama`, year: 2014, framesUrl: `img/aviator.jpg`},
    {title: `We need to talk about Kevin`, genre: `Drama`, year: 2014, framesUrl: `img/we-need-to-talk-about-kevin.jpg`},
    {title: `What We Do in the Shadows`, genre: `Drama`, year: 2014, framesUrl: `img/what-we-do-in-the-shadows.jpg`},
    {title: `Revenant`, genre: `Drama`, year: 2014, framesUrl: `img/revenant.jpg`},
    {title: `Johnny English`, genre: `Drama`, year: 2014, framesUrl: `img/johnny-english.jpg`},
    {title: `Shutter Island`, genre: `Drama`, year: 2014, framesUrl: `img/shutter-island.jpg`},
    {title: `Pulp Fiction`, genre: `Drama`, year: 2014, framesUrl: `img/pulp-fiction.jpg`},
    {title: `No Country for Old Men`, genre: `Drama`, year: 2014, framesUrl: `img/no-country-for-old-men.jpg`},
    {title: `Snatch`, genre: `Drama`, year: 2014, framesUrl: `img/snatch.jpg`},
    {title: `Moonrise Kingdom`, genre: `Drama`, year: 2014, framesUrl: `img/moonrise-kingdom.jpg`},
    {title: `Seven Years in Tibet`, genre: `Drama`, year: 2014, framesUrl: `img/seven-years-in-tibet.jpg`},
    {title: `Midnight Special`, genre: `Drama`, year: 2014, framesUrl: `img/midnight-special.jpg`},
    {title: `War of the Worlds`, genre: `Drama`, year: 2014, framesUrl: `img/war-of-the-worlds.jpg`},
    {title: `Dardjeeling Limited`, genre: `Drama`, year: 2014, framesUrl: `img/dardjeeling-limited.jpg`},
    {title: `Orlando`, genre: `Drama`, year: 2014, framesUrl: `img/orlando.jpg`},
    {title: `Mindhunter`, genre: `Drama`, year: 2014, framesUrl: `img/mindhunter.jpg`},
    {title: `Midnight Special`, genre: `Drama`, year: 2014, framesUrl: `img/midnight-special.jpg`},
  ],
};

// test >>>
// shuffle
Data.MOVIE_LIST.forEach(() => {
  Data.MOVIE_LIST.splice(Math.floor(Math.random() * Data.MOVIE_LIST.length), 0, Data.MOVIE_LIST.shift());
});
// test <<<

ReactDOM.render(<App currentMovie={Data.CURRENT_MOVIE} movieList={Data.MOVIE_LIST} />, document.getElementById(`root`));
