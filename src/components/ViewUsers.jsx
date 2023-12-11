import React, { useState, useEffect } from 'react';
import UserAPI from "../APIs/BookingSiteAPI/UserAPI";
import { Construction } from '@mui/icons-material';



function ViewUsers() {
  const [users, setUsers] = useState([null]);
  const [error, setError] = useState(null);

  useEffect(() => {
   
    UserAPI.getAllUsers()
    .then((response)=>
    {
      if(response.ok)
      {
        response.json()
        .then((data)=>
        {
          setUsers(data);
        })
      }
      else if(response.status ==401)
      {
        console.log("401")
      }
      
    })
    .catch((error)=>
    {
      console.log("Error from API in viewUsers component" + error);
      setError(error);
    })

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
