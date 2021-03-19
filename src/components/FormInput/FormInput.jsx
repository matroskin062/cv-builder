import React from 'react';
import { Field } from 'formik';

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
      <label htmlFor={name}>{label}</label>
      <Field type={type} placeholder={placeholder} value={value} name={name} />
      {error && touched && <div>{error}</div>}
    </div>
  );
};

export default FormInput;
