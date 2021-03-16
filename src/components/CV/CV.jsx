import React from 'react';
import { useSelector } from 'react-redux';
import { cvSelector } from './CV.selector';
import styles from './CV.module.css';

const CV = () => {
  const { commonInfo, education } = useSelector(cvSelector);

  return (
    <div className={styles.wrapper}>
      <h1>{commonInfo.position}</h1>
      <div className={styles.grid}>
        {commonInfo && (
          <div className={styles.common}>
            <p>
              {commonInfo.firstName} {commonInfo.lastName}
            </p>
            <p>{commonInfo.phone}</p>
            <p>{commonInfo.email}</p>
          </div>
        )}
        {education.length && (
          <div className={styles.education}>
            {education.map((ed) => (
              <div>
                <p>{ed.name}</p>
                <p>{ed.program}</p>
                <p>{ed.start}</p>
                <p>{ed.end}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CV;
