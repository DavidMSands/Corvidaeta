import React from 'react'
import logo from '../Data/CORVIDAETA (3).svg'
import { NavLink, useNavigate } from "react-router-dom"
import screenshot from '../Data/Greenshot 2022-04-17 22.47.50.png'

function WelcomePage() {
  return (
    <div id='welcome-container'>
      <img src={logo} alt='logo' />
      <div id="welcome-paragraph">
        <p>Corvidaeta is a web analytics solution designed for small to medium size sites, personal blogs, or anyone who doesn’t want to deal with the overly complex and cumbersome Google Analytics. Our intuitive UI and straightforward dashboard will allow you to quickly gain meaningful insights about your site's traffic without slowing it down.</p>
        <p>Sign up today and start using in minutes! After signing up simply create a new project, add one line of code to your site, and start tracking!</p>
      </div>
      <img src={screenshot} alt="demo" /><br/>
      <NavLink to='/login'><button id='sign-btn'>Sign-up</button></NavLink>
    </div>
  )
}

export default WelcomePage