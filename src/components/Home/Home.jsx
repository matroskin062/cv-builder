import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to CV Builder!</h1>
      <Link to='common'>Let's start!</Link>
    </div>
  );
};

export default Home;
