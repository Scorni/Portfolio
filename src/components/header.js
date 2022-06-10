import React from "react";
import { NavLink } from "react-router-dom";
// Here, we display our Navbar
export default function header() {
 return (
    <div className="header">
        <div className="siteName">
          <p>MAXENCE SCORNICIEL</p>
        </div>
        <div className="navbar">
          <NavLink className="navlink" to="/">HOME</NavLink>
          <NavLink className="navlink" to="/about">ABOUT</NavLink>
          <NavLink className="navlink" to="/experiences">EXPERIENCES</NavLink>
          <NavLink className="navlink" to="/hitme">HIT ME</NavLink>
        </div>
      </div>
 );
}