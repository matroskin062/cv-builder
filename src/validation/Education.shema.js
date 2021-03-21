import * as yup from 'yup';

const date = new Date();
date.setFullYear(2100);

export const educationSchema = yup.object().shape({
  education: yup
    .array()
    .of(
      yup.object().shape({
        name: yup
          .string()
          .required('Name required!')
          .min(2, 'Too short!')
          .max(40, 'Too long!'),
        program: yup
          .string()
          .required('Program required!')
          .min(2, 'Too short!')
          .max(40, 'Too long!'),
        start: yup
          .date()
          .required('Start date required!')
          .max(date, 'The year must be less than 2100'),
        end: yup
          .date()
          .required('End date required!')
          .when(
            'start',
            (start, schema) =>
              start &&
              schema.min(start, 'End date must be greater than Start date')
          )
          .max(date, 'The year must be less than 2100'),
      })
    )
    .min(1, { message: 'Minimum 1 education required!' }),
});
