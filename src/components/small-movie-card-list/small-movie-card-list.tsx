import * as React from 'react';
import SmallMovieCard from '../small-movie-card/small-movie-card';

type TSmallMovieCardListProps = {
  movies: TMovie[];
  activeItemId: number;
  onItemHover: Function;
  onItemLeave: Function;
};

function SmallMovieCardList(props: TSmallMovieCardListProps) {
  return (
    <div className="catalog__movies-list">
      {
        props.movies.map((movie) => {
          return (
            <SmallMovieCard
              key={movie.title}
              movie={movie}
              isPreviewActive={props.activeItemId === movie.id}
              onHover={props.onItemHover}
              onLeave={props.onItemLeave}
            />
          );
        })
      }
    </div>
  );
}

export default SmallMovieCardList;
