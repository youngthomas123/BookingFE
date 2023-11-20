import {properties} from "../fakeData/Property"
import {bookings} from "../fakeData/Booking"
import dayjs from 'dayjs';


async function getProperties(from, to)
{
    const data = properties.slice(from, to);


    return (
        {
            totalCount : properties.length,
            properties : data,

        }
    )
    
}

async function getFilteredProperties(location, checkIn, checkOut, from, to) 
{
    const validData = properties.filter((element) =>
      element.location.includes(location)
    );
  
    const AlreadyBookedProperties = bookings.filter(
      (element) =>
        dayjs(element.checkIn).isBefore(checkOut) &&
        dayjs(element.checkOut).isAfter(checkIn)
    );
  
    const AlreadyBookedPropertyIds = AlreadyBookedProperties.map(
      (property) => property.propertyId
    );
  
    const FilteredProperties = validData.filter(
      (element) => !AlreadyBookedPropertyIds.includes(element.propertyId)
    );
  
    const PaginatedFilteredProperties = FilteredProperties.slice(from, to);
  
    return {
      totalCount: FilteredProperties.length,
      properties: PaginatedFilteredProperties,
    };
}


const FakePropertyAPI = {
    getProperties,
    getFilteredProperties,

};

export default FakePropertyAPI;