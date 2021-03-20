import { FieldArray, Form, Formik, getIn } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { experienceSelector } from './Experience.selector';
import { setExperienceData } from './../../ducks/experience';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import { experienceSchema } from '../../validation/Experience.shema';
import { useHistory } from 'react-router';
import PageTitle from '../PageTitle/PageTitle';

import styles from '../../styles/Form.module.css';

const Experience = () => {
  const dispatch = useDispatch();
  const experience = useSelector(experienceSelector);
  const history = useHistory();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(setExperienceData(data.experience));
    history.push('/cv');
  };

  return (
    <div>
      <PageTitle>Work Experience Info</PageTitle>
      <Formik
        onSubmit={onSubmit}
        initialValues={{ experience }}
        validationSchema={experienceSchema}
      >
        {({ values, touched, errors }) => (
          <Form>
            <FieldArray name='experience'>
              {({ remove, push }) => {
                return (
                  <div>
                    {values.experience.length > 0 &&
                      values.experience.map((_, index) => (
                        <div key={index} className={styles.formContainer}>
                          <FormInput
                            name={`experience.${index}.company`}
                            label='Company'
                            type='text'
                            touched={getIn(
                              touched,
                              `experience[${index}].company`
                            )}
                            error={getIn(
                              errors,
                              `experience[${index}].company`
                            )}
                            value={values.experience[index].company}
                          />
                          <FormInput
                            name={`experience.${index}.position`}
                            label='Position'
                            type='text'
                            touched={getIn(
                              touched,
                              `experience[${index}].position`
                            )}
                            error={getIn(
                              errors,
                              `experience[${index}].position`
                            )}
                            value={values.experience[index].position}
                          />
                          <FormInput
                            name={`experience.${index}.start`}
                            label='Start Date'
                            type='date'
                            touched={getIn(
                              touched,
                              `experience[${index}].start`
                            )}
                            error={getIn(errors, `experience[${index}].start`)}
                            value={values.experience[index].start}
                          />
                          <FormInput
                            name={`experience.${index}.end`}
                            label='End Date'
                            type='date'
                            touched={getIn(touched, `experience[${index}].end`)}
                            error={getIn(errors, `experience[${index}].end`)}
                            value={values.experience[index].end}
                          />
                          <Button
                            variant='delete'
                            type='button'
                            handler={() => remove(index)}
                          >
                            Remove
                          </Button>
                        </div>
                      ))}
                    <Button
                      type='button'
                      variant='add'
                      handler={() =>
                        push({ company: '', position: '', start: '', end: '' })
                      }
                    >
                      Add More
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

export default Experience;
