import React from 'react'
import Footer from './Footer'
import logo from '../Data/CORVIDAETA (3).svg'
import { NavLink } from "react-router-dom"
import screenshot from '../Data/Greenshot 2022-04-20 00.28.35.png'
import graphic from '../Data/CORVIDAETA (5).svg'

function WelcomePage() {
  return (
    <div id='welcome-container'>
      <div id='welcome-header'>
        <img src={logo} alt='logo' />
        <NavLink to='/login'><button id='sign-btn'>Login</button></NavLink>
      </div>
      <div id="welcome-paragraph">
          <img src={graphic} alt='data-graphic'/>
          <h2>Quick and transparent website analytics</h2>
          <p>Corvidaeta is a web analytics solution designed for small to medium size sites, personal blogs, or anyone who doesn’t want to deal with the overly complex and cumbersome Google Analytics. Our intuitive UI and straightforward dashboard will allow you to quickly gain meaningful insights about your site's traffic without slowing it down. At Corvidaeta, we know that your data is important which is why we strive to provide the most accurate data possible.</p>
          <p>Sign up today and start using in minutes! After signing up simply create a new project, add one line of code to your site, and start tracking!</p>
      </div>
      <div id='steps-container'>
        <h2>Start tracking your data in minutes</h2>
        <p>Getting started is easy and its <b>FREE</b> if your site has less than 10,000 monthly page views.</p>
        <div id='steps'>
          <p className='step-paragraph line'>1. Create an account</p>
          <p className='step-paragraph line'>2. Add embed code to your site</p>
          <p className='step-paragraph'>3. Start viewing your data!</p>
        </div>
      </div>
      <img src={screenshot} alt="demo" /><br/>
      
      <Footer />
    </div>
  )
}

export default WelcomePage