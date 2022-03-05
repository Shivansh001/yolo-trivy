import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import { Button } from '../button/Button';
import './mainNav.css'
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';

function LoginNav() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize', showButton)

  return (
    <>
        <nav className="navbar">
        <div className="nav-btn" >
                {button && <Button buttonStyle='btn--outline' >UPGRADE TO ELITE</Button>}
            </div>
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <b>FOUNDERS</b>CARD
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                <MenuIcon className="menu-toggle"/>
                </div>
            </div>
            <div className="nav-right">
                <div className="nav-right-item">
                    <PersonOutlineOutlinedIcon />
                    Hello Avni
                    <KeyboardArrowDownOutlinedIcon />
                </div>
                <div className="nav-right-item">
                    7,500 FCPoints
                </div>
                <div className="nav-right-item">
                    <NotificationsOutlinedIcon />
                </div>
                <div className="nav-right-item">
                    <FavoriteBorderOutlinedIcon />
                </div>
            </div>
            
                
        
        </nav>
    </>
  )
}

export default LoginNav