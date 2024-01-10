import { useNavigate } from 'react-router-dom';
import { Container, Grid, Typography, Card, CardMedia, CardActions, Button, Box,  } from '@mui/material';
import { useEffect, useState } from 'react';
import PropertyAPI from '../APIs/BookingSiteAPI/PropertyAPI';
import UserHelper from "../util/UserHelper"


export default function LandLordPage() 
{
  

  const [properties, setProperties] = useState([])

  const user = UserHelper.getUserFromToken();


  
  

  useEffect(()=>{
    // call the api to get all the landlords properties
    //set to state
    
    PropertyAPI.getLandlordPropertiesById(user.userId)
    .then((response)=>{
      if(response.ok)
      {
        response.json()
        .then((data)=>{
          setProperties(data.properties);
          console.log(data.properties);
        })
      }
      else if (response.status ==403)
      {
        console.log("403");
      }
    })
    .catch((error)=>{
      console.log("error : "+error)
    })

    


  },[])

  const navigate = useNavigate();

  function handleEnlistButtonClick(propertyId)
  {
    //enlist button
    const status = "enlist";
    console.log("propertyId : "+propertyId + " status : "+status);
    PropertyAPI.updatePropertyStatus(propertyId, status)
    .then((response)=>{
      if(response.ok)
      {
        console.log("updated status");
        window.location.reload(); // Refresh the page
      }
      else
      {
        console.log(response.status);
      }
    })
    .catch((error)=>{
      console.log("error : "+error);
     })
  
  }

  function handleDelistButtonClick(propertyId)
  {
    //delist button
    const status = "delist";
    console.log("propertyId : "+propertyId + " status : "+status);
    
   PropertyAPI.updatePropertyStatus(propertyId,status)
   .then((response)=>{
    if(response.ok)
    {
      console.log("updated status");
      window.location.reload(); // Refresh the page
      
    }
    else
    {
      console.log(response.status);
    }
   })
   .catch((error)=>{
    console.log("error : "+error);
   })
  }

  function handleRemoveButtonClick(propertyId)
  {
    //remove button
    PropertyAPI.deletePropertyById(propertyId)
    .then((response)=>{
      if(response.ok)
      {
        console.log("Property deleted successfully");
        window.location.reload(); // Refresh the page
      }
      else
      {
        console.log(response.status);
      }
    })
    .catch((error)=>{
      console.log("error : "+ error);
    })
  }

  function handleCreateNewEnlistingButtonClick()
  {
    navigate('/enlistProperty');
  }

  const hasProperties = properties.length > 0;

  const renderProperties = () => {
    if (!hasProperties) {
      return (
        <Typography variant="body1">
          You don't have any properties enlisted.
        </Typography>
      );
    }
    

    return properties.map((property) => (
        <Grid item xs={12} md={6} lg={4} key={property.id}>
        <Box mb={2}>
          <Card>
            <CardMedia
              component="img"
              width="200"
              height="150"
              image={property.mainPhoto}
              alt={property.propertyName}
            />
            <Typography variant="subtitle1" align="center" gutterBottom>
              {property.propertyName}
            </Typography>
            <CardActions>
              <Button size="small" variant="outlined" color='success' disabled={property.enlisted} onClick={()=> handleEnlistButtonClick(property.id)}>
                Enlist
              </Button>
              <Button size="small" variant="outlined" color='error' disabled={!property.enlisted} onClick={() => handleDelistButtonClick(property.id)}>
                Delist
              </Button>
              <Button size="small" variant="outlined" color='info' disabled={!(!property.enlisted && !property.outstandingBooking)} onClick={()=>handleRemoveButtonClick(property.id)}>
                Remove
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Grid>
    ));
  };


  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={9}>
          
          <Typography variant="h4" gutterBottom sx={{ marginBottom: 2 }}>
            My Properties
          </Typography>

          <Box mb={4}>
            {/* Spacing here */}
          </Box>

          
          {/*some spacing here */ }
          <Grid container spacing={3}>
          {renderProperties()}
          </Grid>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h6" gutterBottom>
              Actions
            </Typography>
            
            <Button variant="contained" color="primary" onClick={handleCreateNewEnlistingButtonClick}>
              Create new enlisting
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );


}






