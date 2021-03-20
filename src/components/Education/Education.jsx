import { FieldArray, Form, Formik, getIn } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEducation } from '../../ducks/education';
import Button from '../Button/Button';
import FormInput from '../FormInput/FormInput';
import { educationSelector } from './Education.selector';
import { educationSchema } from '../../validation/Education.shema';
import { useHistory } from 'react-router';

import styles from './../../styles/Form.module.css';
import PageTitle from '../PageTitle/PageTitle';

const Education = ({ prevData }) => {
  const education = useSelector(educationSelector);

  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(setEducation(data.education));
    history.push('/experience');
  };

  useEffect(() => {
    if (Object.values(prevData).every((el) => el === null || el === '')) {
      history.push('/');
    }
  }, []);

  return (
    <div>
      <PageTitle>Education Info</PageTitle>
      <Formik
        initialValues={{ education }}
        validationSchema={educationSchema}
        onSubmit={onSubmit}
      >
        {({ values, touched, errors }) => (
          <Form>
            <FieldArray name='education'>
              {({ remove, push }) => {
                return (
                  <div>
                    {values.education.length > 0 &&
                      values.education.map((_, index) => (
                        <div key={index} className={styles.formContainer}>
                          <FormInput
                            name={`education.${index}.name`}
                            label='Name'
                            type='text'
                            touched={getIn(touched, `education[${index}].name`)}
                            error={getIn(errors, `education[${index}].name`)}
                            value={values.education[index].name}
                          />
                          <FormInput
                            name={`education.${index}.program`}
                            label='Program'
                            type='text'
                            touched={getIn(
                              touched,
                              `education[${index}].program`
                            )}
                            error={getIn(errors, `education[${index}].program`)}
                            value={values.education[index].program}
                          />
                          <FormInput
                            name={`education.${index}.start`}
                            label='Start date'
                            type='month'
                            touched={getIn(
                              touched,
                              `education[${index}].start`
                            )}
                            error={getIn(errors, `education[${index}].start`)}
                            value={values.education[index].start}
                          />
                          <FormInput
                            name={`education.${index}.end`}
                            label='End date'
                            type='month'
                            touched={getIn(touched, `education[${index}].end`)}
                            error={getIn(errors, `education[${index}].end`)}
                            value={values.education[index].end}
                          />
                          <Button type='button' handler={() => remove(index)}>
                            Remove
                          </Button>
                        </div>
                      ))}
                    <Button
                      type='button'
                      handler={() =>
                        push({ name: '', program: '', start: '', end: '' })
                      }
                    >
                      Add more
                    </Button>
                  </div>
                );
              }}
            </FieldArray>
            <Button type='submit'>Submit</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Education;
