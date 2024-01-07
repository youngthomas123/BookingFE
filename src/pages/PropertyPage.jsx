import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropertyAPI from "../APIs/BookingSiteAPI/PropertyAPI";

import { Typography, Grid, Card, CardContent, CardMedia, Container, Button, Box} from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import UserHelper from '../util/UserHelper';


export default function PropertyPage()
{
  //test
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const CheckinDate = queryParams.get('checkin');
  const CheckoutDate = queryParams.get('checkout');
  const [checkIn, setCheckIn] = useState(CheckinDate);
  const [checkOut, setCheckOut] = useState(CheckoutDate);


  const {propertyId} = useParams();

  const navigate = useNavigate();
  const user = UserHelper.getUserFromToken();


  
  

  const [property, setProperty] = useState({
    id: 0,
    name: 'placeholder name',
    description: 'placeholder description',
    location: 'placeholder location',
    pricePerNight: 0,
    mainPhoto :'http://localhost:3000/Images/HousePlaceHolder',
    photos: [
      'http://localhost:3000/Images/HousePlaceHolder',
      'http://localhost:3000/Images/HousePlaceHolder',
      'http://localhost:3000/Images/HousePlaceHolder',
      'http://localhost:3000/Images/HousePlaceHolder',
      'http://localhost:3000/Images/HousePlaceHolder',
      'http://localhost:3000/Images/HousePlaceHolder',
      
    ],
    hasConflictingBookings : true

    
    
 

  });// add random paceholder



    

    useEffect(()=>
    {
      PropertyAPI.getPropertyById(propertyId, checkIn, checkOut)
      .then((response)=>
      {
        if(response.ok)
        {
          response.json()
          .then((data)=>
          {
            
            setProperty({
              ...property,
              id : data.propertyPageDTO.propertyId,
              name : data.propertyPageDTO.name,
              description : data.propertyPageDTO.description,
              location : data.propertyPageDTO.location,
              pricePerNight : data.propertyPageDTO.pricePerNight,
              mainPhoto : data.propertyPageDTO.mainPhoto,
              photos : data.propertyPageDTO.otherPhotos,
              hasConflictingBookings : data.propertyPageDTO.hasConflictingBookings
            })
            console.log(checkIn);
            console.log(checkOut);
          })
          
        }
        else
        {
          console.log(response.status);

        }
      })
      .catch((error)=>{
        console.log(error);
      }
      )
      
      

    },[])

    function handleBookNowButtonClick()
    {
      navigate(`/booking`,{
        state :{
          property : property,
          checkIn : checkIn,
          checkOut : checkOut
        }
      });

    }




    return (
      <Container maxWidth="lg" style={{ marginTop: '20px' }}>
        <Typography variant="h4" gutterBottom>
          {property.name}
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Card style={{ marginBottom: '20px' }}>
              <CardMedia
                component="img"
                height="400"
                image={property.mainPhoto}
                alt={property.name}
              />
            </Card>
            <Card style={{ marginBottom: '10px' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Description:
                </Typography>
                <Typography variant="body1">
                  {property.description}
                </Typography>
              </CardContent>
            </Card>
            <Card style={{ marginBottom: '10px' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Location:
                </Typography>
                <Typography variant="body1">
                  {property.location}
                </Typography>
              </CardContent>
            </Card>
            <Card style={{ marginBottom: '20px' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Price per Night:
                </Typography>
                <Typography variant="body1">
                  {property.pricePerNight}
                </Typography>
              </CardContent>
            </Card>
            <Card variant="outlined">
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Booking Information
        </Typography>
        <Box display="flex" flexDirection="column">
          <Typography variant="body1" gutterBottom>
            <strong>Check-In:</strong> {checkIn}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Check-Out:</strong> {checkOut}
          </Typography>
          <Button
            size="small"
            variant="contained"
            disabled={property.hasConflictingBookings}
            color="primary"
            onClick={handleBookNowButtonClick}
          >
            Book Now
          </Button>
        </Box>
      </CardContent>
    </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid container spacing={2}>
              {property.photos.map((photo, index) => (
                <Grid item xs={6} key={index}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="200"
                      image={photo}
                      alt={`Property ${index}`}
                    />
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    );

  
  
    
  
  
  

}