const baseUrl = 'http://localhost:8080';

async function getAllUsers() {
  const response = await fetch(`${baseUrl}/users`);
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


