
import { useState } from "react";
import AppPaginataion from "../components/AppPagination";
import { Grid, Card, CardMedia, CardContent, Typography, Box, CardActions ,Button} from '@mui/material';
import { Container } from "@mui/system";
import SearchFilter from "../components/SearchFilter"
import dayjs from "dayjs";
import { useEffect } from "react";
import FakePropertyAPI from "../mock/fakeAPI/FakePropertyAPI";
import { Link } from 'react-router-dom';





export default function HomePage()
{

  const [properties, setProperties] = useState([]);

  const [filter, setFilter] = useState({
    location : "",
    checkIn : dayjs(),
    checkOut : dayjs().add(1,"day")

  })

  const [pagination, setPagination] = useState({
    currentPage : 1,
    pageSize : 6,
    totalCount : 60,

  })

  useEffect(()=>{
   

    setPagination((prevPagination) => ({
      ...prevPagination,
      totalCount:-1,
      currentPage:1,
    }));


    

  },[filter.location,filter.checkIn,filter.checkOut]);


  useEffect(()=>{
    FakePropertyAPI.getFilteredProperties(filter.location, filter.checkIn, filter.checkOut, pagination.currentPage-1, pagination.pageSize)
    .then((response) => {
      setProperties(response.properties);
      setPagination((prevPagination) => ({
        ...prevPagination,
        totalCount: response.totalCount,
      }));
    });



  },[pagination.currentPage,pagination.totalCount])





  function handlePageChange(event,page)
  {
    

    setPagination(
      {
        ...pagination,
        currentPage : page,
      }
    )

    

  }

 


  
    // const renderProperties = properties ? (
    //   properties.map((property) => (
    //     <Grid item xs={12} sm={6} md={4} key={property.propertyId}>
    //       <Card>
    //             <CardMedia
    //                 component="img"
    //                 alt={property.name}
    //                 height="200"
    //                 image={property.photos.img1}
    //                 title={property.name}
    //             />
    //             <CardContent>
    //                 <Typography gutterBottom variant="h5" component="h2">
    //                     {property.name}
    //                 </Typography>
    //                 <Typography variant="body2" color="textSecondary" component="p">
    //                     {property.description}
    //                 </Typography>
    //                 <Typography variant="body2" color="textSecondary" component="p">
    //                     Price: ${property.priceForNight} per night
    //                 </Typography>
    //             </CardContent>
    //         </Card>
    //     </Grid>
    //   ))
    // ) : (
    //   <Typography variant="body2">Properties was null</Typography>
    // );


    const renderProperties = properties ? (
      properties.map((property) => (
        <Grid item xs={12} sm={6} md={4} key={property.propertyId}>
          <Card>
            <CardMedia
              component="img"
              alt={property.name}
              height="200"
              image={property.photos[0]}
              title={property.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {property.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {property.description.length > 100
                  ? `${property.description.substring(0, 50)}...`
                  : property.description}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Price: <Typography component="span" variant="body2" sx={{ fontWeight: 'bold' }}>${property.priceForNight} per night</Typography>
              </Typography>
            </CardContent>
            <CardActions>
              <Link to={`/property/${property.propertyId}`}>
                <Button variant="outlined" color="primary" size="small">
                 View Details
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      ))
    ) : (
      <Typography variant="body2">Properties were null</Typography>
    );

   


    
    
    return (
     <Container>
       <Box mb={4}>
         <SearchFilter 
         setFilter={(f)=>{
          setFilter({
            ...filter,
            location : f.location,
            checkIn : f.checkIn,
            checkOut : f.checkOut,
          })}}
  
        
         />
       </Box>
       <Grid container spacing={3}>
         {renderProperties}
        </Grid>
      <AppPaginataion 
      numberOfPages={Math.ceil(pagination.totalCount/pagination.pageSize)}
      currentPage={pagination.currentPage}
      handlePageChange={handlePageChange}

      />
    </Container>

    );

    

}

