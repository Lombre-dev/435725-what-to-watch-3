import PropTypes from 'prop-types';
import React from 'react';
import GenreFilter from '../genre-filter/genre-filter';

function GenreFilterList({genres, genre}) {
  return (
    <ul className="catalog__genres-list">
      {
        genres.map((item) => {
          return (
            <li key={item}
              className={`catalog__genres-item${item === genre ? ` catalog__genres-item--active` : ``}`}
            >
              <GenreFilter genre={item} />
            </li>
          );
        })
      }
    </ul>
  );
}

GenreFilterList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  genre: PropTypes.string.isRequired,
};

export default GenreFilterList;
