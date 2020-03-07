function formatMovie(source) {
  return Object.assign({}, source, {
    title: source.name,
    genres: [source.genre],
    year: source.released,
    poster: source.poster_image,
    frames: [source.preview_image],
    preview: source.preview_video_link,
    src: source.video_link,
    ratingScore: source.rating,
    ratingReviewsCount: source.scores_count,
    story: source.description, // ?
    actors: source.starring,
    duration: source.run_time,
    backgroundImage: source.background_image,
    backgroundColor: source.background_color,
    reviews: [],
  });
}

export {formatMovie};
