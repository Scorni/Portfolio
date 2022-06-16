import React from "react";
import Bubble from "../assets/svg/about/Bubble.js";
import picture from "../assets/img/bubble.png"
import Lines from '../assets/svg/about/lines'
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

                </div>
                <p>
                Born in Belgium in 1997, so definitely a millennials
                </p>
            </div>
            <div className="second">
                <div className="secondStars">

                </div>
                <div className="firstArrow">

                </div>
                <div className="hexagon">

                </div>
                <p>

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