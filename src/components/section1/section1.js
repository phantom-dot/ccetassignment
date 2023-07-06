import React from 'react'
import './/section1.css'

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




const Label = arr.map((a,index)=>{

    const sty = { gridArea : a }

   return  <div id= {a} style={sty} key={index}> <a href={'/'+a}>{a}</a></div>

})

export default function section1() {
    return (
        <section className='cloud'>
        {Label}
        </section>
    ) 
}
