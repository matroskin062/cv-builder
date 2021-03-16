import { createSelector } from 'reselect';

export const educationSelector = createSelector(
  (state) => state.educationReducer,
  (data) => data
);
