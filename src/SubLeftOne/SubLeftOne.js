import React from 'react';
import './SubLeftOne.css';
import Downarrow from '../assets/arrow-down.png';
import Uparrow from '../assets/arrow-up.png';


const SubLeftOne = () =>{
    return(
    <div className="SubLeft">
        <h1 className="Heading">Stunning Workplace<span>.</span></h1>
        <p className="Para">With Stunning, remote teams can organize projects, mangage shifting priorities, and get work done.</p>
        <div className="Arrow">
            <button className="NewBtn" type="button">New Account</button>
            <img src={Uparrow} alt="uparrow"/>
            <img src={Downarrow} alt="downarrow"/>
        </div>
    </div>
    );
}

export default SubLeftOne;