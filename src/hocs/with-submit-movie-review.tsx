import * as React from 'react';
import {connect} from 'react-redux';
import {Redirect, withRouter} from 'react-router-dom';
import LoadingDataBlock from '../components/loading-data-block/loading-data-block';
import {TMatchParamsWithId, TMovie} from '../components/types';
import {LoadingDataStatus, REVIEW_COMMENT_MAX_LENGTH, REVIEW_COMMENT_MIN_LENGTH} from '../consts';
import {setDetailedMovieRedirectTo} from '../redux/movie/actions';
import {Operations} from '../redux/movie/operations';
import {getDetailedMovie, getDetailedMovieRedirectTo, getDetailedMovieStatus} from '../redux/movie/selectors';

type Props = {
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

type State = {
  rating: number;
  comment: string;
}


function withSubmitMovieReview(Component) {

  class WithSubmitMovieReview extends React.PureComponent<Props, State> {
    public constructor(props: Props) {
      super(props);

      this.state = {
        rating: -1,
        comment: this.props.comment || ``,
      };

      this.handleRatingChange = this.handleRatingChange.bind(this);
      this.handleCommentChange = this.handleCommentChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    public componentDidMount() {

      const {onMount, match} = this.props;

      onMount(match.params.id);
    }

    public componentWillUnmount() {

      const {onUnmount} = this.props;

      onUnmount();
    }

    private handleRatingChange(value: string) {
      this.setState({
        rating: parseInt(value, 10),
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

      if (status !== `ready`) {
        return <LoadingDataBlock status={status} />;
      }

      return (
        <Component
          movie={movie}
          ratingValue={rating}
          commentValue={comment}
          onRatingChange={this.handleRatingChange}
          onCommentChange={this.handleCommentChange}
          isFieldsEnabled={status === `ready`}
          isSubmitEnabled={
            status === `ready` &&
            rating !== -1 &&
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
