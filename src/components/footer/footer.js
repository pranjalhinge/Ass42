import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import { TITLE } from '../../config/data'
function footer() {
  return (
    <div className='footer'>
      <div className=''>
    <img src={Logo} alt="hey" className='nav-title'/>
    <p>{TITLE}</p>
      </div>
    
    

    </div>
  )
}

export default footer