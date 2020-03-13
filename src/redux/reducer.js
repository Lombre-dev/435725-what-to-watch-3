import {combineReducers} from 'redux';
import {reducer as appReducer} from './app/reducer';
import {reducer as catalogReducer} from './catalog/reducer';
import {reducer as movieDetailsReducer} from './movie/reducer';
import {reducer as userReducer} from './user/reducer';

export default combineReducers({
  app: appReducer,
  catalog: catalogReducer,
  movie: movieDetailsReducer,
  user: userReducer,
});
