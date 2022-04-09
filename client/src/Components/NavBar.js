import React from 'react'
import { NavLink, useNavigate } from "react-router-dom"
import logo from '../Data/Add a subheading.svg'
import { FaFeatherAlt } from 'react-icons/fa'

function NavBar({handleLogout}) {
  return (
    <div id='nav-container'>
      <img src={logo} alt='logo' id='logo'/>
      <nav>
          <ul className='nav-links'>
            <li className='nav-effect'><NavLink to="/projects" className={({ isActive }) => (isActive ? 'is-active' : 'inactive')}><FaFeatherAlt className='feather'/> Projects</NavLink></li>
            <li className='nav-effect'><NavLink to="/account" className={({ isActive }) => (isActive ? 'is-active' : 'inactive')}><FaFeatherAlt className='feather'/> My Account</NavLink></li>
            <li className='nav-effect'><NavLink to="/payments" className={({ isActive }) => (isActive ? 'is-active' : 'inactive')}><FaFeatherAlt className='feather'/> Payments & Subscriptions</NavLink></li>
            <li className='nav-effect'><NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'is-active' : 'inactive')}><FaFeatherAlt className='feather'/> Dashboard</NavLink></li>
          </ul>
        </nav>
        <button className='logout-btn' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default NavBar