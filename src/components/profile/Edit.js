import React from 'react'
import {Link} from 'react-router-dom'


const Edit = () => {
  return (
    <>
      <div className="profile-head">
        <h1 className="profile-h1">Account Settings</h1>
        <div className="profile-head-options">
            <Link to="/profile">
                    <button className="profile-opt-btn">PROFILE</button>
            </Link>
            <Link to="/accountsettings">
                <button className="profile-opt-btn profile-opt-btn-selected" onclick="/accountsettings">ACCOUNT SETTINGS</button>
            </Link>
            <Link to="/digitalcard">
                <button className="profile-opt-btn" onclick="/digitalcard">DIGITALCARD</button>
            </Link>
        </div>
    </div>
    <div className="edit-section">
        <h4 className="change">Change Email</h4>
        <h6 style={{color: 'gray'}}>Current Email Address</h6> <br/>
        <p className="original-item">someone@example.com</p>
        <hr style={{borderColor: '#979797', marginLeft: '0', width:'40%', marginTop: '-0.8rem'}}/>
        <input className="form-control-edit" placeholder="New email address" type="text" name="user[email]" id="user_email" /> <br />
        <input className="form-control-edit" style={{marginTop: '4rem'}} placeholder="Repeat new email address" type="text" name="user[email]" id="user_email" />


    </div>

    </>
  )
}

export default Edit