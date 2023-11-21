
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import DateTextBox from './DateTextBox';
import TestLocationTextBox from './TestLocationTextBox';
import Alert from '@mui/material/Alert';
import dayjs from 'dayjs';
import { useState } from 'react';


export default function SearchFilter({setFilter}) 
{

  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState(dayjs());
  const [checkOut, setChekOut] = useState(dayjs().add(1,"day"));


  function handleSubmit(event)
  {
    event.preventDefault();

    if(dayjs(checkIn).isBefore(checkOut))
    {
      const filter = {
        location : location,
        checkIn : checkIn,
        checkOut : checkOut,
      }
  
       setFilter(filter);
     

    }

    

  }






 
 
  return (
    <form onSubmit={handleSubmit} >
    <Grid container spacing={2} direction="row" justifyContent="center">
     
        <Grid item>
          <TestLocationTextBox 
          setLocation={setLocation}
         
         
          
  
          />
        </Grid>

        <Grid item>
          <DateTextBox
          label={"CheckIn"}
          date ={dayjs(checkIn)}
          setDate={setCheckIn}
          min={dayjs()}
          max={dayjs().add(30, "day")}
     
          />
        </Grid>

        <Grid item>
          <DateTextBox 
          label={"CheckOut"}
          date ={dayjs(checkOut)}
          setDate={setChekOut}
          min={dayjs(checkIn.add(1, "day"))}
          max={dayjs(checkIn).add(30, "day")}
       

          />
        </Grid>
          
          <Grid item>
          <Button type="submit" variant="contained" color="primary" >
            Search
          </Button>
          </Grid>
    </Grid>
    
    </form>
  );
}

