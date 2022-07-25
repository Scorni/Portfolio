import React from "react";
import { NavLink } from "react-router-dom";
import {  Trans } from "react-i18next";
import i18n from "i18next";
import { Icon } from '@iconify/react';

function languageAndReload(lng){
  i18n.changeLanguage(lng);
  window.location.reload();
}
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
              <div>
                  {i18n.resolvedLanguage === "fr" &&
                    <button className="lngButton" type="submit" onClick={()=>languageAndReload("en")} >
                      English
                      <Icon className="flag" icon="flag:gb-4x3" />

                    </button>
                    
                  }
                  {i18n.resolvedLanguage === "en" &&
                    <button className="lngButton" type="submit" onClick={()=>languageAndReload("fr")} >
                      {/* <span class="iconify" data-icon="flag:fr-4x3" style="color: #111;"></span> */}
                      Français<Icon className="flag" icon="flag:fr-4x3" />

                      </button>
                  }
                  
                </div>
          </div>
          
        </div>
  );
}