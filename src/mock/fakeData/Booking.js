import dayjs from "dayjs"
const bookings = [
  {
    tenantId : 1,
    propertyId : 1,
    checkIn : dayjs("18/11/2023", 'DD/MM/YYYY'),
    checkOut : dayjs("20/11/20203", 'DD/MM/YYYY'), 
   },
   {
    tenantId : 2,
    propertyId : 2,
    checkIn : dayjs("21/11/2023"),
    checkOut : dayjs("23/11/20203"),

   },
   {
    tenantId : 3,
    propertyId : 3,
    checkIn : dayjs("18/11/2023"),
    checkOut : dayjs("26/11/20203"),

   },
   
    
]

export {bookings};
    
