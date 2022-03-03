import React from 'react'
import './benefitDetail.css'
import car from '../../assets/car.jpg'
import {Link} from 'react-router-dom'
import person from '../../assets/noAvatar.png'
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const BenefitsDetails = () => {
  return (
    <>
        <div className="details-hero">
            <img src={car} className="car-img" />
            <div className="benefit-external-info">
            1-888-749-8227
            &nbsp; &nbsp; &nbsp; &nbsp;
            <a href="http://www.sixt.com/" target="_blank" style={{color: 'white'}}>
                Visit Website
            </a>
            </div>
            <div className="benefits-redemption">
              <FavoriteBorderIcon className='fav-btn'/>
              <div className="ben-rem-top">
                <h1 className="rem-head">Sixt Rent a Car</h1>
                <h5 className="rem-head2">FC EXCLUSIVE BENEFIT</h5>
                <div className="benefit-offers-and-button">
                <div className="benefit-offers">
                  <p className="benefits-offer-text">FoundersCard Members receive:</p>

                  <ul className="benefits-offer-text1">
                  <li ><span>Up to 15% off rental bookings</span></li>
                  <li><span>Complimentary Platinum Sixt Card Membership</span></li>
                  </ul>

                </div>

                <div className="text-center" >
                    <button id="guest-preview-benefit-button" className="rem-btn" to="/apply" >
                    <span className="MORE">JOIN NOW TO REDEEM!</span></button>
                </div>
                <div className="ben-rem-center">

                  <h6 className="rem-center-text" >
                  Saved over $1000 on an 8 day rental...Made the trip much more luxurious and fun.
                  </h6>
                  <div className="rem-comment">
                  <span className="comment-img">
                    <img className="comment-image" src={person} />
                  </span>

                  <div className="comment-text" >
                    <p >
                      <span className="no-decoration">
                        Luke R.
                      <span>,

                      CEO @
                      Radical Boxing LLC
                    </span></span></p>
                    <p className="margin-top-0" >
                      Member Since 2016
                    </p>
                  
                    </div>
                    </div>
                  </div>
                  <div class="fine-print ">
                    <div class="fine-print1" >
                      <div className='fine-print2'>
                        <p>Fine Print:</p><br />

                        <p>The discount will be automatically applied to your booking via the button below. No promo code necessary.</p><br />

                        <p>Your Sixt Card will be forwarded to you by mail within 2-4 weeks of submitting your application. You can reserve with your Sixt Card on <Link to="http://www.sixt.com" style={{color: 'black'}}>www.sixt.com</Link> the day after you submit your application. </p>
                        <br />

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
          <div className="benefit-details-center">
            <div className="benefit-stats" >
              <span className="stat-container">
                <span className="no-translation">916</span> Likes</span>
              <span className="stat-container">
                <span className="no-translation">35,695</span> Redemptions</span>
            </div>
            <div className="benefit-description">
              <h2 className="benefit-description-heading">
                What We Love About &nbsp;
                <span className="no-translation">Sixt Rent a Car</span>
              </h2>
              <br />
              <div className="benefit-description-div" >
                <p>With over 100 years of experience, Sixt is one of the leading global car rental companies with presence in over 105 countries. Since 2010 Sixt entered the US market and is rapidly expanding. Specializing in the rental of luxury cars at economy rates, Sixt will satisfy your rental needs across the globe, while offering premium customer service. Drive classy and affordable where ever our customers plan on going.
                <br /> <br /><br />
                <b>Benefits of Platinum Sixt Card Membership:</b><br />
                -Free upgrade to the next car group, subject to availability.<br />
                -20% discount on Sixt limousine service in Germany, Austria and Switzerland. 10% in other countries.<br />
                -For each rental with Sixt, collect miles with their airline partners, points with their hotel partners, bonus points with other participating programs, some restrictions apply.
                </p>

          </div>
        </div>
        </div>
        <div className="benefit-gallery-images">
              <div className="slick-slide">
                <img className="rem-img" src="https://assets-founderscard.netdna-ssl.com/images/picture_gallery_items/images/2199/normal_content_germany_171106_bmw_1series_20_7.jpg?1579530118" />
              </div>
              <div className="slick-slide">
                <img className="rem-img" src="https://assets-founderscard.netdna-ssl.com/images/picture_gallery_items/images/2200/normal_original.jpg?1376667667" />
              </div>
              <div className="slick-slide">
                <img className="rem-img" src="https://assets-founderscard.netdna-ssl.com/images/picture_gallery_items/images/3336/normal_gallery_Sixt-BIG.jpg?1440086101" />
          </div>
        </div>

        <div className="benefit-insights-row">
          <div className="insight-head">
              <h2 className="insight-head">Share your experience and total savings with fellow Members...</h2>
          </div>

        <div className="benefit-insights-container" >
          <div className="benefit-insights">
            
          <div className="benefit-insight-row">
              <Link className="comment-image-link" to="/users/29680c-slavafurman">
                <img className="comment-image1" src="https://assets-founderscard.netdna-ssl.com/images/users/avatars/31090/tiny_headshot.jpg" />
              </Link>
              <div className="comment-text1" >
                <h3 className="comment-text-up">Great upgrade and service with the platinum card.</h3>

                <h5 className="comment-text-down">
                  <Link style={{textDecoration: 'none', color:'black'}} to="/users/29680c-slavafurman">
                    Slava F.
                  </Link>          , 
                  Founder &amp; CEO @ Noli Yoga
                </h5>

                
              </div>
            
          </div>

          <div className="benefit-insight-row">
              <Link className="comment-image-link" to="/users/564d00-johncordova">
                <img className="comment-image1" src="https://assets-founderscard.netdna-ssl.com/images/users/avatars/45648/tiny_IMG_4669.JPG" />
              </Link>
              <div className="comment-text1">
                <h3 className="comment-text-up">My wife and I used Sixt when we traveled to New Zealand.  We loved their service.  They were friendly and helpful.  The car was very clean and well-maintained.  We would definitely use them again.</h3>

                <h5 className="comment-text-down">
                  <Link style={{textDecoration: 'none', color:'black'}} to="/users/564d00-johncordova">
                    John C.
                  </Link>          , 
                  President and C.E.O. @ Study Mentors
                </h5>
            </div>
          </div>

          <div className="benefit-insight-row">
              <Link className="comment-image-link" to="/users/97b6b3-chrishutchins">
                <img className="comment-image1" src="https://assets-founderscard.netdna-ssl.com/images/users/avatars/2958/tiny_me_1.jpg" />
              </Link>
              <div className="comment-text1" >
                <h3 className="comment-text-up">I used this all over croatia and montenegro and it saved me a TON of money!!!</h3>

                <h5 className="comment-text-down">
                  <Link style={{textDecoration: 'none', color:'black'}} to="/users/97b6b3-chrishutchins" >
                    Chris H.
                </Link>          , 
                  Founder &amp; CEO @ Grove
                </h5>
            </div>
          </div>

                  </div>
                </div>
                <br />
                  <div className="text-center">
                    <button className="view-more-insights" data-url="/benefit_comments/list/sixt-rent-a-car">VIEW MORE</button>
                  </div>
            </div>
            <h2 className="insight-head">Benefits Similar to Sixt Rent a Car</h2>

          <div className="similar-benefits-row">
            
            <div  className="similar-container">
            <Link to="/">
            <img alt="Go Rentals" className="primary-image" src="https://assets-founderscard.netdna-ssl.com/images/picture_gallery_items/images/7801/gallery_27709971_1818666881477196_8180759561681429044_o.jpg?1628336773" />
            </Link>
            <div className="benefit-title-container">
              <Link to="/benefits/go-rentals" className="link-no-underline" style={{textDecoration: 'none', color: 'black'}}>
              <h5 className="margin-y-7 no-translation">Go Rentals</h5>
              </Link>
            
            <div className="benefit-description-container">
              20% off luxury car rentals
            </div>
            </div>
            </div>
            <div  className="similar-container">
            <Link to="/">
            <img alt="Go Rentals" className="primary-image" src="https://assets-founderscard.netdna-ssl.com/images/picture_gallery_items/images/7801/gallery_27709971_1818666881477196_8180759561681429044_o.jpg?1628336773" />
            </Link>
            <div className="benefit-title-container">
              <Link to="/benefits/go-rentals" className="link-no-underline" style={{textDecoration: 'none', color: 'black'}}>
              <h5 className="margin-y-7 no-translation">Go Rentals</h5>
              </Link>
            
            <div className="benefit-description-container">
              20% off luxury car rentals
            </div>
            </div>
            </div>
            <div  className="similar-container">
            <Link to="/">
            <img alt="Go Rentals" className="primary-image" src="https://assets-founderscard.netdna-ssl.com/images/picture_gallery_items/images/7801/gallery_27709971_1818666881477196_8180759561681429044_o.jpg?1628336773" />
            </Link>
            <div className="benefit-title-container">
              <Link to="/benefits/go-rentals" className="link-no-underline" style={{textDecoration: 'none', color: 'black'}}>
              <h5 className="margin-y-7 no-translation">Go Rentals</h5>
              </Link>
            
            <div className="benefit-description-container">
              20% off luxury car rentals
            </div>
            </div>
            </div>


          </div>
          <br />
          <br />

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

export default BenefitsDetails