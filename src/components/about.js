import React from "react";
import Bubble from "../assets/svg/about/Bubble.js";
import picture from "../assets/img/bubble.png"
import Lines from '../assets/svg/about/lines'
import Leafs from '../assets/svg/about/leafs'
import { Parallax } from 'react-scroll-parallax';
import { Icon } from '@iconify/react';

// Here, we display our Navbar
export default function About() {
 return (
    <div className="about">
        <div className="profile">
            <div className="lines">
                <Lines />
            </div>
            <div className="bubble">
                <img src={picture} alt="test" className="me superpose" />
            </div>
        </div>
        <div className="formation">
            <div className="first">
                <div className="firstStars">

                </div>
                <div className="leaf">
                    <Parallax  translateY={['-50px', '-50px','easeInOut']} scale= {[1, 1, 'easeInQuad']}  speed={-500}>
                        <Icon className="cake" icon="icon-park-twotone:cake-five" />
                    </Parallax>
                </div>
                <h2>Birth of the millennial</h2>
                <p>
                Born in Belgium in 1997, so definitely a millennialsBorn in Belgium in 1997, so definitely a millennials
                Born in Belgium in 1997, so definitely a millennials
                Born in Belgium in 1997, so definitely a millennials
                Born in Belgium in 1997, so definitely a millennials

                </p>
                
            </div>
            
            
            <div className="second">
                <div className="secondStars">

                </div>
                <div className="firstArrow">

                </div>
                
                <div>
                    <Parallax translateX={['-100px','-100px']} translateY={['0px', '-50px','easeInOut']} scale= {[1, 1, 'easeInQuad']}  speed={-500}>
                        <Icon className="cake" icon="icon-park-twotone:cake-five" />
                    </Parallax>
                </div>
                <p>
                Born in Belgium in 1997, so definitely a millennials

                </p>
            </div>
            <div className="third">
                <div className="secondArrow">

                </div>
                <div className="sun">

                </div>          
                <p>

                </p>
            </div>
            
        </div>
        
    </div>
 );
}