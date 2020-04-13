import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';

function Header() {
  // const activeStyle = {color: 'Orange'}
  return (

    <AppBar position="static">

      <nav>
        <NavLink exact to="/home">Home</NavLink> 
        {" | "}
        <NavLink to="/profile">Profile</NavLink>
        {" | "}
        <NavLink exact to="/">Logout</NavLink>
      </nav>

    </AppBar>
  );
}

export default Header;
