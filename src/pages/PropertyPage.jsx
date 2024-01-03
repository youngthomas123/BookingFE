import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FakePropertyAPI from '../mock/fakeAPI/FakePropertyAPI';
import PropertyAPI from "../APIs/BookingSiteAPI/PropertyAPI";

import { Typography, Grid, Card, CardContent, CardMedia, Container } from '@mui/material';


export default function PropertyPage()
{

  const {propertyId} = useParams();

  const [property, setProperty] = useState({
    Id: 0,
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
    
 

  });// add random paceholder

    

    useEffect(()=>
    {
      PropertyAPI.getPropertyById(propertyId)
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
              photos : data.propertyPageDTO.otherPhotos
            })
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




    // return (
    //   <Container maxWidth="lg" sx={{ mt: 4 }}>
    //     <Typography variant="h4" gutterBottom>
    //       {property.name}
    //     </Typography>
    //     <Grid container spacing={3}>
    //       <Grid item xs={12} md={8}>
    //         <Card>
    //           <CardMedia
    //             component="img"
    //             height="400"
    //             image={property.mainPhoto}
    //             alt={property.name}
    //           />
    //         </Card>
    //       </Grid>
    //       <Grid item xs={12} md={4}>
    //         <Grid container spacing={2}>
    //           {property.photos.map((photo, index) => (
    //             <Grid item xs={6} key={index}>
    //               <Card>
    //                 <CardMedia
    //                   component="img"
    //                   height="100"
    //                   image={photo}
    //                   alt={`Property ${index}`}
    //                 />
    //               </Card>
    //             </Grid>
    //           ))}
    //         </Grid>
    //       </Grid>
    //       <Grid item xs={12}>
    //         <Grid container spacing={3}>
    //           <Grid item xs={12} md={8}>
    //             <Card>
    //               <CardContent>
    //                 <Typography variant="h6" gutterBottom>
    //                   Description:
    //                 </Typography>
    //                 <Typography variant="body1" paragraph>
    //                   {property.description}
    //                 </Typography>
    //                 <Typography variant="h6" gutterBottom>
    //                   Location:
    //                 </Typography>
    //                 <Typography variant="body1" paragraph>
    //                   {property.location}
    //                 </Typography>
    //                 <Typography variant="h6" gutterBottom>
    //                   Price per Night:
    //                 </Typography>
    //                 <Typography variant="body1" paragraph>
    //                   {property.pricePerNight}
    //                 </Typography>
    //                 {/* Add more property details here */}
    //               </CardContent>
    //             </Card>
    //           </Grid>
    //           <Grid item xs={12} md={4}>
    //             {/* Add content for the small area */}
    //             <Card>
    //               <CardContent>
    //                 <Typography variant="h6" gutterBottom>
    //                   Additional Information:
    //                 </Typography>
    //                 <Typography variant="body1" paragraph>
    //                   Additional details here...
    //                 </Typography>
    //                 {/* Add more details for the small area */}
    //               </CardContent>
    //             </Card>
    //           </Grid>
    //         </Grid>
    //       </Grid>
    //     </Grid>
    //   </Container>
    // );

    return (
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          {property.name}
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            {/* Main photo */}
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
            {/* Other photos */}
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
          {/* Description */}
          <Grid item xs={12} md={8}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Description:
                </Typography>
                <Typography variant="body1" paragraph>
                  {property.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* Location */}
          <Grid item xs={12} md={8}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Location:
                </Typography>
                <Typography variant="body1" paragraph>
                  {property.location}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* Price per Night */}
          <Grid item xs={12} md={8}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Price per Night:
                </Typography>
                <Typography variant="body1" paragraph>
                  {property.pricePerNight}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* Additional Information */}
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Additional Information:
                </Typography>
                <Typography variant="body1" paragraph>
                  Additional details here...
                </Typography>
                {/* More details for the small area */}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    );
    
    
  
  
  

}