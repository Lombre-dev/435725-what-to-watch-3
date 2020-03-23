import {TReview, TReviewData} from '../../types';

function formatReview(source: TReviewData): TReview {
  return {
    id: source.id,
    author: source.user.name,
    score: source.rating,
    text: source.comment,
    date: new Date(source.date).getTime(),
  };
}

function formatReviews(source: TReviewData[]): TReview[] {
  return source.map((value) => formatReview(value));
}

export {formatReviews};
