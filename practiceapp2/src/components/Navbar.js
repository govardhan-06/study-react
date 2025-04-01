import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-item" end>
        Home
      </NavLink>
      <NavLink to="/about" className="nav-item">
        About
      </NavLink>
      <NavLink to="/contact" className="nav-item">
        Contact
      </NavLink>
    </nav>
  );
}

export default Navbar;
