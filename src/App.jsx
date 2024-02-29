import React, { useState } from 'react';
import styles from './App.module.css'; // Importing CSS module with styles object
import Heading from './Head';

const App = () => {
  const [username, setUsername] = useState("Chitra");
  
  const handleChange = (e) => {
    setUsername(e.target.value); // Update the username state with the input value
    console.log(e.target.value); 
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e)
    console.log(username)
  };


  return (
    <>
      <h1 className={styles.heading}>Hi there</h1> 
      <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      <Heading />      
    </>
  );
};

export default App;
