import {AuthorizationStatus} from '../consts'

export type TReview = {
  id: number,
  author: string,
  score: number,
  text: string,
  date: number,
}

export type TMovie = {
  id: number,
  title: string,
  genres: string[],
  year: number,
  poster?: string,
  frames: string[],
  preview: string,
  src: string,
  ratingScore: number,
  ratingReviewsCount: number,
  description?: string,
  story?: string,
  duration: number,
  director: string,
  actors: string[],
  backgroundImage?: string,
  backgroundColor?: string,
  isFavorite?: boolean,
}

export type TUser = {
  id?: number,
  name?: string,
  email?: string,
  avatar?: string,
  authRequired?: boolean,
  authError?: number,
  authStatus?: AuthorizationStatus,
  favoriteMovies?: [],
}

export type TMatchParamsWithId = {
  params: {
    id: string;
  }
}
