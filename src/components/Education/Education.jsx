import { FieldArray, Form, Formik, getIn } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { setEducation } from '../../ducks/education';
import { educationSchema } from '../../validation/Education.shema';
import Button from '../Button/Button';
import FormInput from '../FormInput/FormInput';
import PageTitle from '../PageTitle/PageTitle';
import styles from './../../styles/Form.module.css';
import { educationSelector } from './Education.selector';

const Education = () => {
  const education = useSelector(educationSelector);

  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (data) => {
    dispatch(setEducation(data.education));
    history.push('/experience');
  };

  const goBack = () => {
    history.goBack();
  };

  return (
    <div className={styles.container}>
      <PageTitle>Education Info</PageTitle>
      <Formik
        initialValues={{ education }}
        validationSchema={educationSchema}
        onSubmit={onSubmit}>
        {({ values, touched, errors }) => (
          <Form>
            <FieldArray name='education'>
              {({ remove, push }) => {
                return (
                  <>
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
                          <Button
                            variant='delete'
                            type='button'
                            handler={() => remove(index)}>
                            Remove
                          </Button>
                        </div>
                      ))}
                    {errors.education && (
                      <div className={styles.formError}>
                        {errors.education.message}
                      </div>
                    )}
                    <Button
                      type='button'
                      variant='add'
                      size='full'
                      handler={() =>
                        push({
                          name: '',
                          program: '',
                          start: '',
                          end: '',
                        })
                      }>
                      Add more
                    </Button>
                  </>
                );
              }}
            </FieldArray>
            <div className={styles.btnGroup}>
              <Button type='button' handler={goBack}>
                👈🏻 Previous step
              </Button>
              <Button type='submit'>Next Step 👉🏻</Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Education;
