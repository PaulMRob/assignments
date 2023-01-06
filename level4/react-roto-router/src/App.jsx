import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import ServiceDetails from './components/ServiceDetails.jsx'
import { SocialIcon } from 'react-social-icons'

function App() {
  

  return (
    <Router>
      <nav>
        <div className='nav-elements'>
          <Link to="/" >Home</Link>
          <Link to="/about" >About</Link>
          <Link to="/services" >Services</Link>
        </div>
        <h1 className='nav-title'>Prescience Meets Plumbing</h1>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path='/services/:serviceId' element={<ServiceDetails />} />
      </Routes>
      <footer>  
        <h4>Follow us on social media!</h4>
        <SocialIcon className='sm-icon' url="https://github.com/PaulMRob/"></SocialIcon>
        <SocialIcon className='sm-icon' url="https://www.linkedin.com/in/pmrob/"></SocialIcon>
        <SocialIcon className='sm-icon' url="https://www.instagram.com/bigwallpaul/"></SocialIcon>
      </footer>
    </Router>
  )
}

export default App
