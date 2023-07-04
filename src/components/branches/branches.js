// import React from 'react'
import './branches.css'
// import { NavLink } from "react-router-dom";

// // import Tilt from 'react-parallax-tilt';
// // import civil from '../../media/civil.png';
// // import mech from '../../media/mech.png';
// // import cse from '../../media/computer.png';
// // import elec from '../../media/elec.png';

// export default function branches() {
//   return (
//     <> 
//     <div className='branches-outer-div'>
//       <div className='branches-inner-div'>
//       {/* <div className='Title'>
//       <h1>Branches</h1>
//     </div> */}
//         <div className='branches'>
//           <NavLink to="/Civil"><div className='card' >
//             <div className='box' id='civil'>
//               <div className='content'>
//                 <span>Civil</span>
//               </div>
//             </div>
//           </div></NavLink>


//           <NavLink to="/ECE"><div className='card' >
//             <div className='box' id='ece'>
//               <div className='content'>
//                 <span>ECE</span>
//               </div>
//             </div>
//           </div></NavLink>

//           <NavLink to="/Mech"><div className='card' >
//             <div className='box' id='mech'>
//               <div className='content'>
//                 <span>Mech</span>
//               </div>
//             </div>
//           </div></NavLink>
//           <NavLink to="/cse"><div className='card' >
//             <div className='box' id='cse'>
//               <div className='content'>
//                 <span>Cse</span>
//               </div>
//             </div>
//           </div></NavLink>

//         </div>
//       </div>
//     </div> 
  
//     </>
//   )
// }


import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const BranchInfo = [
  {
    img : "https://i.pinimg.com/736x/bc/99/fa/bc99fa2bfa9a2d5f5a8a63de71ea9ef1--computer-jokes-computer-science.jpg" ,
    name : 'CSE' ,
    description : 'Computer Science Engineering',
    id : 1
  },
  {
    img : "https://i2.wp.com/cleus.co/wp-content/uploads/2019/03/e03d983e1f5f802e07cd7812c423bb02.jpg?resize=564%2C564&ssl=1" ,
    name : 'ECE' ,
    description : 'Electrics and Communication Engineering',
    id : 2
  },
  {
    img : "https://theawesomedaily.com/wp-content/uploads/2018/02/engineering-memes-16-1.jpg" ,
    name : 'ME' ,
    description : 'Mechanical Engineering',
    id : 3
  },
  {
    img : "https://www.memesmonkey.com/images/memesmonkey/bc/bc8085b6f8c07f37d4ea8630207e927d.jpeg" ,
    name : 'CE' ,
    description : 'Civil Engineering',
    id : 4
  }
] ; 



const Branch = (props)=>{

  // const {img , name , description , id} = props
  
  return  <a href={'/'+props.kk.name}><div className="card" key={props.kk.key}>
  <img  src = {props.kk.img} alt="Avatar" />
  <div className="container">
    <h4><b>{props.kk.name}</b></h4> 
    <p>{props.kk.description}</p> 
  </div>
</div></a> 
}



function GridExample() {
  return (
    <section className='cardList'>
   <Branch kk = {BranchInfo[3]} key={BranchInfo[3].id} />
   <Branch kk = {BranchInfo[0]} key={BranchInfo[0].id}/>
   <Branch kk = {BranchInfo[1]} key={BranchInfo[1].id}/>
   <Branch kk = {BranchInfo[2]} key={BranchInfo[2].id}/>
    </section>
  );
}

export default GridExample;