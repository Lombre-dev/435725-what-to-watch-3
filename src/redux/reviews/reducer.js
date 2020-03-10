import {createReducer} from 'redux-act';
import {setReviewMovie, setReviews} from './actions';
import {initialState} from './initialState';

export const reducer = createReducer({
  [setReviewMovie]: _setReviewMovie,
  [setReviews]: _setReviews,
}, initialState);

function _setReviews(state, reviews) {
  return Object.assign({}, state, {reviews});
}

function _setReviewMovie(state, movie) {
  return Object.assign({}, state, {movie});
}
