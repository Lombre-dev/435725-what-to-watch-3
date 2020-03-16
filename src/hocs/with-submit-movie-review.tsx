import * as React from 'react';
import {connect} from 'react-redux';
import {Redirect, withRouter} from 'react-router-dom';
import LoadingDataBlock from '../components/loading-data-block/loading-data-block';
import {TMatchParamsWithId, TMovie} from '../components/types';
import {LoadingDataStatus, REVIEW_COMMENT_MAX_LENGTH, REVIEW_COMMENT_MIN_LENGTH} from '../consts';
import {setDetailedMovieRedirectTo} from '../redux/movie/actions';
import {Operations} from '../redux/movie/operations';
import {getDetailedMovie, getDetailedMovieRedirectTo, getDetailedMovieStatus} from '../redux/movie/selectors';

type TWithSubmitMovieReviewProps = {
  match: TMatchParamsWithId;
  status: LoadingDataStatus;
  redirectTo?: string;
  movie?: TMovie;
  isEnabled?: boolean;
  onSubmit?: Function;

  onMount?: Function;
  onUnmount?: Function;

  comment?: string;
}

type TWithSubmitMovieReviewState = {
  rating: number;
  comment: string;
}


function withSubmitMovieReview(Component: any) {

  class WithSubmitMovieReview extends React.PureComponent<TWithSubmitMovieReviewProps, TWithSubmitMovieReviewState> {
    public constructor(props: TWithSubmitMovieReviewProps) {
      super(props);

      this.state = {
        rating: -1,
        comment: this.props.comment || ``,
      };

      this._handleRatingChange = this._handleRatingChange.bind(this);
      this._handleCommentChange = this._handleCommentChange.bind(this);
      this._handleSubmit = this._handleSubmit.bind(this);
    }

    public componentDidMount() {

      const {onMount, match} = this.props;

      onMount(match.params.id);
    }

    public componentWillUnmount() {

      const {onUnmount} = this.props;

      onUnmount();
    }

    private _handleRatingChange(value: string) {
      this.setState({
        rating: parseInt(value, 10),
      });
    }

    private _handleCommentChange(value: string) {
      this.setState({
        comment: value,
      });
    }

    private _handleSubmit() {

      const {rating, comment} = this.state;
      const {onSubmit, movie} = this.props;

      onSubmit(movie.id, rating, comment);
    }

    public render() {

      const {rating, comment} = this.state;
      const {redirectTo, status, movie} = this.props;

      if (redirectTo) {
        return <Redirect to={redirectTo} />;
      }

      if (status !== `ready`) {
        return <LoadingDataBlock status={status} />;
      }

      return (
        <Component
          movie={movie}
          ratingValue={rating}
          commentValue={comment}
          onRatingChange={this._handleRatingChange}
          onCommentChange={this._handleCommentChange}
          isFieldsEnabled={status === `ready`}
          isSubmitEnabled={
            status === `ready` &&
            rating !== -1 &&
            comment.length >= REVIEW_COMMENT_MIN_LENGTH &&
            comment.length <= REVIEW_COMMENT_MAX_LENGTH
          }
          onSubmit={this._handleSubmit}
        />
      );
    }

    public static defaultProps = {
      comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...`,
    }

  }

  function mapStateTopProps(state) {
    return {
      status: getDetailedMovieStatus(state),
      movie: getDetailedMovie(state),
      redirectTo: getDetailedMovieRedirectTo(state),
    };
  }

  function mapDispatchToProps(dispatch: Function) {
    return {
      onMount: (movieId: string) => {
        dispatch(Operations.init(movieId));
      },
      onSubmit: (movieId: string, rating: number, comment: string) => {
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
