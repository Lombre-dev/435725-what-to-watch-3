import {combineReducers} from 'redux';
import {reducer as catalogReducer} from './catalog/reducer';

export default combineReducers({
  catalog: catalogReducer,
});
