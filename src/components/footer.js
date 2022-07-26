import React from "react";
import { NavLink } from "react-router-dom";
import {  Trans } from "react-i18next";
import { Icon } from '@iconify/react';

// Here, we display our Navbar
export default function footer() {

return (
    <div className="footer">
        <div className="socialNetwork">
            <a href="https://github.com/Scorni" target="_blank">
                <Icon className="socialNetworkIcon" icon="openmoji:github" />
            </a>
            <a href="tel:+32476072328" target="_blank">
                <Icon className="socialNetworkIcon" icon="openmoji:telephone-receiver" />
            </a>
            <NavLink to="/contact">
                <Icon className="socialNetworkIcon" icon="openmoji:e-mail" />
            </NavLink>
            <a href="https://www.linkedin.com/in/maxence-scorniciel-437157174/" target="_blank">
                <Icon className="socialNetworkIcon" icon="openmoji:linkedin" />
            </a>
        </div>
        <div className="siteName">
            
            <Trans i18nKey="copyright">
                <p>@ 2022 MAXENCE SCORNICIEL All rights reserved</p>
            </Trans>

        </div>
    </div>
  );
}