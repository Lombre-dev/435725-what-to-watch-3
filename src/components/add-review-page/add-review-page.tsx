import * as React from 'react';
import {Link} from 'react-router-dom';
import {AppPages, REVIEW_COMMENT_MAX_LENGTH, REVIEW_COMMENT_MIN_LENGTH} from '../../consts';
import Logo from '../logo/logo';
import ReviewRating from '../review-rating/review-rating';
import {TMovie} from '../types';
import UserBlock from '../user-block/user-block';

type TAddReviewPageProps = {
  movie: TMovie;
  ratingValue?: number;
  commentValue?: string;
  onRatingChange?: Function;
  onCommentChange?: Function;
  isFieldsEnabled?: boolean;
  isSubmitEnabled?: boolean;
  onSubmit?: Function;
}

class AddReviewPage extends React.PureComponent<TAddReviewPageProps> {
  public constructor(props) {
    super(props);

    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleCommentChange = this._handleCommentChange.bind(this);
  }

  private _handleCommentChange(e) {

    const {onCommentChange} = this.props;
    const {value} = e.target;

    onCommentChange(value);
  }

  private _handleSubmit(e) {

    const {onSubmit} = this.props;

    e.preventDefault();
    onSubmit();
  }

  public render() {

    const {movie, ratingValue, commentValue, onRatingChange, isFieldsEnabled, isSubmitEnabled} = this.props;

    return (
      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg" style={{backgroundColor: movie.backgroundColor}}>
            <img src={movie.backgroundImage} alt={movie.title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <Logo />

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link className="breadcrumbs__link" to={`${AppPages.MOVIES}/${movie.id}`}>{movie.title}</Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>

            <UserBlock />
          </header>

          <div className="movie-card__poster movie-card__poster--small">
            <img src={movie.poster} alt={`${movie.title} poster`} width="218" height="327" />
          </div>
        </div>

        <div className="add-review">
          <form className="add-review__form" onSubmit={this._handleSubmit}>
            <ReviewRating
              isEnabled={isFieldsEnabled}
              value={ratingValue}
              onValueChange={onRatingChange}
            />

            <div className="add-review__text">
              <textarea
                className="add-review__textarea"
                name="review-text"
                id="review-text"
                placeholder="Review text"
                minLength={REVIEW_COMMENT_MIN_LENGTH}
                maxLength={REVIEW_COMMENT_MAX_LENGTH}
                onChange={this._handleCommentChange}
                disabled={!isFieldsEnabled}
                defaultValue={commentValue}
              ></textarea>
              <div className="add-review__submit">
                <button className="add-review__btn" type="submit" disabled={!isSubmitEnabled}>Post</button>
              </div>

            </div>
          </form>
        </div>

      </section>
    );
  }
}

export default AddReviewPage;
