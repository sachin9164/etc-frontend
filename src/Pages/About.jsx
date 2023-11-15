import React from 'react';
import { Navbar } from '../Components/Navbar/Navbar'
import { Footer } from '../Components/Footer/Footer'
import './About.css'
const About = () => {
  return (
    <div className='about'>
      <div className='page-header-overlay'>
      <Navbar />
      <img src="https://www.bendlawoffice.com/wp-content/uploads/2018/09/Bay-Bridge.png" alt="Ima 1" width="100%" height='350'></img>
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