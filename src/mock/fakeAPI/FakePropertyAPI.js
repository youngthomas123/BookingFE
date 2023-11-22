import {properties} from "../fakeData/Property"
import {bookings} from "../fakeData/Booking"
import dayjs from 'dayjs';




// async function getFilteredProperties(location, checkIn, checkOut, from, to) 
// {
//     const validData = properties.filter((element) =>
//       element.location.includes(location)
//     );
  
//     const AlreadyBookedProperties = bookings.filter(
//       (element) =>
//         dayjs(element.checkIn).isBefore(checkOut) &&
//         dayjs(element.checkOut).isAfter(checkIn)
//     );
  
//     const AlreadyBookedPropertyIds = AlreadyBookedProperties.map(
//       (property) => property.propertyId
//     );
  
//     const FilteredProperties = validData.filter(
//       (element) => !AlreadyBookedPropertyIds.includes(element.propertyId)
//     );
  
//     const PaginatedFilteredProperties = FilteredProperties.slice(from, to);
  
//     return {
//       totalCount: FilteredProperties.length,
//       properties: PaginatedFilteredProperties,
//     };
// }

async function getFilteredProperties(location, checkIn, checkOut, pageNumber, pageSize) {
  const data = properties;
  // Simulating an asynchronous API call with a delay using setTimeout
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const validData = data.filter((element) =>
        element.location.includes(location)
      );

      const filteredProperties = validData.slice(
        pageNumber * pageSize,
        pageNumber * pageSize + pageSize
      );

      // Return an object containing both filtered properties and total count
      resolve({
        properties: filteredProperties,
        totalCount: validData.length // Total count of valid data
      });
    }, 500); // Simulating a 500ms delay to mimic asynchronous behavior
  });
}

async function getPropertyById(propertyId)
{
  const data = properties;

  let property = null;
    data.forEach(element => {
      if(element.propertyId==propertyId)
      {
        property = element;
        return;
        
      }
    });

    return property; 
  
  


}




const FakePropertyAPI = {
    
    getFilteredProperties,
    getPropertyById,

};

export default FakePropertyAPI;