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
import BookingAPI from '../APIs/BookingSiteAPI/BookingAPI';
import FeedbackSnackbar from '../components/FeedbackSnackbar'


export default function BookingPage({sendMessage})
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

  const [message, setMessage] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

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
      
        BookingAPI.createBooking(bookProperty.id, bookProperty.checkin, bookProperty.checkout)
        .then((response)=>{
          if(response.ok)
          {
            response.json()
            .then((data)=>{
              console.log("Successfully booked");
              sendMessage({ 'text': "Your property "+bookProperty.name+ " has been booked by "+ user.username, 'to': data.landlordName});
              navigate('/home');

            })
            
          }
          else
          {
            console.log("Failed to book, status : "+response.status);
            setMessage("Failed to book property");
            setOpenSnackbar(true);
          }
        })
        .catch((error)=>{
          console.log(error);
          setMessage("Network error");
          setOpenSnackbar(true);
        });
    }
    else
    {
        console.log("Route data empty");
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
          <FeedbackSnackbar message={message} setOpen={setOpenSnackbar} open={openSnackbar} />
        </Container>
      );

  }

  


