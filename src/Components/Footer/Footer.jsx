import React from 'react'
import './Footer.css'
export const Footer = () => {
    return (
        <div className='footer-content'>
     <div class="container">
        <div class="left-column">
        <h2>Contact Us</h2>
        <p>Address: 6701 koll center parkway</p>
        <p>Pleasanton,</p>
        <p>CA - 94568</p>
        </div>
        <div class="right-column">
        <div class="social-award-icons">
            <img src="https://www.bendlawoffice.com/wp-content/uploads/2016/05/Money_Sign.png" alt="Ima 1" width="150"></img>
            <img src="https://www.bendlawoffice.com/wp-content/uploads/2016/05/Money_Sign.png" alt="Ima 2" width="150"></img>
            <img src="https://www.bendlawoffice.com/wp-content/uploads/2016/05/Money_Sign.png" alt="Ima 3" width="150"></img>
        </div>
            <div className="social">
            
            <ul class="social-icons">
                <li><a href="#"> <h2>Facebook</h2></a></li>
                <li><a href="#"> <h2>Twitter</h2></a></li>
                <li><a href="#"> <h2>Instagram</h2></a></li>
            </ul>
            </div>         
        </div>
    </div>
            <div className='instruction'>
                <p>Bend Law Group is a San Francisco law firm of experienced small business attorneys and startup lawyers. Our team’s expertise revolves around helping startups, entrepreneurs and small businesses succeed.</p>
            </div>
            <div className='copy-rights'>
                <ul className='copy-menu'>
                    <li>Copyright BLG 2023</li>
                    <li>Terms & Use</li>
                    <li>Privacy Policy</li>
                    <li>Resources</li>
                    <li>Site by Butchershop Creative</li>
                </ul>
            </div>

        </div>
    )
}
