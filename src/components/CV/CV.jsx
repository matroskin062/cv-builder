import React from 'react';
import { useSelector } from 'react-redux';
import { cvSelector } from './CV.selector';
import styles from './CV.module.css';

const CV = () => {
  const { commonInfo, education, experience } = useSelector(cvSelector);

  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        <div className={styles.header}>
          <h1>
            {commonInfo.firstName} {commonInfo.lastName}
          </h1>
          <h2>{commonInfo.position}</h2>
        </div>
        {commonInfo && (
          <div className={styles.common}>
            <h3>Contacts</h3>
            <p>{commonInfo.phone}</p>
            <p>{commonInfo.email}</p>
          </div>
        )}

        <div className={styles.experience}>
          <h1>Experience</h1>
          {experience.length > 0 &&
            experience.map((ex) => (
              <div key={ex.id} className={styles.content}>
                <p className={styles.contentTitle}>{ex.company}</p>
                <p>{ex.position}</p>
                <p>{`${ex.start} - ${ex.end}`}</p>
              </div>
            ))}
        </div>

        <div className={styles.education}>
          <h1>Education</h1>
          {education.length > 0 &&
            education.map((ed) => (
              <div key={ed.id} className={styles.content}>
                <p className={styles.contentTitle}>{ed.name}</p>
                <p>{ed.program}</p>
                <p>{`${ed.start} - ${ed.end}`}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CV;
