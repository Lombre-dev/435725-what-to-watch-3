import PropTypes from 'prop-types';
import React from 'react';
import SmallMovieCard from '../small-movie-card/small-movie-card';
import {Movie} from '../types';

export default class SmallMovieCardList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      target: undefined,
    };

    this._handleMovieHover = this._handleMovieHover.bind(this);
  }

  _handleMovieHover({movie}) {
    this.setState(() => {
      return {
        target: movie,
      };
    });
  }

  render() {

    const {movies, onMovieCardTitleClick} = this.props;

    return (
      <div className="catalog__movies-list">
        {
          movies.map((value) => {
            return (
              <SmallMovieCard
                key={value.title}
                movie={value}
                onHover={this._handleMovieHover}
                onTitleClick={onMovieCardTitleClick}
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
  onMovieCardTitleClick: PropTypes.func.isRequired,
};
