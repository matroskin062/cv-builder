import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setEducation } from '../../ducks/education';
import Button from '../Button/Button';
import Form from '../Form/Form';
import FormInput from '../FormInput/FormInput';
import { educationSelector } from './Education.selector';
import { schema } from './Education.validation';

const Education = () => {
  const dispatch = useDispatch();
  const education = useSelector(educationSelector);

  const onSubmit = (data) => {
    console.log('here');
    dispatch(setEducation(data));
  };

  return (
    <div>
      <Link to='/cv'>Go to CV</Link>
      <Form onSubmit={onSubmit} schema={schema}>
        <FormInput type='text' label='Name' name='name' />
        <FormInput type='text' label='Study Program' name='program' />
        <FormInput type='month' label='Start Date' name='start' />
        <FormInput type='month' label='End Date' name='end' />
        <Button type='submit'>Add</Button>
      </Form>
      {education.length &&
        education.map((el) => <p key={el.name}>{el.name}</p>)}
    </div>
  );
};

export default Education;
