import * as yup from 'yup';

export const schema = yup.object().shape({
  company: yup.string().required().min(2).max(20),
  position: yup.string().required().min(3).max(20),
  start: yup.string().required(),
  end: yup.string().required(),
});
