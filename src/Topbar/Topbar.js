import React from 'react';
import './Topbar.css';
import Logo from '../assets/stunning-logo.png' 

const Topbar = () => {
    return(
        <header className="Topbar">
            <img className="ToggleMenu" src={Logo} alt="Menu Icon" />
            <div>
               <button className="BtnMenu" type="button">Home</button>
               <button className="BtnMenu" type="button">About</button>
               <button className="BtnMenu" type="button">Blog</button>
               <button className="BtnMenu" type="button">Jobs</button>
            </div>
            <button className="AccountBtn" type="button">Your Account</button>
           <div className="Hamburger"> <i class="fas fa-bars"></i> </div> 
        </header>  
    );
}

export default Topbar;