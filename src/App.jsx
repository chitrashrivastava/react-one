import React, { useEffect, useState } from 'react';
import styles from './App.module.css'; // Importing CSS module with styles object
import Heading from './Head';
import axios from 'axios';

const App = () => {
  const [username, setUsername] = useState("Chitra");
  const [password, setPassword] = useState("1234");
  const [info, setInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setInfo(response.data); // Set the state with the data from the response
        setIsLoading(false); // Set isLoading to false when data is fetched
        console.log(response.data); // Log the data retrieved from the API
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false); // Set isLoading to false in case of error
      }
    };

    fetchData(); // Call the async function to fetch data
  }, []);

  const handleChangeUsername = (e) => {
    setUsername(e.target.value); // Update the username state with the input value
    console.log(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <>
      <h1 className={styles.heading}>Hi there</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={handleChangeUsername} />
        <input type="text" value={password} onChange={handleChangePassword} />
        <button type="submit">Submit</button>
      </form>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        info.map((item, index) => (
          <div key={index}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <img src={item.image} alt={item.title} />
          </div>
        ))
      )}
    </>
  );
};

export default App;
