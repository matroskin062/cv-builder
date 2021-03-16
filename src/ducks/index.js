import { combineReducers } from 'redux';
import commonReducer from './common';
import educationReducer from './education';

export const reducers = combineReducers({
  commonReducer,
  educationReducer,
});
