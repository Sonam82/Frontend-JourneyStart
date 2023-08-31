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
                    
                    <li ><Link to='/'><FontAwesomeIcon icon={faHouse} size='2x' /></Link></li>


                    <li ><Link to='/courses'><FontAwesomeIcon icon={faBook} size='2x' /></Link></li>
                    <li ><Link to='/contact'><FontAwesomeIcon icon={faPhoneVolume} size='2x' /></Link></li>
                    <li ><Link to='/login'><FontAwesomeIcon icon={faRightToBracket} size='2x' /></Link></li>
                </ul>
            </nav>

        </header>
    );
};

export default Header;