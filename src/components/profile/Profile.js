import React from 'react'
import { Link } from 'react-router-dom'
import card from '../../assets/card1.png'
import './profile.css'

const Profile = () => {
  return (
    <>
    <div className="profile-head">
        <h1 className="profile-h1">Profile</h1>
        <div className="profile-head-options">
            <Link to="/profile">
                    <button className="profile-opt-btn profile-opt-btn-selected">PROFILE</button>
            </Link>
            <Link to="/accountsettings">
                <button className="profile-opt-btn" onclick="/accountsettings">ACCOUNT SETTINGS</button>
            </Link>
            <Link to="/digitalcard">
                <button className="profile-opt-btn" onclick="/digitalcard">DIGITALCARD</button>
            </Link>
        </div>
    </div>
    <div className="profile-container">
        <div className="profile-container-row">
            <div className="profile-container-item-side">
                <img src={card} alt="" className="profile-card-img" />
            </div>
            <div className="profile-container-item">
                <h5 className="profile-name">Shivansh Agarwal</h5>
                <p className="profile-details">FoundersCard Member Since 2022</p>
                <p className="profile-details">Member # 10920190219</p>
                <Link to="/digitalcard">
                    <p className="profile-details" style={{textDecoration: 'none', color: 'black'}}>View Digital Membership Card</p>
                </Link>
            </div>
            <div className="profile-edit">
                <Link to="/accountsettings" style={{marginTop: '50%',color: 'black', marginLeft: '210%'}}>
                    EDIT
                </Link>
            </div>
        </div>
        <div className="profile-container-row">
            <div className="profile-container-item1">
                <h5 className="profile-name">Bio</h5>
                <h5 className="profile-name">Areas of Expertise</h5>
                <h5 className="profile-name">Passions</h5>
            </div>
            <div className="profile-container-item2">
                <Link to="/accountsettings" style={{color: 'black'}}>
                    EDIT
                </Link>
            </div>
        </div>
        <div className="profile-container-row">
            <div className="profile-container-item1">
                <h5 className="profile-name">LinkedIn</h5>
                <Link to="/digitalcard" style={{color: 'black'}}>
                    <p className="profile-details1">link</p>
                </Link>
                <h5 className="profile-name">Twitter</h5>
                <h5 className="profile-name">AngelList</h5>
            </div>
            <div className="profile-container-item2">
                <Link to="/accountsettings" style={{color: 'black'}}>
                    EDIT
                </Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Profile