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
import { ContactFooter } from './ContactFooter';

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
                    <b>+91-7011733860  &nbsp;</b>
                    from 10am-7pm IST, Monday-Friday.
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
                  <CallIcon style={{color: '#e50914'}} className="form-icon" />
                  +91-7011733860 &nbsp;
                  <EmailIcon style={{color: '#e50914'}} className="form-icon" />
                  hello@trivy.co
                </p>
              </div>
            </div>
        </div>
    </div>
   <ContactFooter />
    </>
  )
}

export default ContactUs