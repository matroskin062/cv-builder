import React from 'react';
import { useHistory } from 'react-router';
import { schema } from './CommonInfo.validation';
import { useDispatch, useSelector } from 'react-redux';
import { commonSelector } from './CommonInfo.selector';
import { setCommonData } from '../../ducks/common';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import Form from '../Form/Form';

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
      <Form onSubmit={onSubmit} schema={schema} defaultValues={commonInfo}>
        <FormInput type='text' label='First Name: ' name='firstName' />
        <FormInput type='text' label='Last Name: ' name='lastName' />
        <FormInput type='text' label='Position: ' name='position' />
        <FormInput type='text' label='Phone: ' name='phone' />
        <FormInput type='email' label='E-mail: ' name='email' />
        <Button type='submit'>Go next</Button>
      </Form>
    </div>
  );
};

export default CommonInfo;
