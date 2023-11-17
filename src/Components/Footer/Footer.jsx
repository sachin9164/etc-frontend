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
        
            <div className="social">
            
            <ul className="social-icons">
                <li><a href="#"><FaFacebook /></a></li>
                <li><a href="#"><FaXTwitter /></a></li>
                <li><a href="#"><FaInstagram /></a></li>
            </ul>
            </div>         
        </div>
    </div>
            
            <div className='copy-rights'>
                <ul className='copy-menu'>
                    <li>Lorem Ipsum 2023</li>
                    <li>Lorem Ipsum</li>
                    <li>Lorem Ipsum</li>
                    <li>Lorem Ipsum</li>
                    <li>Lorem Ipsum</li>
                </ul>
            </div>

        </div>
    )
}
