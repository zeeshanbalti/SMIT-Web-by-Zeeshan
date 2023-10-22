import React from 'react';
import './index.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';

function SecondSec() {
  return (
    <>


    <div className="App">
      <div className="introduction">
        <h1>Welcome To <span> Saylani Job Fare</span></h1>
        <p>Welcome to Saylani Welfare is on the ground and already working with local
communities to assess how best tosupport underprivileged
families in more than 63 areas of day to day lives.</p>
        <div className="registration-button">
        <Link  to="https://forms.saylaniwelfare.com/en" className="btn-register">Register</Link>
      </div>

        
      </div>
    </div>
    </>
  );
}

export default SecondSec;
