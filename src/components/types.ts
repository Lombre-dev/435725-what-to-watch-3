import {AuthorizationStatus} from '../consts';

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
  rating: number
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
  id: number,
  email: string;
  name: string;
  avatar_url: string;
}

export type TMatchParamsWithId = {
  params: {
    id: string;
  }
}
