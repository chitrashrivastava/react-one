import React, { useEffect, useState } from 'react';
import styles from './App.module.css'; // Importing CSS module with styles object
import Heading from './Head';

const App = () => {
  const [username, setUsername] = useState("Chitra");
  const [password, setPassword] = useState("1234");
  
  
  const handleChangeusername = (e) => {
    setUsername(e.target.value); // Update the username state with the input value
    console.log(e.target.value); 
  };
const handleChangepassword=(e)=>{
  setPassword(e.target.value)
  console.log(e.target.value)
}
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e)
    console.log(username),
    console.log(password)
  };


  return (
    <>
      <h1 className={styles.heading}>Hi there</h1> 
      <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={handleChangeusername} />
        <input type="text" value={password} onChange={handleChangepassword} />

        <button type="submit">Submit</button>
      </form>
        
    </>
  );
};

export default App;
