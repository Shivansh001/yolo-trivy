import React, { useState } from 'react'
import {Button} from '../button/Button'
import card from '../../assets/card-home.jpeg'
import './footer.css'
import { Link } from 'react-router-dom'
import KeyboardArrowUpOutlinedIcon from '@material-ui/icons/KeyboardArrowUpOutlined';
import logo from '../../assets/logo.png'


const Footer = () => {
  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
    <>
    <div className='footer-join'>
      <div className="join-text">
          <h1 className='join-head'> Join Our Community!</h1>
          <p className='join-head2'>Submit your application to join 100,000 other Members and become part of our community.</p>
          <Link to="/register" style={{textDecoration: 'none'}}>
            <button className='footer-join-btn'>JOIN NOW</button>
          </Link>
      </div>
      <div className="join-img">
        <img src={card} alt="" className="footer-card" />
      </div>
    </div>
    <br />
      <div className="return">
      <KeyboardArrowUpOutlinedIcon className="return-arrow" onClick={scrollTop} />
        <div className="return-text" onClick={scrollTop}>
        RETURN TO TOP
        </div>
      </div>
      <div className="footer">
        <div className="footer-top">
          <Link to="/home" className="footer-top-left" style={{textDecoration:'none'}}>
            <h1 className='logo-footer'>
              <img src={logo}/>
            </h1>
          </Link>
          <div className="footer-top-right" >
            
            <Link to="/contactus" className="footer-top-right-sub" style={{textDecoration:'none'}}>
              CONTACT US
            </Link>
            <br />
            <br />
            <Link to="/partnership" className="footer-top-right-sub" style={{textDecoration:'none'}}>
              PATNERSHIP INQUIRIES
            </Link>
            <br />
            <br />
            <Link className="footer-top-right-sub" to="/privacy" style={{textDecoration:'none'}}>PRIVACY POLICY</Link>
          </div>
        </div>
        <hr />
          <div className="footer-bottom">
          <div className="footer-bottom-sub">
          © 2022 YOLO by Trivy Technologies Private Limited 
          </div>
          
          </div>
      </div>
    </>
  )
}

export default Footer