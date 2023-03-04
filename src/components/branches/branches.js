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
            <div>
            <NavLink to="/"><img src={civil} alt="logo" /><h3>Civil</h3></NavLink>
            </div>
            <div> <NavLink to="/"><img src={mech} alt="logo" /><h3>Mechanical</h3></NavLink></div>
            <div> <NavLink to="/"><img src={cse} alt="logo" /><h3>Computer Science</h3></NavLink></div>
            <div> <NavLink to="/"><img src={elec} alt="logo" /><h3>Electrical</h3></NavLink></div>
        </div>

    </div>
   </>
  )
}
