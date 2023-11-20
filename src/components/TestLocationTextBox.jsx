import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { address } from '../mock/fakeData/Property';


export default function TestLocationTextBox({setLocation, location})
{
    function handleLocationChange(event,location)
    {
        setLocation(location)

    }

    return (
        <Autocomplete
        freeSolo
        id="location"
        options={address}
        sx={{ width: 300 }}
        onInputChange={handleLocationChange}
        value={location}
        renderInput={(params) => <TextField {...params} label="Add location" />}
      />
    )



}