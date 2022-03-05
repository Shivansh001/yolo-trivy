import React from 'react'
import './savings.css'
import pic from "../../assets/2.jpeg"
import {Link} from 'react-router-dom'
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import bewakoof from '../../assets/bewakoof.png';
import mailmodo from '../../assets/mailmodo.png';
import upgrad from '../../assets/upgrad.jpg';

const Savings = () => {
  return (
    <div className="save">
        
        <div className="life-benefits">
            <h3 className="heading-life">LIFESTYLE BENEFITS</h3>
            <div className="save-subheader-flex">
                <h3 className="heading2 save-subheader-flex-left">VIP Benefits, Access, & Savings</h3>
                <Link to="/" style={{textDecoration: 'none'}} className="view-link">
                    View All<ArrowForwardIosOutlinedIcon className='arrow'/>
                </Link>
            </div>
            
            <div className="img-row">
                <div className="img-column">
                    <Link to="/">
                        <img src={bewakoof} alt="" className="benefit-img" />
                    </Link>
                    <div className="img-text" >
                        <Link to="/" style={{textDecoration: 'none'}}>
                            <h3 className="heading3" >Bewakoof.com</h3>
                        </Link>
                        <p className="heading4">Receive free shipping and up to 25% off</p>
                        <p className="heading5">Redeemed 7,417 times</p>
                    </div>
                </div>
                <div className="img-column">
                    <Link to="/">
                        <img src={mailmodo} alt="" className="benefit-img" />
                    </Link>
                    <div className="img-text" >
                        <Link to="/" style={{textDecoration: 'none'}}>
                            <h3 className="heading3" >Mail Modo</h3>
                        </Link>
                        <p className="heading4">Receive free shipping and up to 25% off</p>
                        <p className="heading5">Redeemed 7,417 times</p>
                    </div>
                </div>
                
                <div className="img-column">
                    <Link to="/">
                        <img src={upgrad} alt="" className="benefit-img" />
                    </Link>
                    <div className="img-text" >
                        <Link to="/" style={{textDecoration: 'none'}}>
                            <h3 className="heading3" >Upgrad</h3>
                        </Link>
                        <p className="heading4">Receive free shipping and up to 25% off</p>
                        <p className="heading5">Redeemed 7,417 times</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
  )
}

export default Savings