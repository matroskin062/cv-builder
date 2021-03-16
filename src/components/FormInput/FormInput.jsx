import React, { memo } from 'react';
import { useFormContext } from 'react-hook-form';

import styles from './FormInput.module.css';

const FormInput = ({ label, name, ...props }) => {
  const { register, errors } = useFormContext();

  return (
    <div className={styles.wrapper}>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        ref={register}
        {...props}
        className={styles.input}
        autoComplete='off'
      />
      <div className={styles.error}>{errors && errors[name]?.message}</div>
    </div>
  );
};

export default memo(FormInput);
