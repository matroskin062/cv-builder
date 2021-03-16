import React, { useEffect } from 'react';
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
    dispatch(setEducation(data));
  };

  useEffect(() => {
    education.length && console.log(education);
  }, [education]);
  return (
    <div>
      <h1>Education</h1>
      <Form onSubmit={onSubmit} schema={schema}>
        <FormInput type='text' label='Name' name='name' />
        <FormInput type='text' label='Study Program' name='program' />
        <FormInput type='month' label='Start Date' name='start' />
        <FormInput type='month' label='End Date' name='end' />
        <Button type='submit'>Add</Button>
      </Form>
      <Link to='/experience'>Next step</Link>
      {education.length && education.map((el) => <p key={el.id}>{el.name}</p>)}
    </div>
  );
};

export default Education;
