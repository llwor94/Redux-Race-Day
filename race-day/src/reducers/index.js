import { combineReducers } from 'redux';
import { racerReducer } from './racerReducer';
import { distanceReducer } from './distanceReducer';
import { ageGroupReducer } from './ageGroupReducer';

export default combineReducers({
  racerReducer,
  distanceReducer,
  ageGroupReducer,
});
