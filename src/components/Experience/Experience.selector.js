import { createSelector } from 'reselect';

const selector = (state) => state.experienceReudcer;

export const experienceSelector = createSelector(
  selector,
  (experience) => experience
);
