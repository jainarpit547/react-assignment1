import React from 'react';
import './App.css';
import Topbar from './Topbar/Topbar';
import LeftPart from './LeftPart/LeftPart';
import RightPart from './RightPart/RightPart';

function App() {
  return (
    <div className="App">
        <Topbar/>
      <div className="WrapperDiv">
         <LeftPart/>
         <RightPart/>
      </div>
    </div>
  );
}

export default App;
