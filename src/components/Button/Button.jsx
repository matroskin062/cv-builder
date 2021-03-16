import React from 'react';

import styles from './Button.module.css';

const Button = ({ type, children, handler }) => {
  return (
    <div>
      <button type={type} onClick={handler} className={styles.button}>
        {children}
      </button>
    </div>
  );
};

export default Button;
