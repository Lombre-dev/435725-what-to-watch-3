import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer';
import {getGenreLabels} from '../../utils/movie-utils';

class GenreFilter extends React.PureComponent {

  constructor(props) {
    super(props);

    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick(e) {

    const {genre, onSelect} = this.props;

    e.preventDefault();
    onSelect(genre);
  }

  render() {

    const {genre} = this.props;
    const genreLabels = getGenreLabels();

    return (
      <a
        href="#"
        className="catalog__genres-link"
        onClick={this._handleClick}
      >{genreLabels[genre] || genre}</a>
    );
  }
}

GenreFilter.propTypes = {
  genre: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    onSelect: (genre) => {
      dispatch(ActionCreator.setCatalogGenre(genre));
    }
  };
}

export {GenreFilter};
export default connect(null, mapDispatchToProps)(GenreFilter);
