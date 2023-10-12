import React, { useState, useEffect } from 'react';
import UserAPI from "../APIs/BookingSiteAPI/UserAPI";



function ViewUsers() {
  const [users, setUsers] = useState([null]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const usersData = await UserAPI.getAllUsers(); // Fixed the function call
        setUsers(usersData);
      } catch (error) {
        setError(error);
      }
    }

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
    <h1>User profiles as JSON:</h1>
    <pre>{JSON.stringify(users, null, 2)}</pre>
  </div>
  );
}

export default ViewUsers;
