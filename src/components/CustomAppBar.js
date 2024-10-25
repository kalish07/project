import React from 'react';
import { AppBar, Toolbar, Box, IconButton, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo1 from '../assets/logo.jpg';

const CustomAppBar = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#333', boxShadow: 'none' }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <img src={logo1} alt="Brand Logo" style={{ height: 60, width: 'auto' }} />
        </Box>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ display: { xs: 'block', md: 'none' } }}>
          <MenuIcon />
        </IconButton>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 'auto' }}>
          <Button color="inherit" href="/">Home</Button>
          <Button color="inherit" href="/host">Become a host</Button>
          <Button color="inherit" component="a" href="/register" sx={{ ml: 2 }}>Login/Register</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;