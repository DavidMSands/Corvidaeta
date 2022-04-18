import React from 'react'

function Footer() {
  return (
    <div id='footer-container'>
      <div id='legal-container'>
        <p className='seperator footer-text'>Privacy & Legal Policies</p>
        <p className='seperator footer-text'>Sitemap</p>
        <p className='seperator footer-text'>Support</p>
        <p className='footer-text'>Docs</p>
      </div>
      <a href='https://github.com/DavidMSands' target='_blank'><p className='footer-text'>Designed & Built by David Sands</p></a>
    </div>
  )
}

export default Footer