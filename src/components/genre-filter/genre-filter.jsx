import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer';

class GenreFilter extends React.PureComponent {

  constructor(props) {
    super(props);

    this._handleItemClick = this._handleItemClick.bind(this);
  }

  _handleItemClick(e) {

    const {onSelect} = this.props;
    const genre = e.currentTarget.dataset.genre;

    e.preventDefault();
    onSelect(genre);
  }

  render() {

    const {genres, currentGenre} = this.props;

    return (
      <ul className="catalog__genres-list">
        {
          genres.map((tab) => {
            return (
              <li key={tab}
                className={`catalog__genres-item${tab === currentGenre ? ` catalog__genres-item--active` : ``}`}
              >
                <a
                  data-genre={tab}
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

GenreFilter.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentGenre: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

/*
TODO: решил проваливать эти пропсы сверху,
если лучше привязаться к store, то пометь в feedback.
function mapStateToProps(state) {
  return {
    genres: state.catalogGenres,
    currentGenre: state.cataloGenre,
  };
}
*/

function mapDispatchToProps(dispatch) {
  return {
    onSelect: (genre) => {
      dispatch(ActionCreator.setCatalogGenre(genre));
    }
  };
}

export {GenreFilter};
export default connect(null, mapDispatchToProps)(GenreFilter);
