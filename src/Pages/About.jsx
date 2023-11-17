import React from 'react';
import { Navbar } from '../Components/Navbar/Navbar'
import { Footer } from '../Components/Footer/Footer'
const About = () => {
  return (
    <div className='about'>

      <Navbar />
      <div className='abtBack'></div>
      <div className='aboutInstruction'>
        <h2>Lorem Ipsum</h2>
        <p className='h2Sub'>Business and Startup Attorney</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      </div>
      <div className='aboutTeam'>
      <h2>Lorem Ipsum</h2>
        </div>
      <Footer />


    </div>
  );
}

export default About;