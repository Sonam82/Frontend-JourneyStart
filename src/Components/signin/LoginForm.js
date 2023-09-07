import React, { useState } from 'react';
import './LoginStyle.css'; // Import your CSS file for styling
import Header from '../Header/Header';
import Footer from '../footer/Footer';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nmobileame, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false); // Track whether it's a signup form

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login or signup logic
    if (isSignUp) {
      // Perform signup logic
    } else {
      // Perform login logic
    }
  };

  return (
    <>
      <Header />
      <div className="login-container">
        <div className="login-box">
          <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text" 
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
             <input
              type="mobile"
              placeholder="Enter Mobile Number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">{isSignUp ? 'Sign Up' : 'Login'}</button>
          </form>
          <p>
            {/* {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '} */}
            <span className="signup-link" onClick={() => setIsSignUp(!isSignUp)}>
              {isSignUp ? 'Login' : 'Sign Up'}
            </span>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
