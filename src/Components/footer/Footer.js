import React from 'react';
import './fstyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <p className='Footer-Main-Heading'>About Us</p>
          <p><b>We are an<br></br> Ed tech company who is filling the gap between the <br></br> industry and students.</b></p>
        </div>
        <div className="footer-section">
          <p className='Footer-Main-Heading'>Contact Us</p>
          <p>Journeystart192023@gmail.com</p>
        </div>
        <div className="footer-section">
          <p className='Footer-Main-Heading'>Follow Us</p>
          <div className="social-icons">
            <a href="#" className="social-icon">
            <FontAwesomeIcon icon={faFacebookSquare} style={{ color: '#1877F2', fontSize: '1.5rem' }} />
             
            </a>
            <a href="#" className="social-icon">
            <FontAwesomeIcon icon={faTwitter} style={{ color: '#1877F2', fontSize: '1.5rem' }}/>
            </a>
            
            <a href="#" className="social-icon">
            <FontAwesomeIcon icon={faInstagram} style={{ color: '#1877F2', fontSize: '1.5rem' }}/>
              
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; JourneyStart All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;