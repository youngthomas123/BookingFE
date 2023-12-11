import Config from "./Config";
const baseUrl = Config.baseUrl;


async function getAllUsers() 
{
  
  const token = localStorage.getItem('token'); // Retrieve the JWT token from localStorage
  const url = `${baseUrl}/users`;
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`, // Include the token in the Authorization header
  };

  try
  {
    const response = await fetch(url, {
      method: 'GET',
      headers: headers,
    });
    return response;
  }
  catch(error)
  {
    console.log("API error getAllUsers()");
    throw error;
  }

}


async function getUserById(id) 
{
  const token = localStorage.getItem('token');
  const url = `${baseUrl}/users/${id}`;
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`, // Include the token in the Authorization header
  };
  try
  {
    const response = await fetch(url, {
      method : 'GET',
      headers : headers,
    });

    return response;

  }
  catch(error)
  {
    console.log("API error getUserById()")
    throw error;
  }

}



async function signIn(username, password, type)  // no auth required
{
  const url = `${baseUrl}/users`; 
  const body = JSON.stringify({ 
    username : username,
    password : password,
    type     : type
  });
  const headers = {
    'Content-Type': 'application/json',
  };

  try
  {
    const response = await fetch(url,{
      method : 'POST',
      headers : headers,
      body : body,
    });

    return response;

  }
  catch(error)
  {
    console.log("API error signIn()");
    throw error;
  }

}



const UserAPI = {
  getAllUsers,
  getUserById,
  signIn,
};

export default UserAPI;


