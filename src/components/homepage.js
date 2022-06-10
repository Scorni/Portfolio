import React from "react";
import { Icon } from '@iconify/react';
import { NavLink } from "react-router-dom";
import Arrow from "./arrow";

export default function homepage() {
 return (
    <div className="body">
        <div className="main">
          <div className="welcomeText">
            <h1>Welcome on my portfolio.<br />It means it’s mine.</h1>
          </div>
          <div className="book">
            <Icon className="icon" icon="akar-icons:book-open" />
          </div>
        </div>
        <div className="checkButton">
            <Arrow />
            <NavLink className='checkLink' to="/experiences">
                Check it out
            </NavLink>
          </div>
        <div className="side">
          <div className="informations">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
          <div className="separator">
            <hr />
          </div>
          <div className="news">
            <div className="first">
              <p className="newsTitle">News</p>
              <div className="contentNews">
                <p>07/06/2022</p>
                <p className="subTitleNews">This has been launch on Today</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.. Read More</p>

              </div>
            </div>
            <div className="second">
              <p className="newsTitle">News</p>
              <div className="contentNews">
                <p>07/06/2022</p>
                <p className="subTitleNews">This has been launch on Today</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.. Read More</p>
              </div>
             </div>
          </div>
        </div>
      </div>
 );
}