import Config from "./Config";
const baseUrl = Config.baseUrl;

async function getAllUsers() {
  const token = localStorage.getItem('token'); // Retrieve the JWT token from localStorage
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`, // Include the token in the Authorization header
  };

  const response = await fetch(`${baseUrl}/users`, {
    method: 'GET',
    headers: headers,
  });

  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }

  return response.json();
}
async function getUserById(id) {
  const response = await fetch(`${baseUrl}/users/${id}`);
  if (!response.ok) {
    throw  Error('Failed to fetch user');
  }
  return response.json();
}



const UserAPI = {
  getAllUsers,
  getUserById,
};

export default UserAPI;


