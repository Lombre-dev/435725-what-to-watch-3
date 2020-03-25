import {AuthorizationErrorCode} from './types';

export const Genres = {
  ALL: `All genres`,
  COMEDY: `Comedy`,
  DRAMA: `Drama`,
  THRILLER: `Thriller`,
};

export const GENRES_CATALOG_LIMIT = 9;

export const GenreLabels = {
  [Genres.COMEDY]: `Comedies`,
  [Genres.DRAMA]: `Dramas`,
  [Genres.THRILLER]: `Thrillers`,
};

export const MORE_LIKE_THIS_MOVIES_LIMIT = 4;
export const CATALOG_MOVIES_PER_PAGE_LIMIT = 8;

export const SMALL_MOVIE_CARD_PREVIEW_DELAY = 1000;

export const MOVIE_INFO_TABS = [
  `Overview`,
  `Details`,
  `Reviews`,
];

export const ServerConfig = {
  URL: `https://htmlacademy-react-3.appspot.com/wtw`,
  RESPONSE_TIMEOUT: 5000,
  USE_COOKIES: true,
};

export const AuthorizationErrorMessage = {
  [AuthorizationErrorCode.INCORRECT_LOGIN]: `Please enter a valid email address`,
  [AuthorizationErrorCode.AUTHORIZATION_FAIL]: `We can’t recognize this email and password combination. Please try again.`,
};

export const ReviewFormConfig = {
  RATING_STARS_LIMIT: 5,
  COMMENT_MIN_LENGTH: 50,
  COMMENT_MAX_LENGTH: 400,
};


