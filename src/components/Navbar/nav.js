import React from 'react'
import { NavLink } from "react-router-dom";
import ccetlogo from '../../media/LOGO.png'
import './/nav.css'

export default function nav() {
  return (
    <>
      <div className="main-nav">

        <div className='outer-nav'>

          <div className='logo'>
            <img src={ccetlogo} alt="logo" />
          </div>

          <div className='routes'>
            <ul className='nav-routes-link'>
              <li><NavLink to="/">HOME</NavLink></li>
              <li><NavLink to="/about">ABOUT</NavLink></li>
              <li><NavLink to="/contact">CONTACT US</NavLink></li>
            </ul>
          </div>

          <div className='nav-buttons'>
            <button><NavLink to="/register">Contribute Now</NavLink></button>
          </div>

        </div>

      </div>
    </>
  )
}
