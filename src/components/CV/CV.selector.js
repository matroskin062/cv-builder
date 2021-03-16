import { createStructuredSelector } from 'reselect';

const commonInfoSelector = (state) => state.commonReducer;
const educationSelector = (state) => state.educationReducer;
const experienceSelector = (state) => state.experienceReudcer;

export const cvSelector = createStructuredSelector({
  commonInfo: commonInfoSelector,
  education: educationSelector,
  experience: experienceSelector,
});
