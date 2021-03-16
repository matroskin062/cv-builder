import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import styles from './Form.module.css';

const Form = ({ children, defaultValues, schema, onSubmit }) => {
  const { register, handleSubmit, errors } = useForm({
    resolver: schema ? yupResolver(schema) : undefined,
    defaultValues,
    reValidateMode: 'onChange',
    mode: 'onChange',
    criteriaMode: 'all',
  });

  return (
    <FormProvider register={register} errors={errors}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
