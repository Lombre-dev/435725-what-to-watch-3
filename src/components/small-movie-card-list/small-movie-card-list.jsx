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

    this._handleItemHover = this._handleItemHover.bind(this);
    this._handleItemClick = this._handleItemClick.bind(this);
  }

  _handleItemHover({movie}) {
    this.setState(() => {
      return {
        target: movie,
      };
    });
  }

  _handleItemClick({movie}) {

    const {onItemClick} = this.props;

    onItemClick({movie});
  }

  render() {

    const {movies} = this.props;

    return (
      <div className="catalog__movies-list">
        {
          movies.map((value) => {
            return (
              <SmallMovieCard
                key={value.title}
                movie={value}
                onHover={this._handleItemHover}
                onClick={this._handleItemClick}
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
  onItemClick: PropTypes.func.isRequired,
};
