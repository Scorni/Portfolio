import React from "react";
import { Parallax } from 'react-scroll-parallax';


export default function Experiences() {
    return(
        <div className="parallax">
        <div className="parallax__layer parallax__layer--back">
            <Parallax translateX={['-100px', '200px']}>
        <p>ddees</p>

            </Parallax> 

        </div>
        <div className="parallax__layer parallax__layer--base">
        <p>ddee</p>
        </div>
    </div>
    )
}