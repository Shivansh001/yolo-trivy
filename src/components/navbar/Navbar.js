import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Dropdown from "./Dropdown"
import "./navbar.css"
import SearchIcon from '@material-ui/icons/Search';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)
    const [dropdown, setDropdown] = useState(false);

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
        <div className="navbar">
            <div className="navbar-container">
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to="/" className='nav-links' onClick={closeMobileMenu} >
                            BENEFITS
                        </Link>
                    </li>
                    <li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Link to="/" className='nav-links business'  onClick={closeMobileMenu}>
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
                        <Link to="/" className='nav-links space' onClick={closeMobileMenu}>
                            HOTELS
                        </Link>
                    </li>
                    <li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
                        <Link to="/" className='nav-links space' onClick={closeMobileMenu}>
                            TRAVEL
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                            COMMUNITY
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                            <SearchIcon />SEARCH
                        </Link>
                    </li>
                </ul>
                </div>
                
        
        </div>
    </>
  )
}

export default Navbar