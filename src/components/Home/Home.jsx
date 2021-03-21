import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to CV Builder!</h1>
      <p>Here you can quickly create a CV just in 3 steps</p>
      <Link to='/common'>Let's start!</Link>
    </div>
  );
};

export default Home;
