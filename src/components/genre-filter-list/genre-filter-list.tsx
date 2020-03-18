import * as React from 'react';
import GenreFilter from '../genre-filter/genre-filter';

type TGenreFilterListProps = {
  genres: string[];
  genre: string;
};

function GenreFilterList(props: TGenreFilterListProps) {
  return (
    <ul className="catalog__genres-list">
      {
        props.genres.map((item) => {
          return (
            <li key={item}
              className={`catalog__genres-item${item === props.genre ? ` catalog__genres-item--active` : ``}`}
            >
              <GenreFilter genre={item} />
            </li>
          );
        })
      }
    </ul>
  );
}

export default React.memo(GenreFilterList);
