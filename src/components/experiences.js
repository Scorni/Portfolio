import '../assets/css/experiences/experiences.css';
import previewWeather from "../assets/img/experiences/weatherApp.PNG"
import previewQuizz from "../assets/img/experiences/quizzApp.PNG"
import { Slide, Fade}  from 'react-reveal';
import ReactSVG from '../assets/svg/experiences/reactSVG'
import VueSVG from '../assets/svg/experiences/vueSVG'
import NodeSVG from '../assets/svg/experiences/nodeSVG'
import FigmaSVG from '../assets/svg/experiences/figmaSVG'
// import Computer from '../assets/svg/experiences/computer'
import {  Trans } from "react-i18next";


// TODO: add skill vuejs reactjs 
export default function Experiences() {
    return(
        <main>
            <Slide left>
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
            </Slide>
            <Slide right>
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
                            <a href='https://nodejs.org/en/' target={'_blank'}>
                                <div className='react'>
                                    <NodeSVG />
                                </div>
                            </a>
                            <a href='https://en.reactjs.org' target={'_blank'}>
                                <div className='vue'>
                                    <ReactSVG />
                                </div>
                            </a>
                        </div>
                        <div className='second'>
                            <a href='https://vuejs.org' target={'_blank'}>
                                <div className='node'>
                                    <VueSVG />
                                </div>
                            </a>
                            <a href='https://www.figma.com' target={'_blank'}>
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
                                <div className="quizz">
                                    <a href='https://scorni-usbe-aters-quizz.vercel.app' target={'_blank'}>

                                        <img className='quizzPreview' src={previewQuizz}></img>
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
                                <div className="weather">
                                    <a href='https://scorni.github.io/Weather/' target={'_blank'}>
                                        <img className='weatherPreview' src={previewWeather}></img>
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
                            {/* <div className='WIPRow'>
                                <div className='WIPProject'>
                                    <a href='https://youtu.be/dQw4w9WgXcQ' target={'_blank'}>
                                        <p className="WIPText"> Work in Progress</p>
                                        <h4>
                                            Wanna see ?
                                        </h4>
                                        
                                        <p className='date'>
                                            ??/??/????
                                        </p>
                                    </a>

                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>
            </Slide>
            
        </main>
    )
}