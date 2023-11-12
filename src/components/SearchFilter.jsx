
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function SearchFilter() {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const location = formData.get('Location');
    console.log('Location:', location);
  };

  return (
    <form onSubmit={handleOnSubmit}>
    <Grid container spacing={2} direction="row" justifyContent="center">
     
      <Grid item>
          <TextField
            name="Location"
            label="Location"
            variant="outlined"
          />
        </Grid>

        <Grid item>
         <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label="Check in" />
          </LocalizationProvider>
        </Grid>

        <Grid item>
         <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label="Check out" />
          </LocalizationProvider>
        </Grid>
          
          <Grid item>
          <Button type="submit" variant="contained" color="primary">
            Search
          </Button>
          </Grid>
      
    </Grid>
    </form>
  );
}
