import '../assets/css/homepage/homepage.css';

import { NavLink } from "react-router-dom";
import Arrow from "./arrow";
import SecondArrow from "../assets/svg/homepage/secondArrow";
import { Icon } from '@iconify/react';
import {  Trans } from "react-i18next";

export default function homepage() {
  return (
    <div className="homepage">
      <div className="body">
        <div className="main">
          <div className="welcomeText">
            <Trans i18nKey="welcomeText">
              <h1>Welcome on my portfolio.<br />It means it’s mine.</h1>
            </Trans>
          </div>
          <div className="book">
            <Icon className="icon" icon="akar-icons:book-open" />
          </div>
        </div>
        <div className="checkButton">
            <Arrow />
            <Trans i18nKey ="checkItOut">
              <NavLink className='checkLink' to="/experiences">
                  Check it out
              </NavLink>
            </Trans>
            
          </div>
        <div className="side">
          <div className="news">
            <div className="informations">
              <Trans i18nKey="informations">
                <p>
                  Here are my two latest personnal projects,<br />
                  You can find as much of tiny projects that took me less than one day as
                  bigger projects than bring my brain to tears.
                </p>
              </Trans>
            </div> 
            <div className="first">
              <p className="newsTitle">Quizz Game</p>
              <div className="contentNews">
                <p>07/06/2022</p>
                <Trans i18nKey="firstNews">
                  <p className="subTitleNews">what a game for nerd people !</p>
                  <div>
                    <p className='textNews'>Are you sure you know your tech's basics ?</p>
                    <a href='https://scorni-usbe-aters-quizz.vercel.app' target={'_blank'} className="quizzLink">
                        <h3>Click here</h3>
                    </a>
                  </div>
                </Trans>
                
              </div>
            </div>
            <div className="second">
              <p className="newsTitle">Weather</p>
              <div className="contentNews">
                <p>07/06/2022</p>
                <Trans i18nKey="secondNews">
                  <p className="subTitleNews">Hum is it a good day today ?</p>
                  <p className='textNews'>Wanna see if your city will let you deshydrated ? 
                  </p>
                  <a href='https://scorni.github.io/Weather/' target={'_blank'} className ="weatherLink">
                    <h3>Go for it</h3>
                  </a>
                </Trans>
              </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}