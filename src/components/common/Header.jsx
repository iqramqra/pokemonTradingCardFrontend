import React from "react";
import { NavLink } from "react-router-dom";


import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import MenuIcon from '@material-ui/icons/Menu';

function Header() {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
    {/* <AppBar position="static"> */}
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          <MenuIcon/>
        </Button>
        <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)}
          onClose={handleClose}>
          <MenuItem onClick={handleClose}><NavLink exact to="/home">Home</NavLink></MenuItem>
          <MenuItem onClick={handleClose}><NavLink to="/profile">Profile</NavLink></MenuItem>
          <MenuItem onClick={handleClose}><NavLink exact to="/">Logout</NavLink></MenuItem>
        </Menu> 
  </div>
  );
}

export default Header;