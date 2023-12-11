import Config from "./Config";
const baseUrl = Config.baseUrl;

async function getFilteredProperties(location, checkIn, checkOut, pageNumber, pageSize) 
{
    const token = localStorage.getItem('token'); // Retrieve the JWT token from localStorage
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`, // Include the token in the Authorization header
    };
  
    const url = `${baseUrl}/properties?location=${location}&checkIn=${checkIn}&checkOut=${checkOut}&page=${pageNumber}&size=${pageSize}`;
  
    try
    {
      const response = await fetch(url,{
        method : 'GET',
        headers : headers,
      })
      return response;
    }
    catch(error)
    {
      console.log("API error getFIlteredProperties(...)")
      throw error;
    }
  
  }


const PropertyAPI = {
    
    getFilteredProperties,
    

};

export default PropertyAPI;