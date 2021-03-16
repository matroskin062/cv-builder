import { createStructuredSelector } from 'reselect';

const commonInfoSelector = (state) => state.commonReducer;
const educationSelector = (state) => state.educationReducer;

export const cvSelector = createStructuredSelector({
  commonInfo: commonInfoSelector,
  education: educationSelector,
});
