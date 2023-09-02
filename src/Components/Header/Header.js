import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './hstyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1><Link to="/">JourneyStart</Link></h1>
                 <h5>The Way of Excellence !</h5>
            </div>
            <nav className="navigation">
                <ul className="nav-list">
                    
                    <li ><Link to='/'><FontAwesomeIcon icon={faHouse} size='1x' />Home</Link></li>
                    <li ><Link to='/courses'><FontAwesomeIcon icon={faBook} size='1x' />Courses</Link></li>
                    <li ><Link to='/contact'><FontAwesomeIcon icon={faPhoneVolume} size='1x' />Contact</Link></li>
                    <li ><Link to='/login'><FontAwesomeIcon icon={faRightToBracket} size='1x' />Login</Link></li>
                </ul>
            </nav>

        </header>
    );
};

export default Header;