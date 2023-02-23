import React from 'react'
import emoji from '../../media/think_emo.webp'
import './section2.css'
export default function section2() {
    return (
        <div className='main-div container'>

            <div className='what_to_expect'>

                <div>What to Expect</div>

                <div className='think_emoji_div'>
                    <img src={emoji} alt="" />
                </div>

            </div>

            <div className='ideas_list'>
                <ul>
                    <li>01 Subject notes for all branches and years <br />
                        <span>Study from topper's Notes. And score Best CGPA</span> 
                    </li>
                    <li>02 Previous year question papers <br />
                        <span>Best and Authentic Study material </span>
                    </li>
                    <li>
                    03 College survival guides <br /><span>How to manage college and your upskilling....?</span>
                    </li>
                </ul>


            </div>
        </div>

    )
}
