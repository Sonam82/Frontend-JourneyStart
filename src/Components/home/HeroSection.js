import React from 'react';
import './herostyle.css';
import {Link} from 'react-router-dom'

const HeroSection = () => {
  
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Welcome to JourneyStart</h1>
        <p>Explore a world of knowledge and learning.</p>
        <li ><Link to='/courses'><button className="cta-button" >
          Get Started
        </button></Link></li>
      </div>
    </div>
  );
};

export default HeroSection;