import React from "react";
import { NavLink } from "react-router-dom";


import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

function Header() {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  // const activeStyle = {color: 'Orange'}
  return (

    <div>
    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
      Open Menu
    </Button>
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}><NavLink exact to="/home">Home</NavLink></MenuItem>
      <MenuItem onClick={handleClose}><NavLink to="/profile">Profile</NavLink></MenuItem>
      <MenuItem onClick={handleClose}><NavLink exact to="/">Logout</NavLink></MenuItem>
    </Menu>
  </div>
  
    // <AppBar position="static">
    //     <NavLink exact to="/home">Home</NavLink> 
    //     {" | "}
    //     <NavLink to="/profile">Profile</NavLink>
    //     {" | "}
    //     <NavLink exact to="/">Logout</NavLink>

    // </AppBar>
  );
}

export default Header;
