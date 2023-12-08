import Config from "./Config";

const baseUrl = Config.baseUrl;



async function login(username, password) 
{
    const response = await fetch(`${baseUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({   
        username: username,
        password: password
      })
    });
   
  
    if (response.ok) 
    {
      const data = await response.json(); 
      localStorage.setItem('token', data.accessToken);
      return "success";
      

    } else 
    {
      console.error('Login failed:', response);
      return "fail";
    }
}

const LoginAPI = {
    login,
};

export default LoginAPI;