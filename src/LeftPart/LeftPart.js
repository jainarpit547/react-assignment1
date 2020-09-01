import React from 'react';
import './LeftPart.css';
import SubLeftOne from '../SubLeftOne/SubLeftOne';
import SubLeftTwo from '../SubLeftTwo/SubLeftTwo';

const LeftPart = () => {
  return(
  <div className="LeftPart">
      <SubLeftOne/>
      <SubLeftTwo/>
  </div>
  );
}

export default LeftPart;