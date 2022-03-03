import React, { useState } from 'react'
import "./sidebar.css"
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';



const Sidebar = () => {

    
    const [showOption, setShowOption] = useState(false);
    
  return (
      
    <div className='sidebar'>
        <div className="filter-section">
            <div className="filter-section-head">
                Category
            </div>
            <div className="sidebar-dropdown">
            <KeyboardArrowDownIcon onClick={() => setShowOption(!showOption)} />
            </div>
            
            <div className="filter-section-list">
            
                <div className="filter-section-list-item"  >
                    <input type="checkbox" className="filter-checkbox"></input>
                    <label className="filter-text" >Business</label>
                </div>
                <div className="filter-section-list-item"  >
                    <input type="checkbox" className="filter-checkbox"></input>
                    <label className="filter-text" >Business Essentials</label>
                </div>
                <div className="filter-section-list-item"  >
                    <input type="checkbox" className="filter-checkbox"></input>
                    <label className="filter-text" >FC Coworking Program</label>
                </div>
                <div className="filter-section-list-item"  >
                    <input type="checkbox" className="filter-checkbox"></input>
                    <label className="filter-text" >Marketing</label>
                </div>
                <div className="filter-section-list-item"  >
                    <input type="checkbox" className="filter-checkbox"></input>
                    <label className="filter-text" >Web & Design</label>
                </div>
                <div className="filter-section-list-item"  >
                    <input type="checkbox" className="filter-checkbox"></input>
                    <label className="filter-text" >Work From Home</label>
                </div>
                <div className="filter-section-list-item"  >
                    <input type="checkbox" className="filter-checkbox"></input>
                    <label className="filter-text" >Valuable Credits</label>
                </div>
                <div className="filter-section-list-item"  >
                    <input type="checkbox" className="filter-checkbox"></input>
                    <label className="filter-text" >Travel</label>
                </div>
                <div className="filter-section-list-item"  >
                    <input type="checkbox" className="filter-checkbox"></input>
                    <label className="filter-text" >Premium Airlines</label>
                </div>
                <div className="filter-section-list-item"  >
                    <input type="checkbox" className="filter-checkbox"></input>
                    <label className="filter-text" >Loyalty Program Status Upgrades</label>
                </div>
                <div className="filter-section-list-item"  >
                    <input type="checkbox" className="filter-checkbox"></input>
                    <label className="filter-text" >Ground Transportion</label>
                </div>
                <div className="filter-section-list-item"  >
                    <input type="checkbox" className="filter-checkbox"></input>
                    <label className="filter-text" >Premium Services</label>
                </div>
                <div className="filter-section-list-item"  >
                    <input type="checkbox" className="filter-checkbox"></input>
                    <label className="filter-text" >Work From Home</label>
                </div>
                <div className="filter-section-list-item"  >
                    <input type="checkbox" className="filter-checkbox"></input>
                    <label className="filter-text" >Valuable Credits</label>
                </div>
                

            </div>
        </div>
        <div className="filter-section">
            <div className="filter-section-head">
                Travel
            </div>
            <div className="filter-section-list">
                <div className="filter-section-list-item"  >
                    <input type="checkbox" className="filter-checkbox"></input>
                    <label className="filter-text" >Premium Airlines</label>
                </div>
                <div className="filter-section-list-item"  >
                    <input type="checkbox" className="filter-checkbox"></input>
                    <label className="filter-text" >Loyalty Program Status Upgrades</label>
                </div>
                <div className="filter-section-list-item"  >
                    <input type="checkbox" className="filter-checkbox"></input>
                    <label className="filter-text" >Ground Transportation</label>
                </div>
                <div className="filter-section-list-item"  >
                    <input type="checkbox" className="filter-checkbox"></input>
                    <label className="filter-text" >Car Service & Limo</label>
                </div>
                <div className="filter-section-list-item"  >
                    <input type="checkbox" className="filter-checkbox"></input>
                    <label className="filter-text" >Rental Cars</label>
                </div>
                <div className="filter-section-list-item"  >
                    <input type="checkbox" className="filter-checkbox"></input>
                    <label className="filter-text" >Premium Services</label>
                </div>
                <div className="filter-section-list-item"  >
                    <input type="checkbox" className="filter-checkbox"></input>
                    <label className="filter-text" >Hotel Rewards</label>
                </div>
                <div className="filter-section-list-item"  >
                    <input type="checkbox" className="filter-checkbox"></input>
                    <label className="filter-text" >View All</label>
                </div>
            </div>
        </div>
        <div className="filter-section">
            <div className="filter-section-head">
                Hotels
            </div>
            <div className="filter-section-list">
                <div className="filter-section-list-item"  >
                    <label className="filter-text-head" >Popular Destinations</label>
                </div>
                <div className="filter-section-list-item"  >
                    <input type="checkbox" className="filter-checkbox"></input>
                    <label className="filter-text" >New York</label>
                </div>
                <div className="filter-section-list-item"  >
                    <input type="checkbox" className="filter-checkbox"></input>
                    <label className="filter-text" >Los Angeles/ Beverly Hills</label>
                </div>
                <div className="filter-section-list-item"  >
                    <input type="checkbox" className="filter-checkbox"></input>
                    <label className="filter-text" >San Francisco</label>
                </div>
                <div className="filter-section-list-item"  >
                    <input type="checkbox" className="filter-checkbox"></input>
                    <label className="filter-text" >Miami/South Beach</label>
                </div>
                <div className="filter-section-list-item"  >
                    <input type="checkbox" className="filter-checkbox"></input>
                    <label className="filter-text" >Las Vegas</label>
                </div>
                <div className="filter-section-list-item"  >
                    <input type="checkbox" className="filter-checkbox"></input>
                    <label className="filter-text" >London</label>
                </div>
                <div className="filter-section-list-item"  >
                    <label className="filter-text-head" >North America</label>
                </div>
                <div className="filter-section-list-item"  >
                    <input type="checkbox" className="filter-checkbox"></input>
                    <label className="filter-text" >Alta</label>
                </div>
                <div className="filter-section-list-item"  >
                    <input type="checkbox" className="filter-checkbox"></input>
                    <label className="filter-text" >Ashevilla</label>
                </div>
                <div className="filter-section-list-item"  >
                    <input type="checkbox" className="filter-checkbox"></input>
                    <label className="filter-text" >Atlanta</label>
                </div>
                <div className="filter-section-list-item"  >
                    <input type="checkbox" className="filter-checkbox"></input>
                    <label className="filter-text" >Atlantic City</label>
                </div>
                <div className="filter-section-list-item"  >
                    <input type="checkbox" className="filter-checkbox"></input>
                    <label className="filter-text" >Austin</label>
                </div>
                <div className="filter-section-list-item"  >
                    <input type="checkbox" className="filter-checkbox"></input>
                    <label className="filter-text" >Bahamas</label>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar