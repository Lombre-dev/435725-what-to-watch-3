import {combineReducers} from 'redux';
import {reducer as appReducer} from './app/reducer';
import {reducer as catalogReducer} from './catalog/reducer';
import {reducer as movieDetailsReducer} from './movie-details/reducer';
import {reducer as playerReducer} from './player/reducer';
import {reducer as reviewsReducer} from './reviews/reducer';
import {reducer as userReducer} from './user/reducer';

export default combineReducers({
  app: appReducer,
  catalog: catalogReducer,
  movieDetails: movieDetailsReducer,
  player: playerReducer,
  reviews: reviewsReducer,
  user: userReducer,
});
