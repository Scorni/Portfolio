import "../assets/css/homepage/homepage.css";

import { NavLink } from "react-router-dom";
import Arrow from "./arrow";
import { Icon } from "@iconify/react";
import { Trans } from "react-i18next";

export default function homepage() {
  return (
    <div className="homepage">
      <div className="body">
        <div className="main">
          <div className="welcomeText">
            <Trans i18nKey="welcomeText">
              <h1>
                Welcome on my portfolio.
                <br />
                It means it’s mine.
              </h1>
            </Trans>
          </div>
          <div className="book">
            <Icon className="icon" icon="akar-icons:book-open" />
          </div>
        </div>
        <div className="checkButton">
          <Arrow />
          <Trans i18nKey="checkItOut">
            <NavLink className="checkLink" to="/experiences">
              Check it out
            </NavLink>
          </Trans>
        </div>
        <div className="side">
          <div className="news">
            <div className="informations">
              <Trans i18nKey="informations">
                <p>
                  Here are my two latest personnal projects,
                  <br />
                  You can find as much of tiny projects that took me less than
                  one day as bigger projects than bring my brain to tears.
                </p>
              </Trans>
            </div>
            <div className="first">
              <p className="newsTitle">Noel</p>
              <div className="contentNews">
                <p>31/11/2022</p>
                <Trans i18nKey="firstNews">
                  <p className="subTitleNews">Let's check Fnatic results !</p>
                  <div>
                    <p className="textNews">
                      Wanna see some results from esport's competitions ?
                    </p>
                    <a
                      href="https://noel2k24.netlify.app"
                      target={"_blank"}
                      className="quizzLink"
                      rel="noreferrer"
                    >
                      <h3>Click here</h3>
                    </a>
                  </div>
                </Trans>
              </div>
            </div>
            <div className="second">
              <p className="newsTitle">Les 1000 et 1 cartes</p>
              <div className="contentNews">
                <p>21/09/2022</p>
                <Trans i18nKey="secondNews">
                  <p className="subTitleNews">Hum is it a good day today ?</p>
                  <p className="textNews">
                    Wanna see if your city will let you deshydrated ?
                  </p>
                  <a
                    href="https://1000-et-1-cartes.netlify.app"
                    target={"_blank"}
                    className="weatherLink"
                    rel="noreferrer"
                  >
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
