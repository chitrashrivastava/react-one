import React from 'react';
import styles from './App.module.css'; // Importing CSS module with styles object
import Heading from './Head';

const App = () => {
  return (
    <>
      <h1 className={styles.heading}>Hi there</h1> {/* Applying CSS module class */}
      <Heading />      
    </>
  );
};

export default App;
