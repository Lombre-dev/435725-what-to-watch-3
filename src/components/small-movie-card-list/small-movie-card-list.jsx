import PropTypes from 'prop-types';
import React from 'react';
import {SMALL_MOVIE_CARD_PREVIEW_DELAY} from '../consts';
import SmallMovieCard from '../small-movie-card/small-movie-card';
import {Movie} from '../types';
export default class SmallMovieCardList extends React.PureComponent {
  constructor(props) {
    super(props);

    this._timeoutId = undefined;
    this.state = {
      target: undefined,
    };

    this._handleItemHover = this._handleItemHover.bind(this);
    this._handleItemLeave = this._handleItemLeave.bind(this);
    this._handleItemClick = this._handleItemClick.bind(this);
  }

  componentWillUnmount() {
    clearTimeout(this._timeoutId);
  }

  _handleItemHover({movie}) {
    clearTimeout(this._timeoutId);
    this._timeoutId = setTimeout(() => this.setState(() => {
      return {
        target: movie,
      };
    }), SMALL_MOVIE_CARD_PREVIEW_DELAY);
  }

  _handleItemLeave({_movie}) {
    clearTimeout(this._timeoutId);
    this.setState(() => {
      return {
        target: undefined,
      };
    });
  }

  _handleItemClick({movie}) {

    const {onItemClick} = this.props;

    onItemClick({movie});
  }

  render() {

    const {target} = this.state;
    const {movies} = this.props;

    return (
      <div className="catalog__movies-list">
        {
          movies.map((value) => {
            return (
              <SmallMovieCard
                key={value.title}
                movie={value}
                isPreviewActive={target === value}
                onHover={this._handleItemHover}
                onLeave={this._handleItemLeave}
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
