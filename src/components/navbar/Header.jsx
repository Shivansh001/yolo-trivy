import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import Dropdown from "./Dropdown"
import './header.css'

const Header = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)
    const [dropdown, setDropdown] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)


  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])

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

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(true);
        }
      };
    
      const onMouseLeave = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(false);
        }
      };



  return (
      <>
    <div className="row">
        
        <div className="col2">
        <div className="navbar-container">
                
                {(toggleMenu || screenWidth > 500) && (
                    <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to="/benefits" className='nav-links' onClick={closeMobileMenu} >
                            BENEFITS
                        </Link>
                    </li>
                    <li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                              BUSINESS  
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>
                    <li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                            LIFESTYLE
                        </Link>
                    </li>
                    <li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                            HOTELS
                        </Link>
                    </li>
                    <li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
                        <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                            TRAVEL
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                            COMMUNITY
                        </Link>
                    </li>
                    <li className="nav-item search-option">
                        <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                            <SearchIcon className="search"/>SEARCH
                        </Link>
                    </li>
                    </ul>)}
                
            </div>
        </div>
        
    </div>
    </>
  )
}

export default Header