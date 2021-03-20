import React from 'react';
import { Field } from 'formik';
import classNames from 'classnames';

import styles from './FormInput.module.css';

const FormInput = ({
  name,
  label,
  type,
  placeholder,
  error,
  value,
  touched,
}) => {
  return (
    <div>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <Field
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        className={classNames(styles.input, {
          [styles.error]: error && touched,
        })}
      />
      {error && touched && <div className={styles.errorText}>{error}</div>}
    </div>
  );
};

export default FormInput;
