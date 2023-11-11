import React from 'react'
import { Navbar } from '../Components/Navbar/Navbar'
import { Footer } from '../Components/Footer/Footer'
import './page.css'
import ImageSlider from 'react-simple-image-slider'
import SimpleSlider from '../Components/Slider/Slider'
export const Homepage = () => {
    return (

        <div className='head-bng'>
            <Navbar />
            <div className='client-header' >
        <SimpleSlider/>
      </div>
            <Footer />
        </div>
    )
}
