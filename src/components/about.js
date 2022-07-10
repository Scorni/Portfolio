import '../assets/css/about/about.css';
import React from "react";
import picture from "../assets/img/bubble.png"
import Lines from '../assets/svg/about/lines'
import { Parallax } from 'react-scroll-parallax';
import { Icon } from '@iconify/react';
import Javascript from "../assets/svg/about/javascript"
import Php from "../assets/svg/about/php"
import WorkingAtHome from "../assets/svg/about/workHome";
import Study from "../assets/svg/about/study"
import { NavLink } from "react-router-dom";
import { Slide, Fade}  from 'react-reveal';

// Here, we display our Navbar
export default function About() {
 return (
    <div className="about">
        <Fade>
            <div className="profile">
                    <div className="lines">
                        <Lines />
                    </div>
                    <div className="bubble">
                        <img src={picture} alt="test" className="me" />
                    </div>
            </div>
        </Fade>
        <main className="formation">
            <Fade>
                <section className="birth">
                    <div className="first"> 
                        <div className="birthday">
                            <Parallax  translateY={['-10px', '-50px','easeInOut']} scale= {[1, 1, 'easeInQuad']}  speed={-500}>
                                <Icon className="cake" icon="icon-park-twotone:cake-five" />
                            </Parallax>
                            <h2>Birth of the millennial</h2>
                            <p>
                                The guy from the picture started it's life in the beautiful country of Belgium on 20th march 1997.
                            </p>
                        </div>
                    </div>
                </section>
            </Fade>
            <Slide  right>
                <section className="school">
                    <div className="second">
                        <div>
                            <Parallax  translateY={['0px', '-50px','easeInOut']} scale= {[1, 1, 'easeInQuad']}  speed={-500}>
                                <Php />
                            </Parallax>
                        </div>
                        <h2>Student's life</h2>
                        <p>
                            He learned and developped its I.T. skills at EPHEC,<br/> in the city of Louvain-La-Neuve. <br/>
                            He found that the thing he loved the most was coding in order to bring his imagination to life.<br/>
                            Beginning with languages such as Javascript to the old man PHP.
                        </p>
                        <div >
                            <Parallax translateY={['0px', '-20px','easeInOut']} scale= {[1, 1, 'easeInQuad']}  speed={-500}>
                                <Javascript />
                            </Parallax>
                        </div>
                    </div>
                    <div className="study">
                        <Parallax translateY={['0px', '50px','easeInOut']} scale= {[1, 1, 'easeInQuad']}  speed={-500}>
                            <Study />
                        </Parallax>
                    </div>
                    
                </section>
            </Slide >
            
            <Slide  left>
                <section className="atm">
                        <div className='third'>
                            <h2>At the moment</h2>
                            <p>
                                He has learned from the past years to juggle with JS's frameworks such as React and Vue. <br/>
                                He's available on any project that require design, front and back as a Freelancer, from the sketch to the last line of code ! <br />
                                So he's obviously looking after project to go on !

                            </p>
                            <h3>
                                Looking to build a new project ?
                            </h3>
                            <NavLink className='contactMe' to="/contact">
                                <div className='css-button-retro--green'>
                                    Contact Me
                                </div>
                            </NavLink>
                        </div>
                        <div className="workingAtHome">
                            <Parallax translateY={['-10px', '50px','easeInOut']} scale= {[1, 1, 'easeInQuad']}  speed={-500}>
                                <WorkingAtHome />
                            </Parallax>
                        </div>
                </section>
            </Slide>
           
            
            
        </main>
        
    </div>
 );
}