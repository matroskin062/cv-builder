import { Form, Formik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { setCommonData } from '../../ducks/common';
import Button from '../Button/Button';
import FormInput from '../FormInput/FormInput';
import { commonSelector } from './CommonInfo.selector';
import { commonInfoSchema } from './CommonInfo.validation';

const CommonInfo = () => {
  const commonInfo = useSelector(commonSelector);
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (data) => {
    dispatch(setCommonData(data));
    history.push('/education');
  };

  return (
    <div>
      <Formik
        onSubmit={onSubmit}
        validationSchema={commonInfoSchema}
        initialValues={commonInfo}
      >
        {({ errors, touched, values }) => (
          <Form>
            <FormInput
              name='firstName'
              type='text'
              label='FirstName'
              error={errors.firstName}
              value={values.firstName}
              touched={touched}
            />
            <FormInput
              name='lastName'
              type='text'
              label='lastName'
              error={errors.lastName}
              value={values.lastName}
              touched={touched}
            />
            <FormInput
              name='position'
              type='text'
              label='Posititon'
              error={errors.position}
              value={values.position}
              touched={touched}
            />
            <FormInput
              name='email'
              type='text'
              label='Email'
              error={errors.email}
              value={values.email}
              touched={touched}
            />
            <FormInput
              name='phone'
              type='text'
              label='Phone'
              error={errors.phone}
              value={values.phone}
              touched={touched}
            />
            <Button type='submit'>Submit</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CommonInfo;
