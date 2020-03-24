import {TReview, TReviewData} from '../../types';

function formatReview(reviewData: TReviewData): TReview {
  return {
    id: reviewData.id,
    author: reviewData.user.name,
    score: reviewData.rating,
    text: reviewData.comment,
    date: new Date(reviewData.date).getTime(),
  };
}

function formatReviews(reviewsData: TReviewData[]): TReview[] {
  return reviewsData.map((value) => formatReview(value));
}

export {formatReviews};
