import Config from "./Config";

const baseUrl = Config.baseUrl;



async function login(username, password)
 {
  const url = `${baseUrl}/login`;
  const body = JSON.stringify({ username, password });
  const headers = {
    'Content-Type': 'application/json',
  };

  try
  {
    const response = await fetch(url,{
      method: 'POST',
      headers,
      body,
    });
    return response;
  }
  catch(error)
  {
    console.log("API error login(...)");
    throw error;
  }

}

const LoginAPI = {
  login,
};

export default LoginAPI;
