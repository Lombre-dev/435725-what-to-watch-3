function formatReview(source) {
  return Object.assign({}, source, {
    author: source.user.name,
    score: source.rating,
    text: source.comment,
    date: new Date(source.date).getTime(),
  });
}

function formatReviews(source) {
  return source.map((value) => formatReview(value));
}

export {formatReviews};
