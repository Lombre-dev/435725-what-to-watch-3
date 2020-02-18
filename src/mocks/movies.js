
export const MOVIES = [
  {
    title: `The Grand Budapest Hotel`,
    genres: [`Drama`],
    year: 2014,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    frames: [`img/the-grand-budapest-hotel-poster.jpg`],
    ratingScore: 8.9,
    ratingReviewsCount: 240,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    story: `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
    director: `Wes Andreson`,
    actors: [
      `Bill Murray`,
      `Edward Norton`,
      `Jude Law`,
      `Willem Dafoe`,
      `Some Actor 1`,
      `Some Actor 2`,
    ],
  },
  {
    title: `Fantastic Beasts: The Crimes of Grindelwal`,
    genres: [`Drama`],
    year: 2014,
    poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    frames: [`img/fantastic-beasts-the-crimes-of-grindelwald.jpg`],
  },
  {
    title: `Bohemian Rhapsody`,
    genres: [`Drama`],
    year: 2014,
    poster: `img/bohemian-rhapsody.jpg`,
    frames: [`img/bohemian-rhapsody.jpg`],
  },
  {
    title: `Macbeth`,
    genres: [`Drama`],
    year: 2014,
    poster: `img/macbeth.jpg`,
    frames: [`img/macbeth.jpg`],
  },
  {
    title: `Aviator`,
    genres: [`Drama`],
    year: 2014,
    poster: `img/aviator.jpg`,
    frames: [`img/aviator.jpg`],
  },
  {
    title: `We need to talk about Kevin`,
    genres: [`Drama`],
    year: 2014,
    poster: `img/we-need-to-talk-about-kevin.jpg`,
    frames: [`img/we-need-to-talk-about-kevin.jpg`],
  },
  {
    title: `What We Do in the Shadows`,
    genres: [`Drama`],
    year: 2014,
    poster: `img/what-we-do-in-the-shadows.jpg`,
    frames: [`img/what-we-do-in-the-shadows.jpg`],
  },
  {
    title: `Revenant`,
    genres: [`Drama`],
    year: 2014,
    poster: `img/revenant.jpg`,
    frames: [`img/revenant.jpg`],
  },
  {
    title: `Johnny English`,
    genres: [`Drama`],
    year: 2014,
    poster: `img/johnny-english.jpg`,
    frames: [`img/johnny-english.jpg`],
  },
  {
    title: `Shutter Island`,
    genres: [`Drama`],
    year: 2014,
    poster: `img/shutter-island.jpg`,
    frames: [`img/shutter-island.jpg`],
  },
  {
    title: `Pulp Fiction`,
    genres: [`Drama`],
    year: 2014,
    poster: `img/pulp-fiction.jpg`,
    frames: [`img/pulp-fiction.jpg`],
  },
  {
    title: `No Country for Old Men`,
    genres: [`Drama`],
    year: 2014,
    poster: `img/no-country-for-old-men.jpg`,
    frames: [`img/no-country-for-old-men.jpg`],
  },
  {
    title: `Snatch`,
    genres: [`Drama`],
    year: 2014,
    poster: `img/snatch.jpg`,
    frames: [`img/snatch.jpg`],
  },
  {
    title: `Moonrise Kingdom`,
    genres: [`Drama`],
    year: 2014,
    poster: `img/moonrise-kingdom.jpg`,
    frames: [`img/moonrise-kingdom.jpg`],
  },
  {
    title: `Seven Years in Tibet`,
    genres: [`Drama`],
    year: 2014,
    poster: `img/seven-years-in-tibet.jpg`,
    frames: [`img/seven-years-in-tibet.jpg`],
  },
  {
    title: `Midnight Special`,
    genres: [`Drama`],
    year: 2014,
    poster: `img/midnight-special.jpg`,
    frames: [`img/midnight-special.jpg`],
  },
  {
    title: `War of the Worlds`,
    genres: [`Drama`],
    year: 2014,
    poster: `img/war-of-the-worlds.jpg`,
    frames: [`img/war-of-the-worlds.jpg`],
  },
  {
    title: `Dardjeeling Limited`,
    genres: [`Drama`],
    year: 2014,
    poster: `img/dardjeeling-limited.jpg`,
    frames: [`img/dardjeeling-limited.jpg`],
  },
  {
    title: `Orlando`,
    genres: [`Drama`],
    year: 2014,
    poster: `img/orlando.jpg`,
    frames: [`img/orlando.jpg`],
  },
  {
    title: `Mindhunter`,
    genres: [`Drama`],
    year: 2014,
    poster: `img/mindhunter.jpg`,
    frames: [`img/mindhunter.jpg`],
  },
];

MOVIES.forEach((value, index) => {

  if (value.ratingScore) {
    return;
  }

  const actors = [];
  const actorsCount = Math.ceil(Math.random() * 10);

  for (let i = 0; i < actorsCount; i += 1) {
    actors.push(`Some Actor ${i + 1}`);
  }

  Object.assign(value, {
    ratingScore: Math.round(Math.random() * 100) / 10,
    ratingReviewsCount: Math.round(Math.random() * 100),
    description: `Description for ${value.title}`,
    story: `Story for ${value.title}`,
    director: `Director ${index + 1}`,
    actors,
  });
});
