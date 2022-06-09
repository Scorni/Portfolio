import './assets/css/style.css';
import { NavLink } from "react-router-dom";
import { Icon } from '@iconify/react';

import Arrow from "./components/arrow";

function App() {
  return (
    <div className="container">
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
                <h3>News</h3>
                <p>07/06/2022</p>
                <h4>This has been launch on Today</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.. Read More</p>
            </div>
            <div className="second">
              <h3>News</h3>
              <p>07/06/2022</p>
              <h4>This has been launch on Today</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.. Read More</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
