import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer';

class GenreFilterList extends React.PureComponent {

  constructor(props) {
    super(props);

    this._handleItemClick = this._handleItemClick.bind(this);
  }

  _handleItemClick(e) {

    const {onGenreItemClick} = this.props;
    const index = parseInt(e.currentTarget.dataset.index, 10);

    e.preventDefault();
    onGenreItemClick(index);
  }

  render() {

    const {genres, currentGenreIndex} = this.props;

    return (
      <ul className="catalog__genres-list">
        {
          genres.map((tab, index) => {
            return (
              <li key={tab}
                className={`catalog__genres-item${index === currentGenreIndex ? ` catalog__genres-item--active` : ``}`}
              >
                <a
                  data-index={index}
                  href="#"
                  className="catalog__genres-link"
                  onClick={this._handleItemClick}
                >{tab}</a>
              </li>
            );
          })
        }
      </ul>
    );
  }
}

GenreFilterList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentGenreIndex: PropTypes.number,
  onGenreItemClick: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    currentGenreIndex: state.genreFilterIndex,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onGenreItemClick: (index) => {
      dispatch(ActionCreator.applyGenreFilter(index));
    }
  };
}

export {GenreFilterList};
export default connect(mapStateToProps, mapDispatchToProps)(GenreFilterList);
