import PropTypes from 'prop-types';
import React from 'react';
import {MORE_LIKE_THIS_MOVIES_LIMIT} from '../consts';
import SmallMovieCardList from '../small-movie-card-list';
import {Movie} from '../types';

class MoreLikeThis extends React.PureComponent {

  render() {

    const {movies, onMovieListItemClick} = this.props;

    return (
      <section className="catalog catalog--like-this" >
        <h2 className="catalog__title">More like this</h2>
        <SmallMovieCardList
          movies={movies.slice(0, MORE_LIKE_THIS_MOVIES_LIMIT)}
          onItemClick={onMovieListItemClick}
        />
      </section >
    );
  }
}

MoreLikeThis.propTypes = {
  movies: PropTypes.arrayOf(Movie).isRequired,
  onMovieListItemClick: PropTypes.func.isRequired,
};

export default MoreLikeThis;