import * as yup from 'yup';

export const educationSchema = yup.object().shape({
  education: yup
    .array()
    .of(
      yup.object().shape({
        name: yup.string().required(),
        program: yup.string().required(),
        start: yup.string().required('reuquired!'),
        end: yup.string().required('required!'),
      })
    )
    .required()
    .min(1),
});
