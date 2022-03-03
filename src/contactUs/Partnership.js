import React from 'react'
import './contactUs.css'
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const Partnership = () => {
  return (
    <>
    <div className='partner'>
        <div className="partner-container">
            <div className="contact-container-header">
                <div className="contact-heading">
                    <h2 className='contact-us'>PARTNERING WITH <b>FOUNDERS</b>CARD </h2>
                    <br />
                    <p className='contact-us-text'>
                    We look to partner with leading and innovative companies that will contribute to the FoundersCard community.
                    </p>
                    <p className='contact-us-text'>If you are interested in partnering with us, please complete the form below:</p>
                    <hr className='blue-hr'/>
                </div>
            </div>
            <form action="/contact_us" acceptCharset='UTF-8' method='post'>
            <div className="partner-radio">
              <span className="partner-text">Are you a FoundersCard Member?</span>
              <span className="radio-options">
                <label className="radio-inline">
                <input id="member_true" type="radio" value="true" name="interested_submission[partner_is_member]" />
                Yes
                </label>
                <label className="radio-inline">
                <input id="member_false" type="radio" value="false" name="interested_submission[partner_is_member]" />
                No
                </label>
              </span>
            </div>
              <div className="form-name-section">
                <div className="form-name-section1">
                  <input type="text" name="name" id="name" class="form-control input-lg" placeholder='Full Name'/>
                </div>
                <div className="form-name-section1">
                  <input type="text" name="email" id="email" class="form-control input-lg" placeholder='Email' />
                </div>
                </div>
                <div className="form-name-section">
                <div className="form-name-section1">
                  <input type="text" name="phone" id="phone" class="form-control input-lg" placeholder='Phone'/>
                </div>
                <div className="form-name-section1">
                  <input type="text" name="company" id="company" class="form-control input-lg" placeholder='Company'/>
                </div>
                
              </div>
              <div className="form-textarea">
                <div className="form-textarea1">
                  <textarea name="contact_us_message" id="contact_us_message" class="form-control input-lg form-textarea" placeholder="Please tell us a little about your company" rows="5"></textarea>
                </div>
              </div>
              <br />
              <div className="partner-interested">
                <div className="interested-text">
                  I'm interested in:
                </div>
              <div className="checkbox-container">
              <div className="interested-checkbox">
                <label htmlFor="" className="checkbox-option">
                <input type="checkbox" id="interested_in_event" name="interested_in" value="advertising packages" class="interested-in-checkbox" />
                Advertising Packages
                <br />
                  (starts at $5000)
                </label>
              </div>
              <div className="interested-checkbox">
                <label htmlFor="" className="checkbox-option">
                <input type="checkbox" id="interested_in_event" name="interested_in" value="advertising packages" class="interested-in-checkbox" />
                Advertising Packages
                <br />
                  (starts at $5000)
                </label>
              </div>
              <div className="interested-checkbox">
                <label htmlFor="" className="checkbox-option">
                <input type="checkbox" id="interested_in_event" name="interested_in" value="advertising packages" class="interested-in-checkbox" />
                Advertising Packages
                <br />
                  (starts at $5000)
                </label>
              </div>
              </div>
              <div className="interested-checkbox2">
                <label htmlFor="" className="checkbox-option">
                <input type="checkbox" id="interested_in_event" name="interested_in" value="advertising packages" class="interested-in-checkbox" />
                Advertising Packages
                <br />
                  (starts at $5000)
                </label>
              </div>
              <br />
              <div className="interested-textarea">
              <textarea id="interested_in_textarea" class="form-control input-lg"></textarea>
              </div>
              </div>
              <div className="form-btn">
                <input type="submit" name="commit" value="SUBMIT" class="btn-form-blue" data-disable-with="SUBMIT" />
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
            <Link to="/" style={{textDecoration: 'none', color: 'white'}}>PARTNERSHIP INQUIRIES</Link>
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

export default Partnership