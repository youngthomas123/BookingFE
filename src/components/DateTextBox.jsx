import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function DateTextBox({label, setDate, date, min, max})
{

  

 
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker  
        label={label}
        value={date}
        onChange={(date)=>setDate(date)}
        minDate={min}
        maxDate={max}

      
         />
      </LocalizationProvider>
    )

}