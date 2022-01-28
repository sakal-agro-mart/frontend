import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const menus = () => {
  return (
    <div className="nav-menus">
      <Logo />

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/categories">Categories</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Signup</NavLink>
      </div>
    </div>
  );
};

export default menus;
