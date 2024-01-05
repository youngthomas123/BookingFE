
import { useState } from "react";
import AppPaginataion from "../components/AppPagination";
import { Grid, Card, CardMedia, CardContent, Typography, Box, CardActions ,Button} from '@mui/material';
import { Container } from "@mui/system";
import SearchFilter from "../components/SearchFilter"
import dayjs from "dayjs";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";


//apis
import PropertyAPI from "../APIs/BookingSiteAPI/PropertyAPI";



export default function HomePage()
{
  const navigate = useNavigate();
  

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
    const checkIn = filter.checkIn.format('YYYY-MM-DD');
    const checkOut = filter.checkOut.format('YYYY-MM-DD');

    PropertyAPI.getFilteredProperties(filter.location, checkIn, checkOut, pagination.currentPage-1, pagination.pageSize)
    .then((response)=>
    {
      if(response.ok)
      {
        response.json()
        .then((data)=>
        {
          setProperties(data.properties);
          setPagination((prevPagination)=>({
            ...prevPagination,
            totalCount : data.totalCount,
          }));
          
        })
      }
      else if (response.status ==401)
      {
        console.log("401");
      }
    })
    .catch((error)=>
    {
      console.log("Network error, ", error.message);
      setProperties(null);
    })



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

  

  function handleViewDetailsClick(propertyId)
  {
    const queryParams = new URLSearchParams({
      checkin: filter.checkIn.format('YYYY-MM-DD'), 
      checkout: filter.checkOut.format('YYYY-MM-DD'), 
    });

    navigate(`/property/${propertyId}?${queryParams.toString()}`);

  }

 


    const renderProperties = properties ? (
      properties.map((property) => (
        <Grid item xs={12} sm={6} md={4} key={property.propertyId}>
          <Card>
            <CardMedia
              component="img"
              alt={property.name}
              height="200"
              image={property.mainPhoto}
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
              
                <Button variant="outlined" color="primary" size="small" onClick={()=>handleViewDetailsClick(property.propertyId)}>
                 View Details
                </Button>
              
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

