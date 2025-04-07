import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'
import { ThemeContext } from "./ThemeContext";

const Navbar = ()=>{
    const {theme,toggleTheme} = useContext(ThemeContext);
    return(
        <div>
            <h1>
                Navbar
            </h1>
            <NavLink to={'/'} id="nav-item" className={({isActive})=>{
                return (isActive) ? "active" : ""
            }}>Home</NavLink>
            <NavLink to={'/profile/:username'} id="nav-item">Profile</NavLink>
            <NavLink to={'/dashboard'} id="nav-item">Dashboard</NavLink>
            <NavLink to={'/contact'} id="nav-item">Contact</NavLink>
            <br/>
            <button onClick={toggleTheme}>
                Change to {theme==="light"?"dark":"light"} mode
            </button>
        </div>
    );
}

export default Navbar;