import * as React from 'react';
import {SMALL_MOVIE_CARD_PREVIEW_DELAY} from '../../consts';
import withActiveItem from '../../hocs/with-active-item';
import SmallMovieCardItem from '../small-movie-card-item/small-movie-card-item';
import {TMovie} from '../types';

type Props = {
  movies: TMovie[];
  activeItemId: number;
  onItemHover: Function;
  onItemLeave: Function;
};

function SmallMovieCards(props: Props) {
  return (
    <div className="catalog__movies-list">
      {
        props.movies.map((movie) => {
          return (
            <SmallMovieCardItem
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

export {SmallMovieCards};
export default withActiveItem(SmallMovieCards, SMALL_MOVIE_CARD_PREVIEW_DELAY);
