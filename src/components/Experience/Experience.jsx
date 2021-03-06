import { FieldArray, Form, Formik, getIn } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import styles from '../../styles/Form.module.css';
import { experienceSchema } from '../../validation/Experience.shema';
import Button from '../Button/Button';
import FormInput from '../FormInput/FormInput';
import PageTitle from '../PageTitle/PageTitle';
import { setExperienceData } from './../../ducks/experience';
import { experienceSelector } from './Experience.selector';

const Experience = () => {
  const dispatch = useDispatch();
  const experience = useSelector(experienceSelector);
  const history = useHistory();

  const onSubmit = (data) => {
    dispatch(setExperienceData(data.experience));
    history.push('/cv');
  };

  const goBack = () => {
    history.goBack();
  };

  return (
    <div className={styles.container}>
      <PageTitle>Work Experience Info</PageTitle>
      <Formik
        onSubmit={onSubmit}
        initialValues={{ experience }}
        validationSchema={experienceSchema}>
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
                            handler={() => remove(index)}>
                            Remove
                          </Button>
                        </div>
                      ))}
                    {errors.experience && (
                      <div className={styles.formError}>
                        {errors.experience.message}
                      </div>
                    )}
                    <Button
                      type='button'
                      variant='add'
                      size='full'
                      handler={() =>
                        push({ company: '', position: '', start: '', end: '' })
                      }>
                      Add More
                    </Button>
                  </div>
                );
              }}
            </FieldArray>
            <div className={styles.btnGroup}>
              <Button type='button' handler={goBack}>
                ???????? Previous step
              </Button>
              <Button type='submit'>Get CV! ????</Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Experience;
