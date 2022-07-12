import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";

// Here, we display our Navbar
export default function header() {
 return (
    <div className="header">
        <div className="siteName">
          <p>MAXENCE SCORNICIEL</p>
        </div>
        <div className="navbar">
          <Trans i18nKey="navLink">
            <NavLink className="navlink" to="/">HOME</NavLink>
            <NavLink className="navlink" to="/about">ABOUT</NavLink>
            <NavLink className="navlink" to="/experiences">EXPERIENCES</NavLink>
            <NavLink className="navlink" to="/contact">CONTACT</NavLink>
          </Trans>
        </div>
      </div>
 );
}