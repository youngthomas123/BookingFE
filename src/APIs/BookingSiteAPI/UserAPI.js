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

async function updateUserById(id, phoneNumber, email, bio, profilePic) 
{
  const token = localStorage.getItem('token');
  const formData = new FormData();

  formData.append('phoneNumber', phoneNumber);
  formData.append('email', email);
  formData.append('bio', bio);
  formData.append('imageFile', profilePic); 

  const url = `${baseUrl}/users/${id}`;
  const headers = {
    Authorization: `Bearer ${token}`, // Include the token in the Authorization header
  };
  try 
  {
    const response = await fetch(url, {
      method: 'PUT',
      headers: headers,
      body: formData,
    });

    return response;
  } 
  catch (error) 
  {
    console.log('API error updateUserById()', error);
    throw error;
  }
}

async function updateUserStatus(userId, status)   // to ban or unban users
{
  const token = localStorage.getItem('token');
  const url = `${baseUrl}/users/timeout/${userId}?status=${status}`;
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`, // Include the token in the Authorization header
  };
  try
  {
    const response = await fetch(url, {
      method : 'PUT',
      headers : headers,
    });

    return response;

  }
  catch(error)
  {
    console.log("API error updateUserStatus()")
    throw error;
  }

}




const UserAPI = {
  getAllUsers,
  getUserById,
  signIn,
  updateUserById,
  updateUserStatus,
};

export default UserAPI;


