import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FakePropertyAPI from '../mock/fakeAPI/FakePropertyAPI';
import { Typography, Grid, Card, CardContent, CardMedia, Container } from '@mui/material';


export default function PropertyPage()
{

  const {propertyId} = useParams();

  const [property, setProperty] = useState({
    propertyId: 1,
    name: 'placeholder name',
    description: 'placeholder description',
    location: 'placeholder location',
    pricePerNight: 'placeholder price',
    mainPhoto :'https://via.placeholder.com/600x400?text=Main+Image',
    photos: [
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
      
    ],
    
 

  });// add random paceholder

    

    useEffect(()=>
    {
      FakePropertyAPI.getPropertyById(propertyId).then((response)=>{
        if(response!=null)
        {
          setProperty(response);
          console.log(response);

        }
        
      });
      
      

    },[])




    return (
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          {property.name}
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Card>
              <CardMedia
                component="img"
                height="400"
                image={property.mainPhoto}
                alt={property.name}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid container spacing={2}>
              {property.photos.map((photo, index) => (
                <Grid item xs={6} key={index}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="100"
                      image={photo}
                      alt={`Property ${index}`}
                    />
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={8}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Description:
                    </Typography>
                    <Typography variant="body1" paragraph>
                      {property.description}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                      Location:
                    </Typography>
                    <Typography variant="body1" paragraph>
                      {property.location}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                      Price per Night:
                    </Typography>
                    <Typography variant="body1" paragraph>
                      {property.priceForNight}
                    </Typography>
                    {/* Add more property details here */}
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                {/* Add content for the small area */}
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Additional Information:
                    </Typography>
                    <Typography variant="body1" paragraph>
                      Additional details here...
                    </Typography>
                    {/* Add more details for the small area */}
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    );
  
  
  

}