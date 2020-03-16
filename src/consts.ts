const ALL_GENRE = `All genres`;
const COMEDY_GENRE = `Comedy`;
const CRIME_GENRE = `Crime`;
const DOCUMENTARY_GENRE = `Documentary`;
const DRAMA_GENRE = `Drama`;
const HORROR_GENRE = `Horror`;
const KIDS_AND_FAMILY_GENRE = `Kids & Family`;
const ROMANCE_GENRE = `Romance`;
const SCI_FI_GENRE = `Sci-Fi`;
const THRILLER_GENRE = `Thriller`;

const AppPages = {
  MAIN: `/`,
  LOGIN: `/login`,
  MY_LIST: `/mylist`,
  MOVIES: `/films`,
  PLAYER: `/player`,
};

const GENRES = [
  COMEDY_GENRE,
  CRIME_GENRE,
  DOCUMENTARY_GENRE,
  DRAMA_GENRE,
  HORROR_GENRE,
  KIDS_AND_FAMILY_GENRE,
  ROMANCE_GENRE,
  SCI_FI_GENRE,
  THRILLER_GENRE,
];
const GENRES_CATALOG_LIMIT = 9;

const GenreLabels = {
  [COMEDY_GENRE]: `Comedies`,
  [DRAMA_GENRE]: `Dramas`,
  [THRILLER_GENRE]: `Thrillers`,
};

const MORE_LIKE_THIS_MOVIES_LIMIT = 4;
const CATALOG_MOVIES_PER_PAGE_LIMIT = 8;

const SMALL_MOVIE_CARD_PREVIEW_DELAY = 1000;

const MOVIE_INFO_TABS = [
  `Overview`,
  `Details`,
  `Reviews`,
];

enum PlayerState {
  INITED = `inited`,
  LOADING = `loading`,
  PLAYING = `playing`,
  PAUSED = `paused`,
  ENDED = `ended`,
};

const ServerConfig = {
  URL: `https://htmlacademy-react-3.appspot.com/wtw`,
  RESPONSE_TIMEOUT: 5000,
  USE_COOKIES: true,
};
enum ServerErrors {
  NOT_FOUND = 404,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
};

enum AuthorizationErrorCode {
  INCORRECT_LOGIN = 1,
  AUTHORIZATION_FAIL = 2,
};

const AuthorizationErrorMessage = {
  [AuthorizationErrorCode.INCORRECT_LOGIN]: `Please enter a valid email address`,
  [AuthorizationErrorCode.AUTHORIZATION_FAIL]: `We can’t recognize this email and password combination. Please try again.`,
};

enum AuthorizationStatus {
  NO_AUTH = `unauthorized`,
  AUTH = `authorized`,
};

const REVIEW_RATING_STARS_LIMIT = 5;
const REVIEW_COMMENT_MIN_LENGTH = 50;
const REVIEW_COMMENT_MAX_LENGTH = 400;

enum LoadingDataStatus {
  LOADING = `loading`,
  READY = `ready`,
  ERROR = `error`,
}
