export type TReview = {
  id: number;
  author: string;
  score: number;
  text: string;
  date: number;
}

export type TReviewData = {
  id: number;
  user: {
    id: number;
    name: string;
  };
  rating: number;
  comment: string;
  date: string;
};

export type TMovie = {
  id: number;
  title: string;
  genres: string[];
  year: number;
  poster?: string;
  frames: string[];
  preview: string;
  src: string;
  ratingScore: number;
  ratingReviewsCount: number;
  description?: string;
  story?: string;
  duration: number;
  director: string;
  actors: string[];
  backgroundImage?: string;
  backgroundColor?: string;
  isFavorite?: boolean;
}

export type TMovieData = {
  id: number;
  name: string;
  poster_image: string;
  preview_image: string;
  background_image: string;
  background_color: string;
  video_link: string;
  preview_video_link: string;
  description: string;
  rating: number;
  scores_count: number;
  director: string;
  starring: string[];
  run_time: number;
  genre: string;
  released: number;
  is_favorite: boolean;
};

export type TUser = {
  id?: number;
  name?: string;
  email?: string;
  avatar?: string;
  authRequired?: boolean;
  authError?: number;
  authStatus?: AuthorizationStatus;
  favoriteMovies?: [];
}

export type TUserData = {
  id: number;
  email: string;
  name: string;
  avatar_url: string;
}

export type TMatchParamsWithId = {
  params: {
    id: string;
  };
}

export enum AppPages {
  MAIN = `/`,
  LOGIN = `/login`,
  MY_LIST = `/mylist`,
  MOVIES = `/films`,
  PLAYER = `/player`,
}

export enum PlayerState {
  INITED = `inited`,
  LOADING = `loading`,
  PLAYING = `playing`,
  PAUSED = `paused`,
  ENDED = `ended`,
}

export enum ServerErrors {
  NOT_FOUND = 404,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
}

export enum AuthorizationErrorCode {
  INCORRECT_LOGIN = 1,
  AUTHORIZATION_FAIL = 2,
}

export enum AuthorizationStatus {
  NO_AUTH = `unauthorized`,
  AUTH = `authorized`,
}

export enum LoadingDataStatus {
  LOADING = `loading`,
  READY = `ready`,
  ERROR = `error`,
}
