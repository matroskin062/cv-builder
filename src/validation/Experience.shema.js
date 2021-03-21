import * as yup from 'yup';

const date = new Date();
date.setFullYear(2100);

export const experienceSchema = yup.object().shape({
  experience: yup
    .array()
    .of(
      yup.object().shape({
        company: yup
          .string()
          .required('Company required!')
          .min(3, 'Too short!')
          .max(40, 'Too long!'),
        position: yup
          .string()
          .required('Position required!')
          .min(3, 'Too short!')
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
    .min(1, { message: 'Minimum 1 work place required!' }),
});
