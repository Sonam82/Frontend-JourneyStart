import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './hstyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBook, faPhoneVolume, faRightToBracket } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${menuOpen ? 'menu-open' : ''}`}>
      <div className="logo">
        <h1><Link to="/">JourneyStart</Link></h1>
        <h5>The Way of Excellence !</h5>
      </div>
      <nav className={`navigation ${menuOpen ? 'open' : ''}`}>
        <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
          <li><Link to='/'><FontAwesomeIcon icon={faHouse} size='1x' />Home</Link></li>
          <li><Link to='/courses'><FontAwesomeIcon icon={faBook} size='1x' />Courses</Link></li>
          <li><Link to='/contact'><FontAwesomeIcon icon={faPhoneVolume} size='1x' />About Us</Link></li>
          <li><Link to='/login'><FontAwesomeIcon icon={faRightToBracket} size='1x' />Login</Link></li>
        </ul>
      </nav>
      <button className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>
    </header>
  );
};

export default Header;
