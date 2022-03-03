import React from 'react'
import './contactUs.css'
import bg from '../assets/contactBG.jpg'
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const ContactUs = () => {
  return (
    <>
    <div className='contact'>
        <div className="contact-container">
            <div className="contact-container-header">
                <div className="contact-heading">
                    <h2 className='contact-us'>CONTACT US</h2>
                    <p className='contact-us-text'>
                    Please contact us using the form below and let us know how we can be of assistance. For immediate questions, please call us at &nbsp;
                    <b>800.963.1988  &nbsp;</b>
                    from 9am-6pm EST, Monday-Friday.
                    </p>
                    <hr className='blue-hr'/>
                </div>
            </div>
            <form action="/contact_us" className="contact-form" acceptCharset='UTF-8' method='post'>
              <div className="form-name-section">
                <div className="form-name-section1">
                  <input type="text" name="name" id="name" className="form-control input-lg" placeholder='Full Name'/>
                </div>
                <div className="form-name-section1">
                  <input type="text" name="email" id="email" className="form-control input-lg" placeholder='Email' />
                </div>
              </div>
              <div className="category-section">
                Category:  &nbsp;
                <select name="request_category" id="request_category" className="request_category">
                <option value>Please Select...</option>
                <option value="Question about benefit(s)">Question about benefit(s)</option>
                <option value="Question about Membership">Question about Membership</option>
                <option value="Help with your account">Help with your account</option>
                <option value="Make a suggextion">Make a suggestion</option>
              </select>
              </div>
              <br />
              <div className="form-textarea">
                <div className="form-textarea1">
                  <textarea name="contact_us_message" id="contact_us_message" className="form-control input-lg form-textarea" placeholder="What's on your mind?" rows="5"></textarea>
                </div>
              </div>
              <br />
              <br />
              <br />
              <div className="form-btn">
                <input type="submit" name="commit" value="SUBMIT" className="btn-form" data-disable-with="SUBMIT" />
              </div>
            </form>
            <div className="contact-bottom">
              <div className="question">
                <p>
                  <strong>Have a question?</strong>
                  &nbsp;
                  <CallIcon style={{color: '#2a74e5'}} className="form-icon" />
                  800.963.1988 &nbsp;
                  <EmailIcon style={{color: '#2a74e5'}} className="form-icon" />
                  memberservices@founderscard.com
                </p>
              </div>
            </div>
        </div>
    </div>
    <footer class='contact-footer'>
      <div className="container-fluid">
        <p className="contact-footer-head">
          <strong>FOUNDERS</strong>CARD
        </p>
        <sub className="contact-footer-head-sub">memberservices@founderscard.com</sub>
        <br />
        <sub className="contact-footer-head-sub1">800.963.1988</sub>
        <br />
        <hr className='contact-footer-hr' />
        <ul className='contact-footer-link'>
          <li>
            <Link to="/" style={{textDecoration: 'none', color: 'white'}}>PRIVACY</Link>
          </li>
          <li>
            <Link to="/patnership" style={{textDecoration: 'none', color: 'white'}}>PARTNERSHIP INQUIRIES</Link>
          </li>
          <li>
            <Link to="/" style={{textDecoration: 'none', color: 'white'}}>CONTACT US</Link>
          </li>
          <li>
            <Link to="/" style={{textDecoration: 'none', color: 'white'}}>CAREERS</Link>
          </li>
        </ul>
        <ul className='contact-footer-social'>
          <li>
            <Link to="/" style={{textDecoration:'none'}}>
              <span className='contact-footer-icon facebook-icon'>
              &nbsp; f &nbsp;
              </span>
            </Link>
            <Link to="/">
              <span className='contact-footer-icon'>
                <TwitterIcon style={{color: '#fff' }, {paddingTop: '10px'}} />
              </span>
            </Link>
            <Link to="/">
              <span className='contact-footer-icon'>
                <InstagramIcon style={{color: 'white' }, {paddingTop: '10px'}} />
              </span>
            </Link>
          </li>
        </ul>
        <p className='contact-footer-last'>Copyright © 2022. FoundersCard. All Rights Reserved</p>
      </div>
    </footer>
    </>
  )
}

export default ContactUs