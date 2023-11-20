
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import DateTextBox from './DateTextBox';
import TestLocationTextBox from './TestLocationTextBox';
import Alert from '@mui/material/Alert';


export default function SearchFilter({handleSearchSubmit, setLocation,  setCheckIn,  setCheckOut, showError, location, checkIn, checkOut }) {

 
  return (
    <form onSubmit={handleSearchSubmit}>
    <Grid container spacing={2} direction="row" justifyContent="center">
     
        <Grid item>
          <TestLocationTextBox 
          setLocation={(location)=>setLocation(location)}
          location={location}
          />
        </Grid>

        <Grid item>
          <DateTextBox
          label={"check in"} 
          setDate={(date)=>setCheckIn(date)}
          date={checkIn}
          />
        </Grid>

        <Grid item>
          <DateTextBox 
          label={"check out"} 
          setDate={(date)=>setCheckOut(date)}
          date={checkOut}

          />
        </Grid>
          
          <Grid item>
          <Button type="submit" variant="contained" color="primary">
            Search
          </Button>
          </Grid>
    </Grid>
    {showError && (
        <Alert severity="error">Invalid Dates!</Alert>
      )}
    </form>
  );
}

