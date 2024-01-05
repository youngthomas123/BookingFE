import { 
    Container,
    Typography,
    TextField,
    Button,
    Grid,
    Card,
    CardContent,
    Divider,
  } from '@mui/material';

import { useState } from 'react';
import UserHelper from '../util/UserHelper';
import { useNavigate } from 'react-router-dom';
import { useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';

export default function BookingPage()
{
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');

  const user = UserHelper.getUserFromToken();
  const {userId} = useParams();                    //route parameter userId
  const location = useLocation();
  const { state } = location;
  const navigate = useNavigate();

 


  const initialPropertyId = state?.property.id ?? '';
  const initialName = state?.property.name ?? '';
  const initialLocation = state?.property.location ?? '';
  const initialPrice = state?.property.pricePerNight ?? '';
  const initialCheckIn = state?.checkIn ?? '';
  const initialCheckOut = state?.checkOut ?? '';


  const [bookProperty, setBookProperty] = useState({
    id : initialPropertyId,
    name : initialName,
    location : initialLocation,
    price : initialPrice,
    checkin : initialCheckIn,
    checkout : initialCheckOut
  })

  useEffect(() => {
    
    if (bookProperty.id =="") 
    {
      navigate('/unAuthorised');
    }
  }, []);



  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(bookProperty);
    
    if(bookProperty.id != "" && bookProperty.checkin!="" && bookProperty.checkout !="")
    {
        console.log("booked");
    }
    else{
        console.log("fail");
    }
  };

  
    return (
        <Container maxWidth="md" style={{ marginTop: '20px' }}>
          <Typography variant="h4" align="center" gutterBottom>
          Confirm and pay
          </Typography>
          <Card variant="outlined">
            <CardContent>
              <form onSubmit={handleFormSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Card Number"
                      variant="outlined"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="Expiry Date"
                      variant="outlined"
                      value={expiryDate}
                      onChange={(e) => setExpiryDate(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="CVV"
                      variant="outlined"
                      value={cvv}
                      onChange={(e) => setCVV(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Cardholder Name"
                      variant="outlined"
                      value={cardHolderName}
                      onChange={(e) => setCardHolderName(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                      Confirm Payment
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Container>
      );

  }

  


