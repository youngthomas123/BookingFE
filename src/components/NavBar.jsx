
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          BookingSite
        </Typography>

        <Link to="/home">
        <Button color="inherit">Home</Button>
        </Link>

        <Link to="/about">
        <Button color="inherit" >About</Button>
        </Link>
        
        <Link to="/contact">
        <Button color="inherit">Contact</Button>
        </Link>
        
        <Link to="/login">
        <Button color="inherit">Login</Button>
        </Link>
        
        
        
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
