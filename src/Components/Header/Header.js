import React from 'react';
import { Link } from 'react-router-dom';
import './hstyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faPhoneVolume} from '@fortawesome/free-solid-svg-icons';

import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">JourneyStart</Link>
      </div>
      <nav className="navigation">
        <ul className="nav-list">
        <FontAwesomeIcon icon={faHouse} size='2x' />
        <FontAwesomeIcon icon={faBook} size='2x' />
        <FontAwesomeIcon icon={faPhoneVolume} size='2x' />
        <FontAwesomeIcon icon={faRightToBracket} size='2x' />          
        </ul>
      </nav>
      
    </header>
  );
};

export default Header;