import '../assets/css/about/about.css';
import React from "react";
import picture from "../assets/img/bubble.png"
import Lines from '../assets/svg/about/lines'
import Leafs from '../assets/svg/about/leafs'
import { Parallax } from 'react-scroll-parallax';
import { Icon } from '@iconify/react';
import Javascript from "../assets/svg/about/javascript"
import Php from "../assets/svg/about/php"
import WorkingAtHome from "../assets/svg/about/workHome";
import Study from "../assets/svg/about/study"
// Here, we display our Navbar
export default function About() {
 return (
    <div className="about">
        <div className="profile">
            <div className="lines">
                <Lines />
            </div>
            <div className="bubble">
                <img src={picture} alt="test" className="me" />
            </div>
        </div>
        <div className="formation">
            <div className="first">
                <div>
                    <Parallax  translateY={['-10px', '-50px','easeInOut']} scale= {[1, 1, 'easeInQuad']}  speed={-500}>
                        <Icon className="cake" icon="icon-park-twotone:cake-five" />
                    </Parallax>
                </div>
                <h2>Birth of the millennial</h2>
                <p>
                    The guy from the picture started it's life in the beautiful country of Belgium on 20th march 1997.
                </p>
                
            </div>
            <div className="study">
                <Parallax translateY={['-10px', '50px','easeInOut']} scale= {[1, 1, 'easeInQuad']}  speed={-500}>
                    <Study />
                </Parallax>
            </div>
            
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
            <div className="workingAtHome">
                <Parallax translateY={['-10px', '50px','easeInOut']} scale= {[1, 1, 'easeInQuad']}  speed={-500}>
                    <WorkingAtHome />
                </Parallax>
            </div>
            <div className="third">
                <h2>At the moment</h2>
                <p>
                    During his free time he's learning evenly from UX | UI design to maintain database's structure. <br />
                    He's looking after project to work on, as frontend or backend dev.
                </p>
                <a className='triple'>
                    <div className='contactMe'>
                        Contact me
                    </div>
                    <div className='shadowOne'>
                        .
                    </div>
                    <div className='shadowTwo'>
                        .
                    </div>
                </a>
            </div>
            
        </div>
        
    </div>
 );
}