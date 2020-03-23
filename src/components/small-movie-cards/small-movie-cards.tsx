import * as React from 'react';
import {SMALL_MOVIE_CARD_PREVIEW_DELAY} from '../../consts';
import withActiveItem from '../../hocs/with-active-item';
import SmallMovieCardItem from '../small-movie-card-item/small-movie-card-item';
import {TMovie} from '../../types';

type TProps = {
  movies: TMovie[];
  activeItemId: number;
  onItemHover: (index: number) => void;
  onItemLeave: () => void;
};

function SmallMovieCards(props: TProps) {

  const {movies, activeItemId, onItemHover, onItemLeave} = props;

  return (
    <div className="catalog__movies-list">
      {
        movies.map((movie) => {
          return (
            <SmallMovieCardItem
              key={movie.title}
              movie={movie}
              isPreviewActive={activeItemId === movie.id}
              onHover={onItemHover}
              onLeave={onItemLeave}
            />
          );
        })
      }
    </div>
  );
}

export {SmallMovieCards};
export default withActiveItem(SmallMovieCards, SMALL_MOVIE_CARD_PREVIEW_DELAY);
