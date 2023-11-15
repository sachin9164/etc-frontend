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
      <div className='instruction'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
            <Footer />
        </div>
    )
}
