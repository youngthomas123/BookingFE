import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link as RouterLink } from 'react-router-dom';
import {  Radio, RadioGroup, FormControlLabel } from '@mui/material';
import { useState } from 'react';
import UserAPI from '../APIs/BookingSiteAPI/UserAPI';
import { useNavigate } from 'react-router-dom';
import FeedbackSnackbar from '../components/FeedbackSnackbar';


export default function SignUpPage() 
{
  const navigate = useNavigate();

  const [error, setError] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const username = data.get('username');
    const password = data.get('password');
    const repeatPassword = data.get('repeatPassword');
    const type = data.get('usertype');

    if (username.length > 2 && password.length > 2 && type != null) 
    {
      if (password === repeatPassword) 
      {
       
        UserAPI.signIn(username, password, type)
        .then((response)=>
        {
          if(response.ok)
          {
            console.log("Account created successfully");
            setError('');
            navigate('/login');
          }
          else if (response.status ==400)
          {
            setError('Username already taken, try again with a different username.');
            setOpenSnackbar(true);
          }
        })
        .catch((error)=>
        {
          setError("Network error, "+ error.message)
          setOpenSnackbar(true);
          
        })
      } 
      else 
      {
        setError('Passwords do not match');
        setOpenSnackbar(true);
      }
    } else {
      setError('Invalid input. Username/Password too short or type not selected');
      setOpenSnackbar(true)
    }
  };

   
      

    
  
    return (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="new-username"
                    name="username"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    autoFocus
                  />
                </Grid>
               
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="repeatPassword"
                    label="Repeat Password"
                    type="password"
                    id="repeatPassword"
                    autoComplete="new-password"
                  />
                </Grid>

                <Grid item xs={12}>
                  <RadioGroup row aria-label="user-type" name="usertype">
                    <FormControlLabel value="tenant" control={<Radio />} label="Tenant" />
                    <FormControlLabel value="landlord" control={<Radio />} label="Landlord" />
                  </RadioGroup>
                </Grid>
              </Grid>
                {/* {error && (
                  <Typography variant="subtitle2" color="error" align="center">
                    {error}
                  </Typography>
                )} */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <RouterLink to={"/login"} variant="body2">
                    Already have an account? Login
                  </RouterLink>
                </Grid>
              </Grid>
            </Box>
            <FeedbackSnackbar message={error} setOpen={setOpenSnackbar} open={openSnackbar} />
          </Box>
        </Container>
    );
  }