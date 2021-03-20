import { createStructuredSelector } from 'reselect';
import { educationSelector } from './../Education/Education.selector';
import { experienceSelector } from './../Experience/Experience.selector';
import { commonSelector } from './../CommonInfo/CommonInfo.selector';

export const appSelector = createStructuredSelector({
  education: educationSelector,
  experience: experienceSelector,
  common: commonSelector,
});
