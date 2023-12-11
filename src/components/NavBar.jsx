
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import UserHelper from '../util/UserHelper';
import Logout from './LogOut';

const NavBar = () =>
 {
  const user = UserHelper.getUserFromToken();
  const isTokenExpired = UserHelper.isTokenExpired();

  let navLinks = [];


  if(user!=null && isTokenExpired==false)
  {
    //user is authenticated
    if(user.role =="tenant")
    {
      //tenant links
      navLinks =[
        <Link key="home" to="/home"><Button color="inherit">Home</Button></Link>,
        <Link key="profile" to={`/profile/${user.userId}`}><Button color="inherit">profile</Button></Link>,
      ];
    }
    else if (user.role =="landlord")
    {
      //landlord links
    }
    else if(user.role == "admin")
    {
      //admin links
      navLinks =[
        <Link key="adminPanel" to="/admin"><Button color="inherit">AdminPanel</Button></Link>,
        <Link key="profile" to={`/profile/${user.userId}`}><Button color="inherit">profile</Button></Link>,
      ];
    }
  }
  else if (user ==null || isTokenExpired ==true)
  {
    //public links
   navLinks = 
   [ 
   <Link key="BookingSite" to="/"><Button color="inherit">BookingSite</Button></Link>,
   <Link key="about" to="/about"><Button color="inherit">about</Button></Link>,
   <Link key="contact" to="/contact"><Button color="inherit">contact</Button></Link>,
   <Link key="login" to="/login"><Button color="inherit">login</Button></Link>,
  
  ]

  }
  

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          BookingSite
        </Typography>
        {navLinks}
        {user != null && isTokenExpired==false ? <Logout /> : null}
        
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
