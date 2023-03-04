import React from 'react'
import './branches.css'
import { NavLink } from "react-router-dom";
import civil from '../../media/civil.png';
import mech from '../../media/mech.png';
import cse from '../../media/computer.png';
import elec from '../../media/elec.png';

export default function branches() {
  return (
   <>
    <div className='branches-main-div'>
        <div className='branches'>
          <div className='card' >
          <div className='box' id='civil'>
          <div className = 'content'>
          <a href='civil.html'>Civil</a>

          </div>
          </div>
          </div>
          <div className='card' >
          <div class="box" id='ece'>
          <div class = "content">
            <a href='ece.html'>ECE</a>
            
          </div>
          </div>
          </div>
          <div className='card' >
          <div class="box" id='mech'>
          <div class = "content">
          <a href='mech.html'>Mech</a>

          </div>
          </div>
          </div>
          <div className='card' >
          <div class="box" id='cse'>
          <div class = "content">
          <a href='cse.html'>CSE</a>

          </div>
          </div>
          </div>
            
            </div>
        </div>
   </>
  )
}
