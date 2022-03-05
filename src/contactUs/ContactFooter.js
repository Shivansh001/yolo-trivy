import React from 'react'
import './contactUs.css'
import bg from '../assets/contactBG.jpg'
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import logo from "../assets/logo.png"

export const ContactFooter = () => {
  return (
    <div>
        <footer class='contact-footer'>
      <div className="container-footer">
        <p className="contact-footer-head">
          <img src={logo} style={{width:'30%', marginTop: '0'}}/>
        </p>
        <sub className="contact-footer-head-sub">hello@trivy.co</sub>
        <br />
        <sub className="contact-footer-head-sub1">+91-7011733860</sub>
        <br />
        <hr className='contact-footer-hr' />
        <ul className='contact-footer-link'>
          <li>
            <Link to="/privacy" style={{textDecoration: 'none', color: 'white'}}>PRIVACY</Link>
          </li>
          <li>
            <Link to="/patnership" style={{textDecoration: 'none', color: 'white'}}>PARTNERSHIP INQUIRIES</Link>
          </li>
          <li>
            <Link to="/contactus" style={{textDecoration: 'none', color: 'white'}}>CONTACT US</Link>
          </li>
          <li>
            <Link to="/careers" style={{textDecoration: 'none', color: 'white'}}>CAREERS</Link>
          </li>
        </ul>
        <ul className='contact-footer-social'>
          <li>
            
            <Link to="https://www.linkedin.com/company/trivy/">
              <span className='contact-footer-icon'>
                <LinkedInIcon style={{color: '#fff' }} />
              </span>
            </Link>
            <Link to="/">
              <span className='contact-footer-icon'>
                <TwitterIcon style={{color: '#fff'}} />
              </span>
            </Link>
            <Link to="https://www.instagram.com/trivy.co/">
              <span className='contact-footer-icon'>
                <InstagramIcon style={{color: 'white'}} />
              </span>
            </Link>
          </li>
        </ul>
        <p style={{marginLeft: '28%'}} className='contact-footer-last'>Copyright © 2022 YOLO by Trivy Technologies Private Limited. All Rights Reserved</p>
      </div>
    </footer>
    </div>
  )
}
