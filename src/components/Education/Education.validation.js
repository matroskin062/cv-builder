import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup.string().required().min(3).max(100),
  program: yup.string().required().min(10).max(100),
  start: yup.string().required(),
  end: yup.string().required(),
});
