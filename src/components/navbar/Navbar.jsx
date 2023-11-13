import React from 'react'
import './navbar.css'
import logo from '../../images/logo.png'

const Navbar = () => {
  return (
    <nav>
        <img src={logo} alt="airbnb logo" className='nav--logo' />
    </nav>
  )
}

export default Navbar