import React from 'react'
import { NavLink } from "react-router-dom";
import heroimg from '../../media/heroimg.webp'
import './/section1.css'
import Typewriter from 'typewriter-effect';
// import { CiSquareChevDown } from "react-icons/ci";

const arr = [
    "Programming",
     "Assignments", 
     "Software",
     "Documentation",
     "Engineering", 
     "Information", 
     "Exams",
     "Computer", 
     "Debugging", 
     "Design",
     "Notes", 
     "Learning",
    //  "Pressure",
    // "Structure",
    // "Theory",
    // "Laws", 
    // "Robotics",
    // "Engineering",
    // "Hooke",
    // "Mechanics",

    
    
]




const Label = arr.map((a)=>{

    const sty = { gridArea : a }

   return  <div id= {a} style={sty}> <a href='#'>{a}</a></div>

})

export default function section1() {
    return (
        <section className='cloud'>
        {Label}
        </section>
    ) 
}
