import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import { Button } from '../button/Button';
import './mainNav.css'
import './header.css'

function MainNavbar() {
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
        <nav className="upper-row">
        <div className="col-upper-nav"></div>
        <div className="col1 logo" >
            <h1><b className='logo1'>FOUNDERS</b>CARD</h1>
        </div>
            <div className="col1">
        <div className="nav-btn" >
                {button && <button className=' btn-nav btn-outline' >JOIN NOW</button>}
                {button && <button className='btn-nav' >LOGIN</button>}
            </div>
            <div className="menu-icon" onClick={handleClick}>
                <MenuIcon className="menu-toggle"/>
            </div>
        </div>
        </nav>
    </>
  )
}

export default MainNavbar