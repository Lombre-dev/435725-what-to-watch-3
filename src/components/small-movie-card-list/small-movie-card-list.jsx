import PropTypes from 'prop-types';
import React from 'react';
import SmallMovieCard from '../small-movie-card/small-movie-card';
import {Movie} from '../types';

export default class SmallMovieCardList extends React.PureComponent {

  render() {

    const {movies, activeItemId, onItemHover, onItemLeave, onItemClick} = this.props;

    return (
      <div className="catalog__movies-list">
        {
          movies.map((value, index) => {
            return (
              <SmallMovieCard
                id={index}
                key={value.title}
                movie={value}
                isPreviewActive={activeItemId === index}
                onHover={onItemHover}
                onLeave={onItemLeave}
                onClick={onItemClick}
              />
            );
          })
        }
      </div>
    );
  }
}

SmallMovieCardList.propTypes = {
  movies: PropTypes.arrayOf(Movie).isRequired,
  activeItemId: PropTypes.number.isRequired,
  onItemHover: PropTypes.func.isRequired,
  onItemLeave: PropTypes.func.isRequired,
  onItemClick: PropTypes.func.isRequired,
};
