import React from 'react'
import { NavLink, useNavigate } from "react-router-dom"
import logo from '../Data/Add a subheading.svg'

function NavBar() {
  return (
    <div id='nav-container'>
      <img src={logo} alt='logo' id='logo'/>
      <nav>
          <ul className='nav-links'>
            <li className='nav-effect'><NavLink to="/projects" className={({ isActive }) => (isActive ? 'is-active' : 'inactive')}>Projects</NavLink></li>
            <li className='nav-effect'><NavLink to="/account" className={({ isActive }) => (isActive ? 'is-active' : 'inactive')}>My Account</NavLink></li>
            <li className='nav-effect'><NavLink to="/payments" className={({ isActive }) => (isActive ? 'is-active' : 'inactive')}>Payments & Subscriptions</NavLink></li>
            <li className='nav-effect'><NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'is-active' : 'inactive')}>Dashboard</NavLink></li>
          </ul>
        </nav>
    </div>
  )
}

export default NavBar