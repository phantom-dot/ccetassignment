import React from 'react'
import './branches.css'
import { NavLink } from "react-router-dom";

// import Tilt from 'react-parallax-tilt';
// import civil from '../../media/civil.png';
// import mech from '../../media/mech.png';
// import cse from '../../media/computer.png';
// import elec from '../../media/elec.png';

export default function branches() {
  return (
    <> 
    <div className='branches-outer-div'>
      <div className='branches-inner-div'>
      {/* <div className='Title'>
      <h1>Branches</h1>
    </div> */}
        <div className='branches'>
          <NavLink to="/Civil"><div className='card' >
            <div className='box' id='civil'>
              <div className='content'>
                <span>Civil</span>
              </div>
            </div>
          </div></NavLink>


          <NavLink to="/ECE"><div className='card' >
            <div className='box' id='ece'>
              <div className='content'>
                <span>ECE</span>
              </div>
            </div>
          </div></NavLink>

          <NavLink to="/Mech"><div className='card' >
            <div className='box' id='mech'>
              <div className='content'>
                <span>Mech</span>
              </div>
            </div>
          </div></NavLink>
          <NavLink to="/cse"><div className='card' >
            <div className='box' id='cse'>
              <div className='content'>
                <span>Cse</span>
              </div>
            </div>
          </div></NavLink>

        </div>
      </div>
    </div> 
  
    </>
  )
}
