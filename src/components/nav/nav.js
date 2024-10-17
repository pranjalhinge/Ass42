import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'
import Logo from './starbucks logo.jpg'
import { TITLE } from '../../config/data'
function nav() {
  return (
    <div className='nav-Bar'>
      <div className='nav-logo'>
    <img src={Logo} alt="hey" className='nav-title'/>
    <p>{TITLE}</p>
      </div>
    
    <div className='nav-option'>
    <Link to='/' className='links'>Home</Link>
    <Link to='/about' className='links'>About</Link>
    <Link to='/about' className='links'>Contact</Link>

    </div>
    </div>
  )
}

export default nav