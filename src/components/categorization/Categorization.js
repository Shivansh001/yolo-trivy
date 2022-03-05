import React from 'react'
import { Link } from 'react-router-dom'
import './categorization.css'
import picture from '../../assets/4.jpeg'

const Categorization = () => {
  return (
      
    <div className='categorization'>
        <Link className='category-header' to="/" style={{textDecoration: 'none', color: 'black', marginLeft: '-35%'}}>
                <h1 className="category-heading">All Benefits</h1>
        </Link>
        <br />
        <div className="category-header">
            <select name="" id="categorization-select-1" className="category-header-left">
                <option value="" className="popularity">US</option>
                <option value="" className="newest">Canada</option>
                <option value="" className="newest">UK</option>
                <option value="" className="newest">Europe</option>
                <option value="" className="newest">Asia</option>
                <option value="" className="newest">Australia</option>
                <option value="" className="newest">Mexico</option>
                <option value="" className="newest">South America</option>

            </select>
            <select name="" id="categorization-select" className="category-header-right">
                <option value="" className="popularity">Sort By: Popularity</option>
                <option value="" className="newest">Sort By: Newest</option>
            </select>
        </div>
        <br />
        <br />
        <div className="category-section">
            <div className='category-item col-md-4 col-xs-6'>
                <Link to="/benefitsdetails"  >
                    <img src={picture} alt="" className='category-item-img' />
                </Link>
                <Link to="/" className='category-item-title' style={{textDecoration: 'none'}}>
                    MOO Inc.
                </Link>
                <div className="category-item-desc">Save 20% on business cards and stationery products</div>
            </div>
            <div className='category-item col-md-4 col-xs-6'>
                <Link to="/"  >
                    <img src={picture} alt="" className='category-item-img' />
                </Link>
                <Link to="/" className='category-item-title' style={{textDecoration: 'none'}}>
                    MOO Inc.
                </Link>
                <div className="category-item-desc">Save 20% on business cards and stationery products</div>
            </div>
            <div className='category-item col-md-4 col-xs-6'>
                <Link to="/"  >
                    <img src={picture} alt="" className='category-item-img' />
                </Link>
                <Link to="/" className='category-item-title' style={{textDecoration: 'none'}}>
                    MOO Inc.
                </Link>
                <div className="category-item-desc">Save 20% on business cards and stationery products</div>
            </div>

        </div>
    </div>
  )
}

export default Categorization