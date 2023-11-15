import React from 'react'
import { Navbar } from '../Components/Navbar/Navbar'
import { NavLink } from 'react-router-dom';
import { Footer } from '../Components/Footer/Footer'
import './page.css'
import SimpleSlider from '../Components/Slider/Slider'
import logo from '../Components/Assets/Logo.png'

export const Homepage = () => {
    return (

        <div className='head-bng'>
            <Navbar />
            <div className='client-header' >
        <SimpleSlider/>
      </div>
      <div className='media-publications'>
                <div className='mp-title'>Media Mentions & Publications:</div>
                <div className='mp-logo'>
                    <ul>
                        <li><NavLink to='https://www.cricbuzz.com/' target='_blank'><img src={logo} alt='logo' className='logo-size' /></NavLink></li>
                        <li><NavLink to='https://www.cricbuzz.com/' target='_blank'><img src={logo} alt='logo' className='logo-size' /></NavLink></li>
                        <li><NavLink to='https://www.cricbuzz.com/' target='_blank'><img src={logo} alt='logo' className='logo-size' /></NavLink></li>
                        <li><NavLink to='https://www.cricbuzz.com/' target='_blank'><img src={logo} alt='logo' className='logo-size' /></NavLink></li>
                        <li><NavLink to='https://www.cricbuzz.com/' target='_blank'><img src={logo} alt='logo' className='logo-size' /></NavLink></li>
                    </ul>
                </div>
            </div>
      <div className='instruction'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
            <Footer />
        </div>
    )
}
