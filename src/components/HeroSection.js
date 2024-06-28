import React from 'react'
import { Button } from './button';
import './HeroSection.css';
import '../App.css';


function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='\videos\video-4.mp4' autoPlay loop muted />
    </div>
  )
}

export default HeroSection
