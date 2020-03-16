import * as React from 'react';
import SmallMovieCardList from '../small-movie-card-list';

type TMoreLikeThisProps = {
  movies: TMovie[],
};

function MoreLikeThis(props: TMoreLikeThisProps) {
  return (
    <section className="catalog catalog--like-this" >
      <h2 className="catalog__title">More like this</h2>
      <SmallMovieCardList
        movies={props.movies.slice(0, MORE_LIKE_THIS_MOVIES_LIMIT)}
      />
    </section >
  );
}

export default MoreLikeThis;
