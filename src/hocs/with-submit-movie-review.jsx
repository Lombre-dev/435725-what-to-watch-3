import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {Movie} from '../components/types';
import {REVIEW_COMMENT_MAX_LENGTH, REVIEW_COMMENT_MIN_LENGTH} from '../consts';
import {Operations} from '../redux/reviews/operations';
import {getReviewMovie} from '../redux/reviews/selectors';

function withSubmitMovieReview(Component) {

  class WithSubmitMovieReview extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: -1,
        comment: ``,
      };

      this._handleRatingChange = this._handleRatingChange.bind(this);
      this._handleCommentChange = this._handleCommentChange.bind(this);
      this._handleSubmit = this._handleSubmit.bind(this);
    }

    componentDidMount() {

      const {setMovie, match: {params: {id}}} = this.props;

      setMovie(id);
    }

    _handleRatingChange(value) {
      this.setState({
        rating: parseInt(value, 10),
      });
    }

    _handleCommentChange(value) {
      this.setState({
        comment: value,
      });
    }

    _handleSubmit() {

      const {onSubmit, movie} = this.props;
      const {rating, comment} = this.state;

      onSubmit(movie.id, rating, comment);
    }

    render() {

      const {movie} = this.props;

      if (Boolean(movie) === false) {
        return <></>;
      }

      const {rating, comment} = this.state;

      return (
        <Component
          movie={movie}
          ratingValue={rating}
          onRatingChange={this._handleRatingChange}
          onCommentChange={this._handleCommentChange}
          isSubmitEnabled={
            rating !== -1 &&
            comment.length >= REVIEW_COMMENT_MIN_LENGTH &&
            comment.length <= REVIEW_COMMENT_MAX_LENGTH
          }
          onSubmit={this._handleSubmit}
        />
      );
    }
  }

  WithSubmitMovieReview.propTypes = {
    match: PropTypes.object.isRequired,
    movie: Movie,
    setMovie: PropTypes.func,
    onSubmit: PropTypes.func,
  };

  function mapStateTopProps(state) {
    return {
      movie: getReviewMovie(state),
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
      setMovie: (movieId) => {
        dispatch(Operations.setReviewMovie(movieId));
      },
      onSubmit: (movieId, rating, comment) => {
        dispatch(Operations.addReview(movieId, rating, comment));
      }
    };
  }

  return connect(mapStateTopProps, mapDispatchToProps)(WithSubmitMovieReview);
}

export default withSubmitMovieReview;
