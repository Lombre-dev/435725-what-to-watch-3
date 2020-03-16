import {TReview} from '../../components/types';

function formatReview(source: any): TReview {
  return Object.assign({}, source, {
    author: source.user.name,
    score: source.rating,
    text: source.comment,
    date: new Date(source.date).getTime(),
  });
}

function formatReviews(source: any[]): TReview[] {
  return source.map((value) => formatReview(value));
}

export {formatReviews};
