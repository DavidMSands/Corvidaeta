import './App.css';
import Account from './Components/Settings/Profile/Account'
import Login from './Components/Login'
import Privacy from './Components/Settings/Privacy/Privacy'
import Dashboard from './Components/Analytics/Dashboard'
import Projects from './Components/Settings/Projects/Projects'
import WelcomePage from './Components/WelcomePage';
import Settings from './Components/Settings/Settings';
import Payments from './Components/Settings/Payments';
import NavBar from './Components/NavBar';
import Project from './Components/Settings/Projects/Project';
import { useNavigate } from 'react-router';
import { Routes, Route, useLocation } from "react-router-dom"
import { useState, useEffect } from 'react'


function App() {
  const [showNavBar, setShowNavBar] = useState(false)
  const [user, setUser] = useState(null)
  const navigate = useNavigate()
  const [pageLoaded, setPageLoaded] = useState(false)
  const state = useLocation()
  
  

  function handleLogin(user) {
    setShowNavBar(true)
    setUser(() => user)
    const path = state?.pathname 
    if (path === '/login') {
      navigate('/projects')
    } 
  }

  useEffect(() => {
    fetch('/me').then(r => {
      if (r.ok) {
        r.json()
        .then(user => setUser(() => user))
        .then(setPageLoaded(true))
      } else {
        r.json()
        .then(setPageLoaded(true))
      }
    }) 
  }, [])
  
  

  function handleLogout() {
    setShowNavBar(false)
    setUser(null)
    navigate('./login')
  }

  

  return (
    <div className={showNavBar ? "App split" : null} >
      {showNavBar ? <NavBar handleLogout={handleLogout} /> : null}
       <Routes >
          <Route exact path="/" element={<WelcomePage />} />
          <Route exact path="/settings" element={<Settings />} />
          <Route exact path="/account" element={<Account />} />
          <Route exact path="/projects" element={<Projects user={user}  />} />
          <Route exact path="/dashboard" element={<Dashboard user={user} />} />
          <Route exact path="/privacy" element={<Privacy />} />
          <Route exact path="/login" element={<Login onLogin={handleLogin} />} />
          <Route exact path="/payments" element={<Payments />} />
          <Route exact path="/projects/:id" element={<Project />} />
      </Routes>
     
    </div>
  );
}

export default App;
