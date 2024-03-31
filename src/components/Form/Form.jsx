import React from 'react'
import "./form.css"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Form = () => {
  return (
    <div>
        <form className='demo-class-form'>
           <h1>Book a <span>FREE</span> Demo Class!</h1>

           <input type="text" placeholder='Full Name*'/>
           <div className='mobile-number-wrapper'>
           <input type="text" placeholder='+91' disabled/>
           <input type="Number" placeholder='Phone Number*'/>
           </div>
           <input type="Email" placeholder='Email*'/>
           <input type="text" placeholder='Highest Qualification*'/>
           <input type="text" placeholder='Year Of Completion*'/>
           <img src='/robot.png'/>
           <button>
           Let’s do it <ChevronRightIcon/>
           </button>
           <p>By continuing, you confirm that you have read and agreed to Geekster's <span>Terms of Policy </span>and <span>Privacy Policy</span></p>
        </form>
    <button className='book-class-btn2' id='demo-class-btn'>Book Free Demo Class</button>
      
    </div>
  )
}

export default Form
