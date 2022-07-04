import '../assets/css/homepage/homepage.css';

import { NavLink } from "react-router-dom";
import Arrow from "./arrow";
import { Icon } from '@iconify/react';

export default function homepage() {
 return (
  <div className="homepage">
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
            Here are my two latest personnal projects,<br></br> You can find as much of tiny projects that took me less than one day as
            bigger projects than bring my brain to tears.
          </p>
        </div>
        <div className="separator">
        </div>
        <div className="news">
          <div className="first">
            <p className="newsTitle">Quizz Game</p>
            <div className="contentNews">
              <p>07/06/2022</p>
              <p className="subTitleNews">what a game for nerd people !</p>
              <p>Are you sure you know your tech's basics ? Check your level of knowledge <a href='https://scorni-usbe-aters-quizz.vercel.app' target={'_blank'}>Here</a> </p>
            </div>
          </div>
          <div className="second">
            <p className="newsTitle">Weather</p>
            <div className="contentNews">
              <p>07/06/2022</p>
              <p className="subTitleNews">Is it a good day today ?</p>
              <p>Wanna see if your city will let you deshydrated ? Go for <a href='https://scorni.github.io/Weather/' target={'_blank'}>it</a>!</p>
            </div>
            </div>
        </div>
      </div>
    </div>
  </div>
 );
}