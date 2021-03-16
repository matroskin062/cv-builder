import { createSelector } from 'reselect';

export const commonSelector = createSelector(
  (state) => state.commonReducer,
  (data) => data
);
