import React from 'react'
import { Link } from 'react-router-dom'
import './categorization.css'
import picture from '../../assets/4.jpeg'

const Categorization = () => {
  return (
      
    <div className='categorization'>
        <div className="category-header">
            <Link className='category-header-left' to="/" style={{textDecoration: 'none'}}>
                <h1 className="category-heading">All Benefits</h1>
            </Link>
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