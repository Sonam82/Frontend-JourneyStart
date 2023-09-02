import React from 'react';
import Header from '../Header/Header';
import Footer from '../footer/Footer';
import abt from '/Users/GauravPandey/Desktop/DSA/Frontend-JourneyStart/src/image/about.jpg'
import './contactStyle.css'
const Contact = () => {
  return (
    <div>
      <Header/>
      <h2>About Us</h2>
      <div className='about'>
         <div className='text'>
          <p>
          <b>"</b>At JourneyStart, our vision is to empower the next generation of technical students by providing them with free and accessible education.<b>"</b> <br/>We envision a world where every aspiring technologist has the opportunity to enhance their skills, regardless of their background or financial constraints. Through innovative learning resources, community engagement, and a commitment to excellence, we aim to foster a global community of learners who are equipped to shape the future through technology.
          </p>
         </div>
         <div className='pic'>
          <img src={abt}/>
         </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;