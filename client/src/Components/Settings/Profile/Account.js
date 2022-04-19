import React, { useState, useEffect } from 'react'
import { FiSun } from 'react-icons/fi'
import { BsMoonStars } from 'react-icons/bs'
import { MdEmail  } from 'react-icons/md'
import { FaCheckCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router';

function Account({ toggle, setShowNavBar, isDark }) {
  const [email, setEmail] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)
  const [isDelete, setIsDelete] = useState(false)
  const [confirmEmail, setConfirmEmail] = useState()
  const [user, setUser] = useState(null)
  const navigate = useNavigate()
  
  useEffect(() => {
    fetch('/me').then(r => {
      if (r.ok) {
        r.json()
        .then(user => setUser(() => user))
        .then(setShowNavBar(true))
      } else {
        r.json()
      }
    }) 
  }, [])
  

  const handleEmailChange = (e) => {
    e.preventDefault()
    fetch(`/users/${user.id}`, {
      method: 'PATCH',

      body: JSON.stringify({
        email: email,
      }), 
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      setEmail('')
      setShowSuccess(true)
      hideSuccess()
  }

  const hideSuccess = () => {
    setTimeout(() => {
      setShowSuccess(false)
    }, 4000) 
  }

  const handleDelete = (e) => {
    e.preventDefault()
    if(confirmEmail === user.email) {
        fetch(`/users/${user.id}`, {
            method: 'DELETE',
          })
    }
    navigate('/login')
}


  return (
    <div id='account-container'>
      <h2>My Account</h2>
      <h3>Update email</h3>
      <p>Update email address below. Please note that if you change your email address here, this email will be used for login and for sending you your billing information.</p>
      <form id="signup" onSubmit={handleEmailChange}>
          <div className="input-field">
            <i><MdEmail className='icon'/></i>
              <label htmlFor="new-email"></label>
              <input
                type="text" 
                name="new-email"
                placeholder='New Email'
                value={email}
                onChange={e => setEmail(e.target.value)}
                className='field'
              />
              <input type="submit" value="Update" className="update" />
            </div>
        </form>
        {showSuccess ? <p>Your email has been successfully updated <FaCheckCircle id='check-mark'/></p> : null}
        <h3>Delete account</h3>
        <p>Select the DELETE button to permantly delete your account and all associated data. <b>NOTE:</b> this action is irreversible </p>
        <button className='delete-btn' onClick={() => setIsDelete(!isDelete)}>DELETE</button>
        { isDelete 
            ? <form onSubmit={e => (e.preventDefault())}> 
                <label htmlFor='confirm'>Please confirm your email address: </label>
                <input name='confirm' id='confirm' type='text' value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)}></input><br/>
                { confirmEmail === user.email
                ?<button className='delete-btn' onClick={handleDelete}>Submit</button>
                : null
                }  
            </form>
            : null
            }
        <h3>Toggle site theme</h3>
        <div>
          <label className='switch' onChange={toggle}>
            <input type='checkbox' value={isDark}/> 
            <span className='slider' />
            <FiSun className='slider-icon' />
            <BsMoonStars className='slider-icon-moon'/>
          </label>
        </div>
    </div>
  )
}

export default Account