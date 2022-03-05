import React from 'react'
import pic1 from '../../assets/1.jpeg'
import "./cards.css"
import {Link} from 'react-router-dom'
import {Button} from '../button/Button'
import card from '../../assets/card.png'

const Cards = () => {
  return (
    <div className="cards">
      <h1>Explore Popular Member Benefits</h1>
      <div className="cards-row">
        <div className="cards-item">
          <Link to="/">
                <img src={pic1} alt="" className="cards-image" />
            </Link>
              <div className="cards-info">
                  <h3 className="cards-info1">Loyalty Status Upgrades</h3>
                  <h2 className="cards-info2">Complimentary Status Upgrades</h2>
                  <h3 className="cards-info1">Receive upgrades with major airline, hotel, and car rental programs</h3>
                  <Link to="/" style={{ color: 'white' }}>Learn More</Link>
              </div>
          </div>
          <div className="card-center-space"></div>
          <div className="cards-item">
          <Link to="/">
                <img src={pic1} alt="" className="cards-image" />
            </Link>
              <div className="cards-info">
                  <h3 className="cards-info1">Loyalty Status Upgrades</h3>
                  <h2 className="cards-info2">Complimentary Status Upgrades</h2>
                  <h3 className="cards-info1">Receive upgrades with major airline, hotel, and car rental programs</h3>
                  <Link to="/" style={{ color: 'white' }}>Learn More</Link>
              </div>
          </div>
      </div>
      <div className="cards-row">
      <div className="cards-item">
          <Link to="/">
                <img src={pic1} alt="" className="cards-image" />
            </Link>
              <div className="cards-info">
                  <h3 className="cards-info1">Loyalty Status Upgrades</h3>
                  <h2 className="cards-info2">Complimentary Status Upgrades</h2>
                  <h3 className="cards-info1">Receive upgrades with major airline, hotel, and car rental programs</h3>
                  <Link to="/" style={{ color: 'white' }}>Learn More</Link>
              </div>
          </div>
          <div className="cards-item">
          <Link to="/">
                <img src={pic1} alt="" className="cards-image" />
            </Link>
              <div className="cards-info">
                  <h3 className="cards-info1">Loyalty Status Upgrades</h3>
                  <h2 className="cards-info2">Complimentary Status Upgrades</h2>
                  <h3 className="cards-info1">Receive upgrades with major airline, hotel, and car rental programs</h3>
                  <Link to="/" style={{ color: 'white' }}>Learn More</Link>
              </div>
          </div>
      </div>
      <div className="cards-row">
      <div className="cards-item">
          <Link to="/">
                <img src={pic1} alt="" className="cards-image" />
            </Link>
              <div className="cards-info">
                  <h3 className="cards-info1">Loyalty Status Upgrades</h3>
                  <h2 className="cards-info2">Complimentary Status Upgrades</h2>
                  <h3 className="cards-info1">Receive upgrades with major airline, hotel, and car rental programs</h3>
                  <Link to="/" style={{ color: 'white' }}>Learn More</Link>
              </div>
          </div>
          <div className="cards-item">
          <Link to="/">
                <img src={pic1} alt="" className="cards-image" />
            </Link>
              <div className="cards-info">
                  <h3 className="cards-info1">Loyalty Status Upgrades</h3>
                  <h2 className="cards-info2">Complimentary Status Upgrades</h2>
                  <h3 className="cards-info1">Receive upgrades with major airline, hotel, and car rental programs</h3>
                  <Link to="/" style={{ color: 'white' }}>Learn More</Link>
              </div>
          </div>
      </div>
      <div className="join-now">
        <h2>Join Now</h2>
        <h5 className="redeem">and start redeeming 500+ benefits</h5>
        <button className='join-now-btn'>JOIN NOW</button>
      </div>
      <div className="cards-row">
        <div className="cards-item">
          <Link to="/">
                <img src={pic1} alt="" className="cards-image" />
            </Link>
              <div className="cards-info">
                  <h3 className="cards-info1">Loyalty Status Upgrades</h3>
                  <h2 className="cards-info2">Complimentary Status Upgrades</h2>
                  <h3 className="cards-info1">Receive upgrades with major airline, hotel, and car rental programs</h3>
                  <Link to="/" style={{ color: 'white' }}>Learn More</Link>
              </div>
          </div>
          <div className="card-center-space"></div>
          <div className="cards-item">
          <Link to="/">
                <img src={pic1} alt="" className="cards-image" />
            </Link>
              <div className="cards-info">
                  <h3 className="cards-info1">Loyalty Status Upgrades</h3>
                  <h2 className="cards-info2">Complimentary Status Upgrades</h2>
                  <h3 className="cards-info1">Receive upgrades with major airline, hotel, and car rental programs</h3>
                  <Link to="/" style={{ color: 'white' }}>Learn More</Link>
              </div>
          </div>
      </div>
      <div className="cards-row">
      <div className="cards-item">
          <Link to="/">
                <img src={pic1} alt="" className="cards-image" />
            </Link>
              <div className="cards-info">
                  <h3 className="cards-info1">Loyalty Status Upgrades</h3>
                  <h2 className="cards-info2">Complimentary Status Upgrades</h2>
                  <h3 className="cards-info1">Receive upgrades with major airline, hotel, and car rental programs</h3>
                  <Link to="/" style={{ color: 'white' }}>Learn More</Link>
              </div>
          </div>
          <div className="cards-item">
          <Link to="/">
                <img src={pic1} alt="" className="cards-image" />
            </Link>
              <div className="cards-info">
                  <h3 className="cards-info1">Loyalty Status Upgrades</h3>
                  <h2 className="cards-info2">Complimentary Status Upgrades</h2>
                  <h3 className="cards-info1">Receive upgrades with major airline, hotel, and car rental programs</h3>
                  <Link to="/" style={{ color: 'white' }}>Learn More</Link>
              </div>
          </div>
      </div>
      <div className="founders-card-home">
        <img src={card} alt="" className="card-img-home" />
        <div className="card-text">
          <h3 className="save-text-home">Unprecedented Savings & Elite Access</h3>
          <p className="card-details">FoundersCard was created for entrepreneurs by entrepreneurs. Become part of our community of over 100,000 Members and start receiving access to unprecedented benefits and networking opportunities.</p>
          <button className="btn-card-join-now">
            JOIN NOW
          </button>
        </div>
      </div>
      
    </div>
  )
}

export default Cards