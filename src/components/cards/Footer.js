import React, { useState } from 'react'
import {Button} from '../button/Button'
import card from '../../assets/card1.png'
import './footer.css'
import { Link } from 'react-router-dom'
import KeyboardArrowUpOutlinedIcon from '@material-ui/icons/KeyboardArrowUpOutlined';



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
          <Link to="/" style={{textDecoration: 'none'}}>
            <button className='footer-join-btn'>JOIN NOW</button>
          </Link>
      </div>
      <div className="join-img">
        <img src={card} alt="" className="join-card" />
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
          <Link to="/" className="footer-top-left" style={{textDecoration:'none'}}>
            <h1 className='logo-footer'>
              <b>FOUNDERS</b>CARD
            </h1>
          </Link>
          <div className="footer-top-right" >
            
            <Link to="/" className="footer-top-right-sub" style={{textDecoration:'none'}}>
              CONTACT US
            </Link>
            <br />
            <br />
            <Link to="/" className="footer-top-right-sub" style={{textDecoration:'none'}}>
              PATNERSHIP INQUIRIES
            </Link>
          </div>
        </div>
        <hr />
          <div className="footer-bottom">
          <div className="footer-bottom-sub">
          © 2022 FoundersCard   
          </div>
          <div className="footer-bottom-sub">
            |
          </div>
          <Link className="footer-bottom-sub" to="/" style={{textDecoration:'none'}}>Privacy Policy</Link>
          </div>
      </div>
    </>
  )
}

export default Footer