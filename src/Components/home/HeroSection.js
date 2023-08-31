import React, { useState } from 'react';
import './herostyle.css';
import CourseListing from '../courses/CourseListing';
import LoginForm from '../signin/LoginForm';
import SignupForm from '../signup/SignupForm';

const HeroSection = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleGetStartedClick = () => {
    if (isLoggedIn) {
      setShowLogin(false);
    } else {
      setShowLogin(true);
    }
  };

  const handleLogin = () => {
    // Simulating login logic
    setIsLoggedIn(true);
    setShowLogin(false);
  };

  const handleSignup = () => {
    // Simulating signup logic
    setIsLoggedIn(true);
    setShowLogin(false);
  };

  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Welcome to JourneyStart</h1>
        <p>Explore a world of knowledge and learning.</p>
        <button className="cta-button" onClick={handleGetStartedClick}>
          Get Started
        </button>
      </div>
      {showLogin ? (
        <div className="login-window">
          {/* Conditionally render login or signup form */}
          <LoginForm onLogin={handleLogin} />
          {/* <SignupForm onSignup={handleSignup} /> */}
        </div>
      ) : (
        isLoggedIn && <CourseListing />
      )}
    </div>
  );
};

export default HeroSection;