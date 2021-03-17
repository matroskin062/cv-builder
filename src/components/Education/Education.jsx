import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editEducation, setEducation } from '../../ducks/education';
import Button from '../Button/Button';
import { schema } from '../Education/Education.validation';
import Form from '../Form/Form';
import FormInput from '../FormInput/FormInput';
import { educationSelector } from './Education.selector';
import styles from './Education.module.css';
import { useHistory } from 'react-router';

const Education = () => {
  const dispatch = useDispatch();
  const education = useSelector(educationSelector);
  const [showEditForm, setShowEditForm] = useState(false);
  const [showAddForm, setShowAddForm] = useState(true);
  const [editData, setEditData] = useState();

  const submitAdd = (data) => {
    dispatch(setEducation(data));
  };

  const submitEdit = (data) => {
    const editedEducation = {
      ...data,
      id: editData.id,
    };
    dispatch(editEducation(editedEducation));
    setShowEditForm(false);
    setShowAddForm(true);
  };

  const editMode = (id) => {
    setShowEditForm(true);
    setShowAddForm(false);
    setEditData(education.find((ed) => ed.id === id));
  };

  const cancel = () => {
    setShowAddForm(true);
    setShowEditForm(false);
  };

  return (
    <div className={styles.wrapper}>
      <div>
        {showAddForm && (
          <>
            <h1>Add Education</h1>
            <Form onSubmit={submitAdd} schema={schema}>
              <FormInput type='text' name='name' label='name' />
              <FormInput type='text' name='program' label='program' />
              <FormInput type='month' name='start' label='start' />
              <FormInput type='month' name='end' label='end' />
              <Button type='submit'>Add</Button>
            </Form>
          </>
        )}
        {showEditForm && (
          <>
            <h1>Edit Education</h1>
            <Form onSubmit={submitEdit} defaultValues={editData}>
              <FormInput type='text' name='name' label='name' />
              <FormInput type='text' name='program' label='program' />
              <FormInput type='month' name='start' label='start' />
              <FormInput type='month' name='end' label='end' />
              <div className={styles.btnGroup}>
                <Button type='submit'>Edit</Button>
                <Button handler={cancel}>Cancel</Button>
              </div>
            </Form>
          </>
        )}
      </div>
      <div>
        {education.length > 0 &&
          education.map((ed) => (
            <div key={ed.id} className={styles.eduItem}>
              <div className={styles.eduInfo}>
                <p className={styles.eduName}>{ed.name}</p>
                <p>{ed.program}</p>
                <p>
                  {ed.start} - {ed.end}
                </p>
              </div>
              <div>
                <Button handler={() => editMode(ed.id)}>Edit</Button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Education;
