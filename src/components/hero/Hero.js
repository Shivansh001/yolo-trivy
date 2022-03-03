import React from 'react'
import '../../App.css'
import './hero.css'
import {Link} from 'react-router-dom'


const Hero = () => {
  return (
    <div className="hero-container">
        <video src="https://cdn-founderscard.netdna-ssl.com/assets/home/ship-87955f384007eeece54494a9301733bf72df85d446169b718ca2fec67ffa3188.jpg" autoPlay loop muted/>
        <div className="hero-bg"></div>
        <div className="hero-text">
        <h1>Extraordinary Benifits for Entrepreneurs</h1>
        <p>We're excited to share a preview of the full FoundersCard Member experience</p>
        <div className="hero-btn">
            <Link to="/" style={{textDecoration:'none'}}>
              <button className="btn-hero">JOIN NOW</button>
            </Link>
        </div>
        </div>
        
    </div>
  )
}

export default Hero