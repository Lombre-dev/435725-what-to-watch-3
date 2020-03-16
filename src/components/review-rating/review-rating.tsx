import * as React from 'react';
import {REVIEW_RATING_STARS_LIMIT} from '../../consts';

type TReviewRatingProps = {
  isEnabled: boolean;
  value?: number;
  limit?: number;
  onValueChange?: Function;
};

class ReviewRating extends React.PureComponent<TReviewRatingProps> {
  public constructor(props: TReviewRatingProps) {
    super(props);

    this._handleChange = this._handleChange.bind(this);
  }

  private _handleChange(e: React.SyntheticEvent) {

    const {onValueChange} = this.props;
    const {value} = e.target as HTMLInputElement;

    onValueChange(value);
  }

  public render() {

    const {isEnabled, value, limit} = this.props;
    const items = new Array(limit).fill(``);

    return (
      <div className="rating">
        <div className="rating__stars">
          {
            items.map((_item, index) => {

              const itemValue = index + 1;
              const id = `star-${index}`;

              return (
                <React.Fragment key={id}>
                  <input
                    className="rating__input"
                    id={id}
                    type="radio"
                    name="rating"
                    value={itemValue}
                    onChange={this._handleChange}
                    defaultChecked={itemValue === value}
                    disabled={!isEnabled}
                  />
                  <label className="rating__label" htmlFor={id}>Rating {itemValue}</label>
                </React.Fragment>
              );
            })
          }
        </div>
      </div>
    );
  }

  public static defaultProps = {
    limit: REVIEW_RATING_STARS_LIMIT,
  }
}

export default ReviewRating;