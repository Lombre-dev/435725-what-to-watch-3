
const SAMPLES = [
  `http://mirrors.standaloneinstaller.com/video-sample/lion-sample.mp4`,
  `http://mirrors.standaloneinstaller.com/video-sample/jellyfish-25-mbps-hd-hevc.mp4`,
  `http://mirrors.standaloneinstaller.com/video-sample/page18-movie-4.mp4`,
];

export const MOVIES = [
  {
    title: `The Grand Budapest Hotel`,
    genres: [`Drama`, `Comedy`, `Kids & Family`],
    year: 2014,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    frames: [`img/the-grand-budapest-hotel-poster.jpg`],
    ratingScore: 8.9,
    ratingReviewsCount: 240,
    preview: `./samples/sintel_trailer-480p.mp4`,
    src: `./samples/sintel_trailer-480p.mp4`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    story: `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
    director: `Wes Andreson`,
    duration: 99,
    actors: [
      `Bill Murray`,
      `Edward Norton`,
      `Jude Law`,
      `Willem Dafoe`,
      `Some Actor 1`,
      `Some Actor 2`,
    ],
    reviews: [
      {
        author: `Some Reviewer`,
        score: 8.2,
        text: `Awesome text for The Grand Budapest Hotel...`,
        date: 1582590140667,
      }
    ]
  },
  {
    title: `Fantastic Beasts: The Crimes of Grindelwal`,
    genres: [`Drama`, `Comedy`, `Sci-Fi`],
    year: 2014,
    poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    frames: [`img/fantastic-beasts-the-crimes-of-grindelwald.jpg`],
  },
  {
    title: `Bohemian Rhapsody`,
    genres: [`Documentary`, `Kids & Family`, `Romance`],
    year: 2014,
    poster: `img/bohemian-rhapsody.jpg`,
    frames: [`img/bohemian-rhapsody.jpg`],
  },
  {
    title: `Macbeth`,
    genres: [`Drama`, `Horror`, `Crime`],
    year: 2014,
    poster: `img/macbeth.jpg`,
    frames: [`img/macbeth.jpg`],
  },
  {
    title: `Aviator`,
    genres: [`Drama`, `Thriller`, `Comedy`],
    year: 2014,
    poster: `img/aviator.jpg`,
    frames: [`img/aviator.jpg`],
  },
  {
    title: `We need to talk about Kevin`,
    genres: [`Drama`, `Sci-Fi`],
    year: 2014,
    poster: `img/we-need-to-talk-about-kevin.jpg`,
    frames: [`img/we-need-to-talk-about-kevin.jpg`],
  },
  {
    title: `What We Do in the Shadows`,
    genres: [`Drama`, `Kids & Family`],
    year: 2014,
    poster: `img/what-we-do-in-the-shadows.jpg`,
    frames: [`img/what-we-do-in-the-shadows.jpg`],
  },
  {
    title: `Revenant`,
    genres: [`Drama`, `Documentary`],
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
    genres: [`Drama`, `Horror`, `Thriller`],
    year: 2014,
    poster: `img/shutter-island.jpg`,
    frames: [`img/shutter-island.jpg`],
  },
  {
    title: `Pulp Fiction`,
    genres: [`Comedy`, `Kids & Family`, `Documentary`],
    year: 2014,
    poster: `img/pulp-fiction.jpg`,
    frames: [`img/pulp-fiction.jpg`],
  },
  {
    title: `No Country for Old Men`,
    genres: [`Drama`, `Horror`],
    year: 2014,
    poster: `img/no-country-for-old-men.jpg`,
    frames: [`img/no-country-for-old-men.jpg`],
  },
  {
    title: `Snatch`,
    genres: [`Drama`, `Comedy`],
    year: 2014,
    poster: `img/snatch.jpg`,
    frames: [`img/snatch.jpg`],
  },
  {
    title: `Moonrise Kingdom`,
    genres: [`Romance`],
    year: 2014,
    poster: `img/moonrise-kingdom.jpg`,
    frames: [`img/moonrise-kingdom.jpg`],
  },
  {
    title: `Seven Years in Tibet`,
    genres: [`Kids & Family`],
    year: 2014,
    poster: `img/seven-years-in-tibet.jpg`,
    frames: [`img/seven-years-in-tibet.jpg`],
  },
  {
    title: `Midnight Special`,
    genres: [`Sci-Fi`, `Horror`],
    year: 2014,
    poster: `img/midnight-special.jpg`,
    frames: [`img/midnight-special.jpg`],
  },
  {
    title: `War of the Worlds`,
    genres: [`Kids & Family`, `Sci-Fi`],
    year: 2014,
    poster: `img/war-of-the-worlds.jpg`,
    frames: [`img/war-of-the-worlds.jpg`],
  },
  {
    title: `Dardjeeling Limited`,
    genres: [`Drama`, `Thriller`],
    year: 2014,
    poster: `img/dardjeeling-limited.jpg`,
    frames: [`img/dardjeeling-limited.jpg`],
  },
  {
    title: `Orlando`,
    genres: [`Comedy`],
    year: 2014,
    poster: `img/orlando.jpg`,
    frames: [`img/orlando.jpg`],
  },
  {
    title: `Mindhunter`,
    genres: [`Thriller`],
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
  const reviews = [];
  const reviewsCount = Math.ceil(Math.random() * 10);

  for (let i = 0; i < actorsCount; i += 1) {
    actors.push(`Some Actor ${i + 1}`);
  }

  for (let i = 0; i < reviewsCount; i += 1) {
    reviews.push({
      author: `Reviewer ${i}`,
      score: getRandomScore(),
      text: `Awesome review text for movie "${value.title}"`,
      date: getRandomDate(946684800000),
    });
  }

  Object.assign(value, {
    ratingScore: getRandomScore(),
    ratingReviewsCount: Math.round(Math.random() * 100),
    reviews,
    preview: getRandomSample(), // `./samples/sintel_trailer-480p.mp4`,
    src: getRandomSample(), // `./samples/sintel_trailer-480p.mp4`,
    description: `Description for ${value.title}`,
    story: `Story for ${value.title}`,
    director: `Director ${index + 1}`,
    actors,
    duration: 60 + Math.round(Math.random() * 60),
  });
});

function getRandomScore() {
  return Math.round(Math.random() * 100) / 10;
}

function getRandomDate(fromTimestamp = 0) {
  return new Date(fromTimestamp + Math.floor(Math.random() * (Date.now() - fromTimestamp))).getTime();
}

function getRandomSample() {
  return SAMPLES[Math.floor(Math.random() * SAMPLES.length)];
}
