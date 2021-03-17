import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import styles from './Form.module.css';

const Form = ({ children, defaultValues, schema, onSubmit }) => {
  const {
    register,
    handleSubmit,
    errors,
    formState: { isSubmitSuccessful },
    setValue,
    reset,
  } = useForm({
    resolver: schema ? yupResolver(schema) : undefined,
    defaultValues,
    reValidateMode: 'onChange',
    mode: 'onChange',
    criteriaMode: 'all',
  });

  useEffect(() => {
    if (defaultValues) {
      console.log(defaultValues);
      Object.entries(defaultValues).map((el) => setValue(el[0], el[1]));
    }
  }, [defaultValues]);

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful]);

  return (
    <FormProvider register={register} errors={errors}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
