
import { useState } from "react";
import AppPaginataion from "../components/AppPagination";
import { Grid, Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { Container } from "@mui/system";
import SearchFilter from "../components/SearchFilter"
import dayjs from "dayjs";
import { useEffect } from "react";
import FakePropertyAPI from "../mock/fakeAPI/FakePropertyAPI";



const pageSize=6;

export default function HomePage()
{

    const [pagination, setPagination] = useState({
        count :0,
        from : 0,
        to : pageSize
    })
    const [properties, setProperties] = useState([]);
    const [location, setLocation] = useState("USA");
    const [checkIn, setCheckIn] = useState(dayjs());
    const [checkOut, setCheckOut] = useState(dayjs().add(1, 'day'));
    const [showError, setShowError] = useState(false);

    const [isFormSubmitted, setIsFormSubmitted] = useState(false);


    useEffect(() => {
        
        FakePropertyAPI.getFilteredProperties(location,checkIn,checkOut,pagination.from, pagination.to).then((response)=>
        {
            console.log(response)
            setPagination({
                ...pagination,
                count : response.totalCount

            });
            setProperties(response.properties);
            setIsFormSubmitted(false);
        }
       
    )}, [pagination.from, pagination.to, isFormSubmitted]);



    function handlePageChange(event, page)
    {
        const from = (page-1) *pageSize;

        const to = (page-1) *pageSize +pageSize;

        setPagination({
            ...pagination,
            from : from,
            to : to,

        });

    }

    function handleSearchSubmit(event)
    {
        event.preventDefault();
        console.log('Location:', location);
        console.log("checkIn:" , checkIn);
        console.log("checkOut:" , checkOut);
    
        if(!dayjs(checkOut).isAfter(checkIn))
        {
          setShowError(true);
          setTimeout(() => 
          {
            setShowError(false);
          }, 2000); 

          //clear location box, datebox
          setLocation("");
          setProperties([]);
          setPagination(
            {
                ...pagination,
                count :0,
                from : 0,
                to : pageSize
            }
          )
        //   setCheckIn(dayjs());
        //   setCheckOut(dayjs().add(1, 'day'))
    
        }
        else{
            setIsFormSubmitted(true);
        }
        
    

    }

    const renderProperties = properties.map((property) => (
        <Grid item xs={12} sm={6} md={4} key={property.propertyId}>
            <Card>
                <CardMedia
                    component="img"
                    alt={property.name}
                    height="200"
                    image={property.photos.img1}
                    title={property.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {property.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {property.description}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Price: ${property.priceForNight} per night
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    ));
    
    return (
     <Container>
       <Box mb={4}>
         <SearchFilter 
         handleSearchSubmit={handleSearchSubmit}
         setLocation={setLocation}
         setCheckIn={setCheckIn}
         setCheckOut={setCheckOut}
         showError={showError}
         location={location}
         checkIn={checkIn}
         checkOut={checkOut}
         />
       </Box>
       <Grid container spacing={3}>
         {renderProperties}
        </Grid>
      <AppPaginataion 
      handlePageChange={handlePageChange}
      pagination={pagination}
      />
    </Container>

    );

    

}