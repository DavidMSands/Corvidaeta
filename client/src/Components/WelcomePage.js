import React from 'react'
import logo from '../Data/Add a subheading.svg'
import { NavLink, useNavigate } from "react-router-dom"

function WelcomePage() {
  return (
    <div id='welcome-container'>
      <img src={logo} alt='logo' />
      <div id="welcome-paragraph">
        <p>Corvidaeta is a web analytics solution designed for small to medium size sites, personal blogs, or anyone who doesn’t want to deal with the overly complex and cumbersome Google Analytics. Our intuitive UI and straightforward dashboard will allow you to quickly gain meaningful insights about your sites traffic without slowing it down.</p>
        <p>Sign up today and start using in minutes! After signing up simply create a new project, add one line of code to your site, and start tracking!</p>
      </div>
      <NavLink to='/login'><button id='sign-btn'>Sign-up</button></NavLink>
    </div>
  )
}

export default WelcomePage