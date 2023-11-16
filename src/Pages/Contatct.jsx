import React from 'react'
import { Navbar } from '../Components/Navbar/Navbar'
import { Footer } from '../Components/Footer/Footer'
import startup from '../Components/Assets/startup.jpg'



export const Contact = () => {
  return (
    <div> 
      <Navbar/>
      <img src={startup} alt="Ima 1" width="100%" height='350'></img>
    <Footer/>
    </div>
  )
}
