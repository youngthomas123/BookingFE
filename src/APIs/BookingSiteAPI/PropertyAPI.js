const baseUrl = 'http://localhost:8080';

async function getFilteredProperties(location, checkIn, checkOut, pageNumber, pageSize)
{
    const response = await fetch(`${baseUrl}/properties?location=${location}&checkIn=${checkIn}&checkOut=${checkOut}&page=${pageNumber}&size=${pageSize}`);
    return response.json();
}



const PropertyAPI = {
    
    getFilteredProperties,
    

};

export default PropertyAPI;