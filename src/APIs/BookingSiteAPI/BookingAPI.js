import Config from "./Config";
const baseUrl = Config.baseUrl;

async function createBooking(propertyId, checkIn, checkOut)
{
    const token = localStorage.getItem('token');
    const url = `${baseUrl}/bookings?propertyId=${propertyId}&checkIn=${checkIn}&checkOut=${checkOut}`;
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`, // Include the token in the Authorization header
    };
    try
    {
      const response = await fetch(url, {
        method : 'POST',
        headers : headers,
      });
  
      return response;
  
    }
    catch(error)
    {
      console.log("API error createBooking()")
      throw error;
    }

}

const BookingAPI = {
    createBooking
}

export default BookingAPI;