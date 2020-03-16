type TReview = {
  id: number,
  author: string,
  score: number,
  text: string,
  date: number,
}

type TMovie = {
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
  director: number,
  actors: string[],
  backgroundImage?: string,
  backgroundColor?: string,
  isFavorite?: boolean,
}

type TMatchParamsWithId = {
  params: {
    id: string;
  }
}
