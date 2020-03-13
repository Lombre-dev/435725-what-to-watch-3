import PropTypes from 'prop-types';
import React from 'react';
import {REVIEW_RATING_STARS_LIMIT} from '../../consts';

class ReviewRating extends React.PureComponent {
  constructor(props) {
    super(props);

    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(e) {

    const {onValueChange} = this.props;
    const {value} = e.target;

    onValueChange(value);
  }

  render() {

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
}

ReviewRating.propTypes = {
  isEnabled: PropTypes.bool.isRequired,
  value: PropTypes.number,
  limit: PropTypes.number,
  onValueChange: PropTypes.func,
};

ReviewRating.defaultProps = {
  limit: REVIEW_RATING_STARS_LIMIT,
};

export default ReviewRating;
