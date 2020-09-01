import React from 'react';
import './SubLeftTwo.css';
import Tickgray from '../assets/tick-gray.png'
import TickBlue from '../assets/tick-blue.png'
import PinkUser from '../assets/user-pink.png'
import OrangeUser from '../assets/user-orange.png'
import BlueUser from '../assets/user-blue.png'
import RedUser from '../assets/user-red.png'

const SubLeftTwo = () =>{
    return(
    <div className="SubLeft ListShift">
        <div className="List">
          <div className="Sublist">
            <img className="BlueTick" src={TickBlue} alt="bluetick"/> 
            <img className="GrayTick" src={Tickgray} alt="tick"/>
            <p className="Name">Dmm design</p>
          </div> 
          <div className="Sublist">  
            <img src={PinkUser} alt="tick"/>
            <p className="Date">20 Dec.</p>
            <div className="Bar"></div>
          </div>  
        </div>

        <div className="List">
          <div className="Sublist"> 
             <img className="BlueTick" src={TickBlue} alt="bluetick"/> 
             <img className="GrayTick" src={Tickgray} alt="tick"/>
             <p className="Name">Blurr animation</p>
          </div> 
          <div className="Sublist">  
             <img src={OrangeUser} alt="tick"/>
              <p className="Date">22 Dec.</p>
             <div className="Bar Red"></div>
          </div>   
        </div>

        <div className="List">
          <div className="Sublist"> 
             <img className="BlueTick" src={TickBlue} alt="bluetick"/> 
             <img className="GrayTick" src={Tickgray} alt="tick"/>
             <p className="Name">Illustration</p>
          </div>
          <div className="Sublist">
             <img src={BlueUser} alt="tick"/>
             <p className="Date">26 Dec.</p>
             <div className="Bar Green"></div>
          </div>
        </div>

        <div className="List">
          <div className="Sublist"> 
              <img className="BlueTick" src={TickBlue} alt="bluetick"/> 
              <img className="GrayTick" src={Tickgray} alt="tick"/>
              <p className="Name">Refunds</p>
          </div>
          <div className="Sublist"> 
              <img src={RedUser} alt="tick"/>
              <p className="Date">28 Dec.</p>
               <div className="Bar Orange"></div>
          </div>
        </div>
    </div>
    );
}

export default SubLeftTwo;