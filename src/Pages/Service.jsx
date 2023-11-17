import React from 'react'
import { Navbar } from '../Components/Navbar/Navbar'
import { Footer } from '../Components/Footer/Footer'
import './Services.css'
export const Service = () => {
  return (
    <div>
      <Navbar />
      <img src="https://www.bendlawoffice.com/wp-content/uploads/2018/09/Bay-Bridge.png" alt="Ima 1" width="100%" height='350'></img>
      <div class="card-wrapper">
        <div class="card-header-desc">
      <h1>Our services</h1>
      <p class="service-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque et cum odit a? Veniam ea ipsam alias, temporibus, consequatur itaque libero ullam praesentium explicabo natus earum officia velit ducimus tempora.</p>
      </div>
      <div class="card-container">
      
        <div class="card">
            <img src="https://www.infogain.com/wp-content/uploads/2021/02/so-svc-digi-strat.jpg" alt="Service 1"></img>
            <div class="card-content">
                <h3>Service Title 1</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>

       
        <div class="card">
            <img src="https://www.infogain.com/wp-content/uploads/2021/02/so-svc-digi-strat.jpg" alt="Service 2"></img>
            <div class="card-content">
                <h3>Service Title 2</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>

       
        <div class="card">
            <img src="https://www.infogain.com/wp-content/uploads/2021/02/so-svc-digi-strat.jpg" alt="Service 3"></img>
            <div class="card-content">
                <h3>Service Title 3</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>


    </div>
    </div>

      <div class="services-container">
        <div class="services-left-column">
            <img src="https://www.infogain.com/wp-content/uploads/2023/03/partner-logo-ms.webp" alt="Service"></img>
        </div>
        <div class="services-right-column">
            <h2>Professional Service Title</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
            <p>Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.</p>
            <button class="join-button"> Join Us.  <i class="fas fa-arrow-right"></i></button>
        </div>
    </div>
    <Footer />
      </div>
  )
}
