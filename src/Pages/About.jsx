import React from 'react';
import { Navbar } from '../Components/Navbar/Navbar'
import { Footer } from '../Components/Footer/Footer'
import teamwork from '../Components/Assets/teamwork.jpg'
const About = () => {
  return (
    <div className='about'>
      <div className='page-header-overlay'>
      <Navbar />
      <img src={teamwork} alt="Ima 1" width="100%" height='500'></img>
      </div>
      {/* <div className='contact-us'>
        <h5>Contact Us</h5>
        <p>Address: 6701 koll center parkway</p>
        <p>Pleasanton, CA - 94568</p>
      </div> */}
      <Footer />
    </div>
  );
}

export default About;