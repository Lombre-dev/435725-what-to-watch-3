import * as React from 'react';
import {MORE_LIKE_THIS_MOVIES_LIMIT} from '../../consts';
import SmallMovieCards from '../small-movie-cards/small-movie-cards';
import {TMovie} from '../types';

type TProps = {
  movies: TMovie[];
};

function MoreLikeThis(props: TProps) {
  return (
    <section className="catalog catalog--like-this" >
      <h2 className="catalog__title">More like this</h2>
      <SmallMovieCards
        movies={props.movies.slice(0, MORE_LIKE_THIS_MOVIES_LIMIT)}
      />
    </section >
  );
}

export default React.memo(MoreLikeThis);
