import * as yup from 'yup';

export const experienceSchema = yup.object().shape({
  experience: yup
    .array()
    .of(
      yup.object().shape({
        company: yup.string().required(),
        position: yup.string().required(),
        start: yup.string().required(),
        end: yup.string().required(),
      })
    )
    .required()
    .min(1),
});
