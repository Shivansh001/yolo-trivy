import React from 'react'
import './profile.css'
import { Link } from 'react-router-dom'
import card from '../../assets/card1.png'


const DigitalCard = () => {
  return (
    <>
      <div className="profile-head">
        <h1 className="profile-h1">Digital Card</h1>
        <div className="profile-head-options">
            <Link to="/profile">
                    <button className="profile-opt-btn">PROFILE</button>
            </Link>
            <Link to="/accountsettings">
                <button className="profile-opt-btn" onclick="/accountsettings">ACCOUNT SETTINGS</button>
            </Link>
            <Link to="/digitalcard">
                <button className="profile-opt-btn profile-opt-btn-selected" onclick="/digitalcard">DIGITALCARD</button>
            </Link>
        </div>
    </div>
    <div className="profile-container">
        <img src={card} alt="" className="digital-card-img" />
    </div>
    <div className="digital-card-download">
      <Link to="/">
        Print Digital Card
      </Link>
    </div>

    </>
  )
}

export default DigitalCard