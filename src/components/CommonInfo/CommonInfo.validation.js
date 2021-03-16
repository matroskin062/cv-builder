import * as yup from 'yup';
export const schema = yup.object().shape({
  firstName: yup.string().required().min(2).max(20),
  lastName: yup.string().required().min(2).max(20),
  position: yup.string().required().min(3).max(20),
  phone: yup
    .string()
    .matches(/^[0-9]\d{9}$/, 'It should be 9 characters long')
    .required(),
  email: yup.string().email().required(),
});
