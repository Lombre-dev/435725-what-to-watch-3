import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {LoadingDataStatus} from '../../consts';
import {Operations} from '../../redux/movie/operations';
import {getDetailedMovieReviews, getDetailedMovieStatus} from '../../redux/movie/selectors';
import {getRatingScore} from '../../utils/movie-utils';
import LoadingDataBlock from '../loading-data-block/loading-data-block';
import {Movie, Review} from '../types';

class MovieInfoReviews extends React.PureComponent {

  componentDidMount() {

    const {getReviews, movie} = this.props;

    getReviews(movie.id);
  }

  componentDidUpdate(prevProps) {

    const {movie: prevMovie} = prevProps;
    const {movie, getReviews} = this.props;

    if (movie.id !== prevMovie.id) {
      getReviews(movie.id);
    }
  }

  render() {

    const {status, reviews} = this.props;

    if (status !== LoadingDataStatus.READY) {
      return <LoadingDataBlock status={status} />;
    }

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
  status: PropTypes.oneOf(Object.values(LoadingDataStatus)),
  movie: Movie.isRequired,
  reviews: PropTypes.arrayOf(Review),
  getReviews: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    status: getDetailedMovieStatus(state),
    reviews: getDetailedMovieReviews(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getReviews: (movieId) => {
      dispatch(Operations.getReviews(movieId));
    },
  };
}

export {MovieInfoReviews};
export default connect(mapStateToProps, mapDispatchToProps)(MovieInfoReviews);
