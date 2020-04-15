import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const activeStyle = {color: 'Orange'}
  return (
    <nav>
      <NavLink activeStyle={activeStyle} exact to="/home">Home</NavLink> 
      {" | "}
      <NavLink activeStyle={activeStyle} to="/profile">Profile</NavLink>
      {" | "}
      <NavLink activeStyle={activeStyle} exact to="/">Logout</NavLink>
    </nav>
  );
}

export default Header;
