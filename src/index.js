import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const Data = {
  CURRENT_MOVIE: {
    title: `The Grand Budapest Hotel`, genres: [`Drama`], year: 2014,
    posterUrl: `img/the-grand-budapest-hotel-poster.jpg`,
  },
  MOVIE_LIST: [
    /* {
      title: `The Grand Budapest Hotel`,
      genres: [`Drama`], year: 2014,
      framesUrl: [`img/the-grand-budapest-hotel.jpg`],
      posterUrl: `img/the-grand-budapest-hotel-poster.jpg`
    }, */
    {
      title: `Fantastic Beasts: The Crimes of Grindelwal`, genres: [`Drama`], year: 2014,
      framesUrl: [`img/fantastic-beasts-the-crimes-of-grindelwald.jpg`]
    },
    {
      title: `Bohemian Rhapsody`, genres: [`Drama`], year: 2014,
      framesUrl: [`img/bohemian-rhapsody.jpg`]
    },
    {
      title: `Macbeth`, genres: [`Drama`], year: 2014,
      framesUrl: [`img/macbeth.jpg`]
    },
    {
      title: `Aviator`, genres: [`Drama`], year: 2014,
      framesUrl: [`img/aviator.jpg`]
    },
    {
      title: `We need to talk about Kevin`, genres: [`Drama`], year: 2014,
      framesUrl: [`img/we-need-to-talk-about-kevin.jpg`]
    },
    {
      title: `What We Do in the Shadows`, genres: [`Drama`], year: 2014,
      framesUrl: [`img/what-we-do-in-the-shadows.jpg`]
    },
    {
      title: `Revenant`, genres: [`Drama`], year: 2014,
      framesUrl: [`img/revenant.jpg`]
    },
    {
      title: `Johnny English`, genres: [`Drama`], year: 2014,
      framesUrl: [`img/johnny-english.jpg`]
    },
    {
      title: `Shutter Island`, genres: [`Drama`], year: 2014,
      framesUrl: [`img/shutter-island.jpg`]
    },
    {
      title: `Pulp Fiction`, genres: [`Drama`], year: 2014,
      framesUrl: [`img/pulp-fiction.jpg`]
    },
    {
      title: `No Country for Old Men`, genres: [`Drama`], year: 2014,
      framesUrl: [`img/no-country-for-old-men.jpg`]
    },
    {
      title: `Snatch`, genres: [`Drama`], year: 2014,
      framesUrl: [`img/snatch.jpg`]
    },
    {
      title: `Moonrise Kingdom`, genres: [`Drama`], year: 2014,
      framesUrl: [`img/moonrise-kingdom.jpg`]
    },
    {
      title: `Seven Years in Tibet`, genres: [`Drama`], year: 2014,
      framesUrl: [`img/seven-years-in-tibet.jpg`]
    },
    {
      title: `Midnight Special`, genres: [`Drama`], year: 2014,
      framesUrl: [`img/midnight-special.jpg`]
    },
    {
      title: `War of the Worlds`, genres: [`Drama`], year: 2014,
      framesUrl: [`img/war-of-the-worlds.jpg`]
    },
    {
      title: `Dardjeeling Limited`, genres: [`Drama`], year: 2014,
      framesUrl: [`img/dardjeeling-limited.jpg`]
    },
    {
      title: `Orlando`, genres: [`Drama`], year: 2014,
      framesUrl: [`img/orlando.jpg`]
    },
    {
      title: `Mindhunter`, genres: [`Drama`], year: 2014,
      framesUrl: [`img/mindhunter.jpg`]
    },
    {
      title: `Midnight Special`, genres: [`Drama`], year: 2014,
      framesUrl: [`img/midnight-special.jpg`]
    },
  ],
};

ReactDOM.render(<App currentMovie={Data.CURRENT_MOVIE} movieList={Data.MOVIE_LIST} />, document.getElementById(`root`));
