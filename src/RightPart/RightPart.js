import React from 'react';
import './RightPart.css';
import LandingSection from '../assets/landing-section-image.png'

const RightPart = () => {
    return(
        <div className="RightPart"> 
           <img className="Picture" src={LandingSection} alt="landingsection"/>
        </div>
    );
}


export default RightPart; 