import React from 'react'
import pic1 from '../../assets/1.jpeg'
import "./cards.css"
import {Link} from 'react-router-dom'
import {Button} from '../button/Button'
import card from '../../assets/card-home.jpeg'
import freshworks from '../../assets/freshworks.png'
import bewakoof from '../../assets/bewakoof.png'
import deciwood from '../../assets/deciwood.jpg'
import upgrad from '../../assets/upgrad.jpg'
import mailmodo from '../../assets/mailmodo.png'
import kibi from '../../assets/kibi.jpeg'
import leaf from '../../assets/leaf.jpg'
import corpcrush from '../../assets/corpcrush.jpg'


const Cards = () => {
  return (
    <div className="cards">
      <h1>Explore Popular Member Benefits</h1>
      <div className="cards-row">
        <div className="cards-item">
          <Link to="/">
                <img src={deciwood} alt="" className="cards-image"/>
            </Link>
              <div className="cards-info">
                  <h3 className="cards-info1">Deciwood</h3>
                  <h2 className="cards-info2">Flat 40% Discount</h2>
                  <h3 className="cards-info1">On all speakers on the platform</h3>
                  <Link to="/" style={{ color: 'white' }}>Learn More</Link>
              </div>
          </div>
          <div className="card-center-space"></div>
          <div className="cards-item">
          <Link to="/">
                <img src={freshworks} alt="" className="cards-image" />
            </Link>
              <div className="cards-info">
                  <h3 className="cards-info1">Freshworks</h3>
                  <h2 className="cards-info2">$10000 in value</h2>
                  <h3 className="cards-info1">Free credits for startups</h3>
                  <Link to="/" style={{ color: 'white' }}>Learn More</Link>
              </div>
          </div>
      </div>
      <div className="cards-row">
      <div className="cards-item">
          <Link to="/">
                <img src={bewakoof} alt="" className="cards-image" />
            </Link>
              <div className="cards-info">
                  <h3 className="cards-info1">Bewakoof.com</h3>
                  <h2 className="cards-info2">15% Discount</h2>
                  <h3 className="cards-info1">On Shopping for all products on Bewakoof at no minimum order value</h3>
                  <Link to="/" style={{ color: 'white' }}>Learn More</Link>
              </div>
          </div>
          <div className="cards-item">
          <Link to="/">
                <img src={upgrad} alt="" className="cards-image" />
            </Link>
              <div className="cards-info">
                  <h3 className="cards-info1">Upgrad</h3>
                  <h2 className="cards-info2">Flat 10% Discount</h2>
                  <h3 className="cards-info1">On Selected Upgrad Courses</h3>
                  <Link to="/" style={{ color: 'white' }}>Learn More</Link>
              </div>
          </div>
      </div>
      
      <div className="join-now">
        <h2>Join Now</h2>
        <h5 className="redeem">and start redeeming 500+ benefits</h5>
        <Link to="/register">
        <button className='join-now-btn'>JOIN NOW</button>
        </Link>
      </div>
      <div className="cards-row">
        <div className="cards-item">
          <Link to="/">
                <img src={mailmodo} alt="" className="cards-image" />
            </Link>
              <div className="cards-info">
                  <h3 className="cards-info1">Mailmodo</h3>
                  <h2 className="cards-info2">50% Off</h2>
                  <h3 className="cards-info1">On all paid plans & 3 months dedicated success partner and email marketing expert consultant</h3>
                  <Link to="/" style={{ color: 'white' }}>Learn More</Link>
              </div>
          </div>
          <div className="card-center-space"></div>
          <div className="cards-item">
          <Link to="/">
                <img src={kibi} alt="" className="cards-image" />
            </Link>
              <div className="cards-info">
                  <h3 className="cards-info1">KibiSports</h3>
                  <h2 className="cards-info2">10% Discount on all products</h2>
                  <h3 className="cards-info1"></h3>
                  <Link to="/" style={{ color: 'white' }}>Learn More</Link>
              </div>
          </div>
      </div>
      <div className="cards-row">
      <div className="cards-item">
          <Link to="/">
                <img src={leaf} alt="" className="cards-image" />
            </Link>
              <div className="cards-info">
                  <h3 className="cards-info1">Leaf Studios</h3>
                  <h2 className="cards-info2">Flat 25% Off</h2>
                  <h3 className="cards-info1">On all products with no minimum value</h3>
                  <Link to="/" style={{ color: 'white' }}>Learn More</Link>
              </div>
          </div>
          <div className="cards-item">
          <Link to="/">
                <img src={corpcrush} alt="" className="cards-image" />
            </Link>
              <div className="cards-info">
                  <h3 className="cards-info1">CorpCrush</h3>
                  <h2 className="cards-info2">Flat 30% off </h2>
                  <h3 className="cards-info1">On all services & 4 Free expert consultation on digital marketing & development services.</h3>
                  <Link to="/" style={{ color: 'white' }}>Learn More</Link>
              </div>
          </div>
      </div>
      <div className="founders-card-home">
        <img src={card} alt="" className="card-img-home" />
        <div className="card-text">
          <h3 className="save-text-home">Unprecedented Savings & Elite Access</h3>
          <p className="card-details">YOLOCard was created for entrepreneurs by entrepreneurs. Become part of our community of over 100,000 Members and start receiving access to unprecedented benefits and networking opportunities.</p>
          <Link to ="/register">
          <button className="btn-card-join-now">
            JOIN NOW
          </button>
          </Link>
        </div>
      </div>
      
    </div>
  )
}

export default Cards