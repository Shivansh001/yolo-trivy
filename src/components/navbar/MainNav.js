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
            <Link to="/home" style={{textDecoration:'none', color: 'black'}}>
                <h1><b className='logo1'>FOUNDERS</b>CARD</h1>
            </Link>
        </div>
            <div className="col1">
        <div className="nav-btn" >
                {button && <Link to="/register" style={{textDecoration: 'none'}}><button className=' btn-nav-main btn-outline' >JOIN NOW</button> </Link>}
                {button && <Link to="/login" style={{textDecoration: 'none'}}><button className='btn-nav-main-login' >LOGIN</button></Link> }
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