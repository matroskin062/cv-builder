import { createSelector } from 'reselect';

export const experienceSelector = createSelector(
  (state) => state.experienceReducer,
  (data) => data
);
