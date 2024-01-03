import { useNavigate } from 'react-router-dom';
import { Container, Grid, Typography, Card, CardMedia, CardActions, Button, Box,  } from '@mui/material';
import { useEffect, useState } from 'react';

export default function LandLordPage() 
{
  const testProperties = [
    {
      id: 1,
      name: 'Property 1',
      mainPhoto: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Property 2',
      mainPhoto: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Property 3',
      mainPhoto: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      name: 'Property 4',
      mainPhoto: 'https://via.placeholder.com/150',
    },
    {
      id: 5,
      name: 'Property 5',
      mainPhoto: 'https://via.placeholder.com/150',
    },
    
  ];

  const [properties, setProperties] = useState([])
  
  

  useEffect(()=>{
    // call the api to get all the landlords properties
    //set to state
    setProperties(testProperties);


  },[])

  const navigate = useNavigate();

  function handleEnlistButtonClick()
  {
    //enlist button
  }

  function handleDelistButtonClick()
  {
    //delist button
  }

  function handleRemoveButtonClick()
  {
    //remove button
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
              alt={property.name}
            />
            <Typography variant="subtitle1" align="center" gutterBottom>
              {property.name}
            </Typography>
            <CardActions>
              <Button size="small" variant="outlined" color='success' disabled>
                Enlist
              </Button>
              <Button size="small" variant="outlined" color='error'>
                Delist
              </Button>
              <Button size="small" variant="outlined" color='info'>
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






