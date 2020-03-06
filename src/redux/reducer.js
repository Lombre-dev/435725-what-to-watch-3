import {combineReducers} from 'redux';
import {reducer as catalogReducer} from './catalog/reducer';
import {reducer as movieDetailsReducer} from './movie-details/reducer';
import {reducer as playerReducer} from './player/reducer';

export default combineReducers({
  catalog: catalogReducer,
  movieDetails: movieDetailsReducer,
  player: playerReducer,
});
