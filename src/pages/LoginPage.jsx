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
import { useNavigate } from 'react-router-dom';
import LoginAPI from '../APIs/BookingSiteAPI/LoginAPi';
import { useState } from 'react';

import UserHelper from '../util/UserHelper';




export default function LoginPage() 
{
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit =(event) => 
  {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const username = data.get('username');
    const password = data.get('password');

    LoginAPI.login(username, password)
    .then((response)=>{
      if(response.ok)
      {
        response.json()
        .then((data)=>{
          localStorage.setItem('token', data.accessToken);  //seting the token in local storage
          console.log("Successfully logged in");
          const user = UserHelper.getUserFromToken();
          if(user.role === "tenant")
          {
            navigate("/home");
          }
          else if(user.role === "admin")
          {
            navigate("/admin");
          }
          else if (user.role ==="landlord")
          {
            navigate("/landlord");
          }
        })
      }
      else if (response.status ==400)
      {
        console.log("Failed to login: Incorrect Username or Password");
        setErrorMessage('Username or password is incorrect. Please try again.');
      }

    })
    .catch((error)=>
    {
      console.log("Error from API in LoginPage: " + error.message)
      setErrorMessage('Network error, '+error.message);
    })
  }
  
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
              Login
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="UserName"
                name="username"
                autoComplete="new-username"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
             
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Login
              </Button>
              <Grid container>
                <Grid item>
                  <RouterLink to={"/signup"} variant="body2">
                    {"Don't have an account? Sign Up"}
                  </RouterLink>
                </Grid>
              </Grid>
            </Box>
            {errorMessage && (
              <Typography variant="subtitle2" color="error" align="center">
               {errorMessage}
              </Typography>
            )}
          </Box>
        </Container>
      
    );
}
