import React from 'react';
import {getRatingScore} from '../../utils/movie-utils';
import {Movie} from '../types';

class MovieInfoReviews extends React.PureComponent {

  render() {

    const {movie} = this.props;
    const {reviews} = movie;

    return (
      <div className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">
          {
            reviews.map((review) => {

              const date = new Date(review.date);

              return (
                <div key={review.date} className="review">
                  <blockquote className="review__quote">
                    <p className="review__text">{review.text}</p>

                    <footer className="review__details">
                      <cite className="review__author">{review.author}</cite>
                      <time className="review__date" dateTime={date.toISOString()}>{
                        date.toLocaleDateString(`en-US`, {month: `long`, day: `numeric`, year: `numeric`})
                      }</time>
                    </footer>
                  </blockquote>

                  <div className="review__rating">{getRatingScore(review.score)}</div>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

MovieInfoReviews.propTypes = {
  movie: Movie.isRequired,
};

export default MovieInfoReviews;
