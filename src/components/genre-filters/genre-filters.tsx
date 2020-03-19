import * as React from 'react';
import GenreFilterItem from '../genre-filter-item/genre-filter-item';

type TProps = {
  genres: string[];
  genre: string;
};

function GenreFilters(props: TProps) {
  return (
    <ul className="catalog__genres-list">
      {
        props.genres.map((item) => {
          return (
            <li key={item}
              className={`catalog__genres-item${item === props.genre ? ` catalog__genres-item--active` : ``}`}
            >
              <GenreFilterItem genre={item} />
            </li>
          );
        })
      }
    </ul>
  );
}

export default React.memo(GenreFilters);
