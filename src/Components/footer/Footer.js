import React from 'react';
import './fstyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
          
        <div className="footer-section">
          <p className='Footer-Main-Heading'>Connect With Us</p>
          <div className="social-icons">
            <a href="#" className="social-icon">
            <FontAwesomeIcon icon={faFacebookSquare} style={{ color: '#1877F2', fontSize: '1.5rem' }} />
            </a>
            <a href="#" className="social-icon">
            <FontAwesomeIcon icon={faYoutube} style={{ color: '#1877F2', fontSize: '1.5rem' }}/>
            </a>
            <a href="#" className="social-icon">
            <FontAwesomeIcon icon={faLinkedin} style={{ color: '#1877F2', fontSize: '1.5rem' }}/>
              
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