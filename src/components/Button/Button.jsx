import React from 'react';
import classNames from 'classnames';
import styles from './Button.module.css';

const Button = ({ type, children, handler, variant }) => {
  return (
    <div className={styles.container}>
      <button
        type={type}
        onClick={handler}
        className={classNames(styles.button, {
          [styles.deleteBtn]: variant === 'delete',
          [styles.addBtn]: variant === 'add',
        })}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
