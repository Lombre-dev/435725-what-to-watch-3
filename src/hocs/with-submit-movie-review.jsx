import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {Redirect, withRouter} from 'react-router-dom';
import LoadingDataBlock from '../components/loading-data-block/loading-data-block';
import {Movie} from '../components/types';
import {LoadingDataStatus, REVIEW_COMMENT_MAX_LENGTH, REVIEW_COMMENT_MIN_LENGTH} from '../consts';
import {setDetailedMovieRedirectTo} from '../redux/movie/actions';
import {Operations} from '../redux/movie/operations';
import {getDetailedMovie, getDetailedMovieRedirectTo, getDetailedMovieStatus} from '../redux/movie/selectors';

function withSubmitMovieReview(Component) {

  class WithSubmitMovieReview extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: -1,
        comment: this.props.comment || ``,
      };

      this._handleRatingChange = this._handleRatingChange.bind(this);
      this._handleCommentChange = this._handleCommentChange.bind(this);
      this._handleSubmit = this._handleSubmit.bind(this);
    }

    componentDidMount() {

      const {onMount, match: {params: {id}}} = this.props;

      onMount(id);
    }

    componentWillUnmount() {

      const {onUnmount} = this.props;

      onUnmount();
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

      const {rating, comment} = this.state;
      const {onSubmit, movie} = this.props;

      onSubmit(movie.id, rating, comment);
    }

    render() {

      const {rating, comment} = this.state;
      const {redirectTo, status, movie} = this.props;

      if (redirectTo) {
        return <Redirect to={redirectTo} />;
      }

      if (status !== LoadingDataStatus.READY) {
        return <LoadingDataBlock status={status} />;
      }

      return (
        <Component
          movie={movie}
          ratingValue={rating}
          commentValue={comment}
          onRatingChange={this._handleRatingChange}
          onCommentChange={this._handleCommentChange}
          isFieldsEnabled={status === LoadingDataStatus.READY}
          isSubmitEnabled={
            status === LoadingDataStatus.READY &&
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
    status: PropTypes.oneOf(Object.values(LoadingDataStatus)),
    redirectTo: PropTypes.string,
    movie: Movie,
    isEnabled: PropTypes.bool,
    onSubmit: PropTypes.func,

    onMount: PropTypes.func,
    onUnmount: PropTypes.func,

    comment: PropTypes.string,
  };

  WithSubmitMovieReview.defaultProps = {
    comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...`,
  };

  function mapStateTopProps(state) {
    return {
      status: getDetailedMovieStatus(state),
      movie: getDetailedMovie(state),
      redirectTo: getDetailedMovieRedirectTo(state),
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
      onMount: (movieId) => {
        dispatch(Operations.init(movieId));
      },
      onSubmit: (movieId, rating, comment) => {
        dispatch(Operations.addReview(movieId, rating, comment));
      },
      onUnmount: () => {
        dispatch(setDetailedMovieRedirectTo(undefined));
      },
    };
  }

  return connect(mapStateTopProps, mapDispatchToProps)(withRouter(WithSubmitMovieReview));
}

export default withSubmitMovieReview;
