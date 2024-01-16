import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { address } from '../mock/fakeData/Property';


export default function TestLocationTextBox({setLocation, width =300})
{
  

    return (
        <Autocomplete
        freeSolo
        id="location"
        options={address}
        sx={{ width: width }}
      
        onInputChange={(event,location)=>setLocation(location)}
        
       defaultValue={""}
        renderInput={(params) => <TextField {...params} label="Add location" />}
      />
    )



}