import * as yup from 'yup';
export const commonInfoSchema = yup.object().shape({
  firstName: yup
    .string()
    .required('First name required!')
    .min(2, 'Too short!')
    .max(20, 'Too long!'),
  lastName: yup
    .string()
    .required('Last name required!')
    .min(2, 'Too short!')
    .max(20, 'Too long!'),
  position: yup
    .string()
    .required('Position required!')
    .min(3, 'Too short!')
    .max(20, 'Too long!'),
  phone: yup
    .string()
    .required('Phone number required!')
    .matches(/^[0-9]\d{9}$/, 'It should be 9 numeric characters long'),
  email: yup
    .string()
    .required('Email required!')
    .email('E-mail must be valid!'),
});
