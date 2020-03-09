import {createReducer} from 'redux-act';
import {setReviews} from './actions';
import {initialState} from './initialState';

export const reducer = createReducer({
  [setReviews]: _setReviews,
}, initialState);

function _setReviews(state, reviews) {
  return Object.assign({}, state, {reviews});
}
