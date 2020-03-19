import * as React from 'react';
import {connect} from 'react-redux';
import {Redirect, withRouter} from 'react-router-dom';
import LoadingDataBlock from '../components/loading-data-block/loading-data-block';
import {TMatchParamsWithId, TMovie} from '../components/types';
import {LoadingDataStatus, REVIEW_COMMENT_MAX_LENGTH, REVIEW_COMMENT_MIN_LENGTH} from '../consts';
import {setDetailedMovieRedirectTo} from '../redux/movie/actions';
import {Operations} from '../redux/movie/operations';
import {getDetailedMovie, getDetailedMovieRedirectTo, getDetailedMovieStatus} from '../redux/movie/selectors';

type TProps = {
  match: TMatchParamsWithId;
  status: LoadingDataStatus;
  redirectTo?: string;
  movie?: TMovie;
  isEnabled?: boolean;
  comment?: string;
  onSubmit: (movieId: number, rating: number, comment: string) => void;
  onMount: (movieId: number) => void;
  onUnmount: () => void;
}

type TState = {
  rating: number;
  comment: string;
}


function withSubmitMovieReview(Component) {

  class WithSubmitMovieReview extends React.PureComponent<TProps, TState> {
    public constructor(props: TProps) {
      super(props);

      this.state = {
        rating: null,
        comment: props.comment || ``,
      };

      this.handleRatingChange = this.handleRatingChange.bind(this);
      this.handleCommentChange = this.handleCommentChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    public componentDidMount() {

      const {onMount, match} = this.props;

      onMount(parseInt(match.params.id, 10));
    }

    public componentWillUnmount() {

      const {onUnmount} = this.props;

      onUnmount();
    }

    private handleRatingChange(value: number) {
      this.setState({
        rating: value,
      });
    }

    private handleCommentChange(value: string) {
      this.setState({
        comment: value,
      });
    }

    private handleSubmit() {

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

      if (status !== LoadingDataStatus.READY) {
        return <LoadingDataBlock status={status} />;
      }

      return (
        <Component
          movie={movie}
          ratingValue={rating}
          commentValue={comment}
          onRatingChange={this.handleRatingChange}
          onCommentChange={this.handleCommentChange}
          isFieldsEnabled={status === LoadingDataStatus.READY}
          isSubmitEnabled={
            status === LoadingDataStatus.READY &&
            rating &&
            comment.length >= REVIEW_COMMENT_MIN_LENGTH &&
            comment.length <= REVIEW_COMMENT_MAX_LENGTH
          }
          onSubmit={this.handleSubmit}
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

  function mapDispatchToProps(dispatch) {
    return {
      onMount: (movieId: number) => {
        dispatch(Operations.init(movieId));
      },
      onSubmit: (movieId: number, rating: number, comment: string) => {
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
