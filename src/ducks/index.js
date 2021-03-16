import { combineReducers } from 'redux';
import commonReducer from './common';
import educationReducer from './education';
import experienceReudcer from './experience';

export const reducers = combineReducers({
  commonReducer,
  educationReducer,
  experienceReudcer,
});
