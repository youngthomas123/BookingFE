import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


const FeedbackSnackbar = ({ message, setOpen, open=false, severity="error" }) => {
  

  // Listen for changes in the prop 'openSnackbar'


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') 
    {

      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
      <MuiAlert onClose={handleClose} severity={severity} elevation={6} variant="filled">
        {message}
      </MuiAlert>
    </Snackbar>
  );
};

export default FeedbackSnackbar;
