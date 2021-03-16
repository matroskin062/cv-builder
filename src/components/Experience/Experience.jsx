import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setExperienceData } from '../../ducks/experience';
import Button from '../Button/Button';
import Form from '../Form/Form';
import FormInput from '../FormInput/FormInput';
import { schema } from './Experience.validation';
import styles from './Experience.module.css';

const Experience = () => {
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(setExperienceData(data));
  };

  return (
    <div className={styles.experience}>
      <h1>Work Experience</h1>
      <Form onSubmit={onSubmit} schema={schema}>
        <FormInput type='text' label='Comapny' name='company' />
        <FormInput type='text' label='Position' name='position' />
        <FormInput type='date' label='Start date' name='start' />
        <FormInput type='date' label='End date' name='end' />
        <Button type='submit'>Add</Button>
      </Form>
      <Link to='/cv'>Finish</Link>
    </div>
  );
};

export default Experience;
