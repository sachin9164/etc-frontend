import React from 'react'
import { Navbar } from '../Components/Navbar/Navbar'
import { Footer } from '../Components/Footer/Footer'
import { TfiWrite } from "react-icons/tfi";
export const Service = () => {
  return (
    <div>
      <Navbar />
      <div className='serviceBack'><center>How Can We Help?</center></div>
      <div className='serviceInstruction'>
        <p className='h2Sub'>Business and Startup Attorney</p>
        <p className='srintro'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        <ul className='serviceList'>
          <li className='listItem'>
              <div className='srIcon'><TfiWrite /></div>
              <h5>lorem Ipsum</h5>
              <ul className='subItems'>
                <li><span>Lorem Ipsum is simply</span></li>
                <li><span>Lorem Ipsum is simply</span></li>
                <li><span>Lorem Ipsum is simply</span></li>
                <li><span>Lorem Ipsum is simply</span></li>
                <li><span>Lorem Ipsum is simply</span></li>
              </ul>
          </li>
          <li className='listItem'>
              <div className='srIcon'><TfiWrite /></div>
              <h5>lorem Ipsum</h5>
              <ul className='subItems'>
                <li><span>Lorem Ipsum is simply</span></li>
                <li><span>Lorem Ipsum is simply</span></li>
                <li><span>Lorem Ipsum is simply</span></li>
                <li><span>Lorem Ipsum is simply</span></li>
                <li><span>Lorem Ipsum is simply</span></li>
              </ul>
          </li><li className='listItem'>
              <div className='srIcon'><TfiWrite /></div>
              <h5>lorem Ipsum</h5>
              <ul className='subItems'>
                <li><span>Lorem Ipsum is simply</span></li>
                <li><span>Lorem Ipsum is simply</span></li>
                <li><span>Lorem Ipsum is simply</span></li>
                <li><span>Lorem Ipsum is simply</span></li>
                <li><span>Lorem Ipsum is simply</span></li>
              </ul>
          </li><li className='listItem'>
              <div className='srIcon'><TfiWrite /></div>
              <h5>lorem Ipsum</h5>
              <ul className='subItems'>
                <li><span>Lorem Ipsum is simply</span></li>
                <li><span>Lorem Ipsum is simply</span></li>
                <li><span>Lorem Ipsum is simply</span></li>
                <li><span>Lorem Ipsum is simply</span></li>
                <li><span>Lorem Ipsum is simply</span></li>
              </ul>
          </li><li className='listItem'>
              <div className='srIcon'><TfiWrite /></div>
              <h5>lorem Ipsum</h5>
              <ul className='subItems'>
                <li><span>Lorem Ipsum is simply</span></li>
                <li><span>Lorem Ipsum is simply</span></li>
                <li><span>Lorem Ipsum is simply</span></li>
                <li><span>Lorem Ipsum is simply</span></li>
                <li><span>Lorem Ipsum is simply</span></li>
              </ul>
          </li>
        </ul>

      </div>
      <Footer />
    </div>
  )
}
