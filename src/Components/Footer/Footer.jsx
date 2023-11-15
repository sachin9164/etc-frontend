import React from 'react'
import './Footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

export const Footer = () => {
    return (
        <div className='footer-content'>
     <div className="container">
        <div className="left-column">
        <h2>Contact Us</h2>
        <p>Address: 6701 koll center parkway</p>
        <p>Pleasanton,</p>
        <p>CA - 94568</p>
        </div>
        <div className="right-column">
        <div className="social-award-icons">
            <img src="https://www.bendlawoffice.com/wp-content/uploads/2016/05/Money_Sign.png" alt="Ima 1" width="150"></img>
            <img src="https://www.bendlawoffice.com/wp-content/uploads/2016/05/Money_Sign.png" alt="Ima 2" width="150"></img>
            <img src="https://www.bendlawoffice.com/wp-content/uploads/2016/05/Money_Sign.png" alt="Ima 3" width="150"></img>
        </div>
            <div className="social">
            
            <ul className="social-icons">
                <li><a href="#"><FaFacebook /></a></li>
                <li><a href="#"><FaXTwitter /></a></li>
                <li><a href="#"><FaInstagram /></a></li>
            </ul>
            </div>         
        </div>
    </div>
            <div className='instruction'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
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
