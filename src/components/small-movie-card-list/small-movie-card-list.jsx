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

    const {movies, onMovieCardTitleClickCallback} = this.props;

    return (
      <div className="catalog__movies-list">
        {
          movies.map((value, index) => {
            return (
              <SmallMovieCard
                key={`${value}${index}`}
                movie={value}
                onComponentHoverCallback={this._handleMovieHover}
                onTitleClickCallback={onMovieCardTitleClickCallback}
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
  onMovieCardTitleClickCallback: PropTypes.func.isRequired,
};
