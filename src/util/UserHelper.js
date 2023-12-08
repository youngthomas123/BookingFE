import { jwtDecode } from "jwt-decode";

function getUserFromToken()
{
    const token = localStorage.getItem('token');
    if(token)
    {
        const decodedToken = jwtDecode(token);
        return {
          username: decodedToken.sub,
          userId: decodedToken.userId,
          role: decodedToken.roles[0],
        };
    }
    else
    return null;
}

function isTokenExpired()
{
    //login to check if jwt token is expired

    const token = localStorage.getItem('token');
    if (!token) {
      // Token does not exist or is invalid
      return true;
    }
  
    try {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp) {
        // Get the expiration timestamp from the token
        const expirationTime = decodedToken.exp * 1000; // Convert to milliseconds
  
        // Get the current time in milliseconds
        const currentTime = Date.now();
  
        // Check if the token has expired
        return currentTime >= expirationTime;
      } else {
        // 'exp' claim is missing in the token
        return true;
      }
    } catch (error) {
      // Error decoding token or invalid token format
      return true;
    }
}
const UserHelper =
{
    getUserFromToken,
    isTokenExpired,

};

export default UserHelper