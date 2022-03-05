import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import {NavDropdown} from 'react-bootstrap'
import Dropdown from "./Dropdown"
import './header.css'
import { motion } from "framer-motion";
import pic from "../../assets/5.jpeg"

const Header = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)
    const [dropdown, setDropdown] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const [isHover, toggleHover] = React.useState(false);
  const toggleHoverMenu = () => {
    toggleHover(!isHover);
  };
  const [isMouse, toggleMouse] = React.useState(false);
  const toggleMouseMenu = () => {
    toggleMouse(!isMouse);
  };
  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5
      },
      display: "block"
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
        delay: 0.3
      },
      transitionEnd: {
        display: "none"
      }
    }
  };


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
                        
                        <motion.div
                  className="menu-item"
                  onHoverStart={toggleHoverMenu}
                  onHoverEnd={toggleHoverMenu}
                >
                  <a href="/business" className='nav-links'>BUSINESS</a>
                  <motion.div
                    className="sub-menu"
                    initial="exit"
                    animate={isHover ? "enter" : "exit"}
                    variants={subMenuAnimate}
                  >
                    <div className="sub-menu-container">
                    <div className="sub-menu-container-1">
                      <div className="sub-menu-item">
                        <Link to="/saas" style={{textDecoration: 'none', color: 'black'}}>SAAS</Link>
                      </div>
                      <div className="sub-menu-item">
                        <Link to="/emailmarketing" style={{textDecoration: 'none', color: 'black'}}>
                          Email Marketing
                        </Link>
                      </div>
                      <div className="sub-menu-item">
                      <Link to="/companyregistration" style={{textDecoration: 'none', color: 'black'}}>
                        Company Registration
                      </Link></div>
                      <div className="sub-menu-item">
                      <Link to="/tools" style={{textDecoration: 'none', color: 'black'}}>
                        Tools
                      </Link></div>
                      </div>
                      <div className="sub-menu-container-2">
                        <div className="sub-menu-item">
                          <Link to="/saas" style={{textDecoration: 'none', color: 'black'}}>
                            <img src={pic} className="sub-menu-img"></img>
                          </Link>
                        </div>
                        <div className="sub-menu-item">
                          <Link to="/saas" style={{textDecoration: 'none', color: 'black'}}>
                            <img src={pic} className="sub-menu-img"></img>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                          
                        
                    </li>
                    <li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                            
                    <motion.div
                  className="menu-item"
                  onHoverStart={toggleHoverMenu}
                  onHoverEnd={toggleHoverMenu}
                >
                  <a href="/lifestyle" className='nav-links'>LIFESTYLE</a>
                  <motion.div
                    className="sub-menu"
                    initial="exit"
                    animate={isHover ? "enter" : "exit"}
                    variants={subMenuAnimate}
                  >
                    <div className="sub-menu-container">
                    <div className="sub-menu-container-1">
                      <div className="sub-menu-item">
                        <Link to="/headphones" style={{textDecoration: 'none', color: 'black'}}>Headphones & Earphones</Link>
                      </div>
                      <div className="sub-menu-item">
                        <Link to="/fashion" style={{textDecoration: 'none', color: 'black'}}>
                          Fashion & Apparel
                        </Link>
                      </div>
                      
                      </div>
                      <div className="sub-menu-container-2">
                        <div className="sub-menu-item">
                          <Link to="/saas" style={{textDecoration: 'none', color: 'black'}}>
                            <img src={pic} className="sub-menu-img"></img>
                          </Link>
                        </div>
                        <div className="sub-menu-item">
                          <Link to="/saas" style={{textDecoration: 'none', color: 'black'}}>
                            <img src={pic} className="sub-menu-img"></img>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
                    </li>
                    <li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <motion.div
                      className="menu-item"
                      onHoverStart={toggleHoverMenu}
                      onHoverEnd={toggleHoverMenu}
                    >
                      <a href="/education" className='nav-links'>EDUCATION</a>
                      <motion.div
                        className="sub-menu"
                        initial="exit"
                        animate={isHover ? "enter" : "exit"}
                        variants={subMenuAnimate}
                      >
                        <div className="sub-menu-container">
                        <div className="sub-menu-container-1">
                          <div className="sub-menu-item">
                            <Link to="/courses" style={{textDecoration: 'none', color: 'black'}}>Courses</Link>
                          </div>
                          <div className="sub-menu-item">
                            <Link to="/language" style={{textDecoration: 'none', color: 'black'}}>
                              Language Tools
                            </Link>
                          </div>
                          <div className="sub-menu-item">
                            <Link to="/pgprograms" style={{textDecoration: 'none', color: 'black'}}>
                              Post Graduate Programs
                            </Link>
                          </div>
                          
                          </div>
                          <div className="sub-menu-container-2">
                            <div className="sub-menu-item">
                              <Link to="/saas" style={{textDecoration: 'none', color: 'black'}}>
                                <img src={pic} className="sub-menu-img"></img>
                              </Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/saas" style={{textDecoration: 'none', color: 'black'}}>
                                <img src={pic} className="sub-menu-img"></img>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                    </li>
                    <li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
                    <motion.div
                      className="menu-item"
                      onHoverStart={toggleHoverMenu}
                      onHoverEnd={toggleHoverMenu}
                    >
                      <a href="/travel" className='nav-links'>TRAVEL</a>
                      <motion.div
                        className="sub-menu"
                        initial="exit"
                        animate={isHover ? "enter" : "exit"}
                        variants={subMenuAnimate}
                      >
                        <div className="sub-menu-container">
                        <div className="sub-menu-container-1">
                          <div className="sub-menu-item">
                            <Link to="/hotels" style={{textDecoration: 'none', color: 'black'}}>Hotels</Link>
                          </div>
                          <div className="sub-menu-item">
                            <Link to="/flights" style={{textDecoration: 'none', color: 'black'}}>
                              Flights
                            </Link>
                          </div>
                          <div className="sub-menu-item">
                            <Link to="/staycation" style={{textDecoration: 'none', color: 'black'}}>
                              Staycations
                            </Link>
                          </div>
                          <div className="sub-menu-item">
                            <Link to="/villas" style={{textDecoration: 'none', color: 'black'}}>
                              Villas
                            </Link>
                          </div>
                          <div className="sub-menu-item">
                            <Link to="/carrent" style={{textDecoration: 'none', color: 'black'}}>
                              Car Rent
                            </Link>
                          </div>
                          
                          </div>
                          <div className="sub-menu-container-2">
                            <div className="sub-menu-item">
                              <Link to="/saas" style={{textDecoration: 'none', color: 'black'}}>
                                <img src={pic} className="sub-menu-img"></img>
                              </Link>
                            </div>
                            <div className="sub-menu-item">
                              <Link to="/saas" style={{textDecoration: 'none', color: 'black'}}>
                                <img src={pic} className="sub-menu-img"></img>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
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