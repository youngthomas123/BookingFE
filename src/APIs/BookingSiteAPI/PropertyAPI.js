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

async function createPropertyEnlisting(name, description, location, price, mainPhoto, otherPhotos)
{
  const token = localStorage.getItem('token');
  const formData = new FormData();

  formData.append('name', name);
  formData.append('description', description);
  formData.append('location', location);
  formData.append('pricePerNight', price); 
  formData.append('mainPhoto', mainPhoto);
  
  // Append multiple files for otherPhotos without an index
  otherPhotos.forEach(file => {
  formData.append('otherPhotos', file);
  });


  const url = `${baseUrl}/properties`;
  const headers = {
    Authorization: `Bearer ${token}`, // Include the token in the Authorization header
  };
  try 
  {
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: formData,
    });

    return response;
  } 
  catch (error) 
  {
    console.log('API error createPropertyEnlisting()', error);
    throw error;
  }

}

async function getPropertyById(id)
{
  const token = localStorage.getItem('token');
  const url = `${baseUrl}/properties/${id}`;
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
    console.log("API error getPropertyById()")
    throw error;
  }

}

async function getLandlordPropertiesById(id)
{
  const token = localStorage.getItem('token');
  const url = `${baseUrl}/properties/landlord/${id}`;
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
    console.log("API error getLandlordPropertiesById()")
    throw error;
  }
}

async function updatePropertyStatus(propertyId, status)
{
  const token = localStorage.getItem('token'); // Retrieve the JWT token from localStorage
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`, // Include the token in the Authorization header
    };
  
    const url = `${baseUrl}/properties/${propertyId}?status=${status}`;
  
    try
    {
      const response = await fetch(url,{
        method : 'PUT',
        headers : headers,
      })
      return response;
    }
    catch(error)
    {
      console.log("API error updatePropertyStatus()")
      throw error;
    }

}


const PropertyAPI = {
    
    getFilteredProperties,
    createPropertyEnlisting,
    getPropertyById,
    getLandlordPropertiesById,
    updatePropertyStatus
    

};

export default PropertyAPI;