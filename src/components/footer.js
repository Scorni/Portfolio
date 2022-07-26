import React from "react";
import { NavLink } from "react-router-dom";
import {  Trans } from "react-i18next";

// Here, we display our Navbar
export default function footer() {

  return (
    <div className="footer">
        
        <div className="footerLink">
            <Trans i18nKey="footerLink">
                <NavLink className="navlink" to="/">HOME</NavLink>
                <NavLink className="navlink" to="/about">ABOUT</NavLink>
                <NavLink className="navlink" to="/experiences">EXPERIENCES</NavLink>
                <NavLink className="navlink" to="/contact">CONTACT ME</NavLink>
            </Trans>
        </div>
        <div className="siteName">
            <Trans i18nKey="copyright">
                <p>@ 2022 MAXENCE SCORNICIEL All rights reserved</p>

            </Trans>
        </div>
    </div>
  );
}