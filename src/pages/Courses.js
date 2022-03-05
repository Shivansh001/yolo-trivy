import React from 'react'
import { Link } from 'react-router-dom'
import Categorization from '../components/categorization/Categorization'
import Sidebar from '../components/sidebar/Sidebar'

const Courses = () => {
  return (
    <div>
           
        <Sidebar />
        <Categorization />
    </div>
  )
}

export default Courses