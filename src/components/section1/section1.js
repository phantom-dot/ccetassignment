import React from 'react'
import { NavLink } from "react-router-dom";
import heroimg from '../../media/heroimg.webp'
import './/section1.css'
export default function section1() {
    return (
        <>
            <div className='Outer-div'>

                <div className='inner-div'>

                    <div className='text-div'>
                        <p><span className='ccet-brand' >ccet</span> <br />
                            <span className='Assignments'>ASSIGNMENTS</span><br /><br />
                            <span className='made-by'>For all your academic needs 😎</span>
                        </p>
                        <div>
                            <button><NavLink to="/register">Explore All Resources ✍️</NavLink></button>
                        </div>

                    </div>


                    <div className='image-div'>
                        <img src={heroimg} alt="" />
                    </div>


                </div>

            </div>
        </>
    )
}
