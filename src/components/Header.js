import React from 'react'
import './Header.css'
import logo from '../images/Logo.svg'
import PurpleBtn from './PurpleBtn'

const Header = () => {
  return (
    <div className='Header'>
      <img className='header-logo' src={logo} alt="Logo" />
      <nav>
        <ul className="nav-bar">
            <li><a href="#">About us</a></li>
            <li><a href="#">New patient</a></li>
            <li><a href="#">Our services</a></li>
            <li><a href="#">Contact us</a></li>
        </ul>
      </nav>
      <PurpleBtn text='Book appointment' link='#'/>
    </div>
  )
}

export default Header
