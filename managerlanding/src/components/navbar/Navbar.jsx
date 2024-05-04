import React from 'react'
import './navbar.css';
import Mainlogo from '../../assets/images/logo.svg';
import {FaBars} from 'react-icons/fa'


const Navbar = () => {
  return (
    <div>
      <header className='primary-header'>
        <div className="container">
          <a href="#"><img src={Mainlogo} alt="" /></a>
          <nav className='primary-navigation'>
            <ul aria-label='Primary' role='list' className='nav-list'>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Product</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Community</a></li>
            </ul>
          </nav>
          <div className="rightdiv">
            <FaBars className='fa-open' size={30} style={{color:'darkblue'}}/>
          <button className="button">Get Started</button>
          </div>
        </div>
        </header>
    </div>
  )
}

export default Navbar
