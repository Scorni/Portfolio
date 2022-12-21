import '../assets/css/experiences/experiences.css';
import previewWeather from "../assets/img/experiences/weatherApp.PNG"
import previewQuizz from "../assets/img/experiences/quizzApp.PNG"
import previewEsport from "../assets/img/experiences/esportStats.png"
import previewSanta from "../assets/img/experiences/secretSanta.png"
import preview1000 from "../assets/img/experiences/1000et1cartes.png"
import ReactSVG from '../assets/svg/experiences/reactSVG'
import VueSVG from '../assets/svg/experiences/vueSVG'
import NodeSVG from '../assets/svg/experiences/nodeSVG'
import FigmaSVG from '../assets/svg/experiences/figmaSVG'
// import Computer from '../assets/svg/experiences/computer'
import {  Trans } from "react-i18next";


// TODO: 404
export default function Experiences() {
    return(
        <main>
                <section className="professionnal">
                    <Trans i18nKey="title">
                        <h2 >Professionnal and Educationnal Experiences</h2>
                    </Trans>
                    <div className="stage">
                        <Trans i18nKey="stage">
                            <h3>
                                Bachelor Computer Sciences at Ephec.<br />
                                From 2017 to 2021
                            </h3>
                            <p>
                                Stage at IT-School  as fullstack php developper under symfony.<br/> 
                                February to may 2020.
                            </p>
                        </Trans>
                    </div>
                    <div className="wecodx">
                        <Trans i18nKey="wecodx">
                            <h3>
                                Student fullstack developper at Wecodx.<br/> 
                                August  2021                    
                            </h3>
                            <p>
                                Developping with PHP under symfony environment. <br />
                                Frontend was held by classic Javascript | Twig.                     
                            </p>
                        </Trans>
                    </div>
                    <div className="uliege">
                        <Trans i18nKey="uliege">
                            <h3>
                                Master artificial intelligence at University of Liège.<br/> 
                                Septembre 2021 - February 2022
                            </h3>
                            <p>
                                Was the wrong way choosen !
                            </p>
                        </Trans>
                    </div>
                </section>
                <section className="personnal">
                    <Trans i18nKey="titleTwo">
                        <h2 className="headTitle">Personnal Projects and Skills</h2>
                    </Trans >
                    <div className="description">
                        <Trans i18nKey="firstDescription">
                            <h3>
                                Skills 
                            </h3>
                            <p>
                                Those are some of the technologies that I use <br/>
                            </p>
                        </Trans>
                        
                    </div>
                    <div className='skills'>
                        <div className='first'>
                            <a href='https://nodejs.org/en/' target={'_blank'} rel="noreferrer">
                                <div className='react'>
                                    <NodeSVG />
                                </div>
                            </a>
                            <a href='https://en.reactjs.org' target={'_blank'} rel="noreferrer">
                                <div className='vue'>
                                    <ReactSVG />
                                </div>
                            </a>
                        </div>
                        <div className='second'>
                            <a href='https://vuejs.org' target={'_blank'} rel="noreferrer">
                                <div className='node'>
                                    <VueSVG />
                                </div>
                            </a>
                            <a href='https://www.figma.com' target={'_blank'} rel="noreferrer">
                                <div className='figma'>
                                    <FigmaSVG />
                                </div>
                            </a>
                        </div>
                        
                    </div>
                    <div className="description">
                        <Trans i18nKey="secondDescription">
                            <h3>
                                Currently learning UX | UI and Web Design 
                            </h3>
                            <p>
                                By doing this portfolio for example <br/>
                                Or those side projects
                            </p>
                        </Trans>
                    </div>
                    <div>
                        <div className="sideProject">
                        <div className='firstRow'>
                                <div className="weather">
                                    <a href='https://1000-et-1-cartes.netlify.app' target={'_blank'} rel="noreferrer">
                                        <img className='weatherPreview' src={preview1000} alt="Weather app"></img>
                                        <Trans i18nKey="1000">
                                            <h4></h4>
                                            <p className='date'></p>
                                        </Trans>
                                    </a>
                                </div>
                                <div className="weather">
                                    <a href='https://esports-stats.up.railway.app' target={'_blank'} rel="noreferrer">
                                        <img className='weatherPreview' src={previewEsport} alt="Weather app"></img>
                                        <Trans i18nKey="esport">
                                            <h4></h4>
                                            <p className='date'></p>
                                        </Trans>
                                    </a>
                                </div>
                            </div>
                            <div className='firstRow'>
                                
                                <div className="quizz">
                                    <a href='https://noel2k22.netlify.app' target={'_blank'} rel="noreferrer">

                                        <img className='quizzPreview' src={previewSanta} alt="Secret Santa"></img>
                                        <Trans i18nKey="santa">
                                            <h4></h4>
                                            <p className='date'></p>
                                        </Trans>
                                    </a>
                                </div>
                                <div className="quizz">
                                        <a href='https://scorni-usbe-aters-quizz.vercel.app' target={'_blank'} rel="noreferrer">

                                            <img className='quizzPreview' src={previewQuizz} alt="Nerd quizz game"></img>
                                            <Trans i18nKey="quizz">
                                                <h4>
                                                    Nerd quizz game
                                                </h4>
                                                
                                                <p className='date'>
                                                    03/06/2022
                                                </p>
                                            </Trans>
                                        </a>
                                </div>
                            </div>
                            <div className='firstRow'>
                                
                                <div className="weather">
                                    <a href='https://scorni.github.io/Weather/' target={'_blank'} rel="noreferrer">
                                        <img className='weatherPreview' src={previewWeather} alt="Weather app"></img>
                                        <Trans i18nKey="weather">
                                            <h4>
                                                Weather app                                          
                                            </h4>
                                            <p className='date'>
                                                01/06/2022
                                            </p>
                                        </Trans>
                                        
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </main>
    )
}