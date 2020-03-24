import * as React from 'react';
import {ReviewFormConfig} from '../../consts';

type TProps = {
  isEnabled: boolean;
  value?: number;
  limit?: number;
  onValueChange: (value: number) => void;
};

class ReviewRating extends React.PureComponent<TProps> {
  public constructor(props: TProps) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  private handleChange(e: React.SyntheticEvent) {

    const {onValueChange} = this.props;
    const {value} = e.target as HTMLInputElement;

    onValueChange(parseInt(value, 10));
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
                    onChange={this.handleChange}
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
    limit: ReviewFormConfig.RATING_STARS_LIMIT,
  }
}

export default ReviewRating;
