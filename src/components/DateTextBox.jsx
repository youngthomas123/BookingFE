import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function DateTextBox({label, setDate, date})
{

  function handleDateChange(date)
  {
    setDate(date);

  }

 
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker  
        label={label}
         onChange={handleDateChange} 
         disablePast
         value={date}
         />
      </LocalizationProvider>
    )

}