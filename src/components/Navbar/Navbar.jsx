import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src="./geekster-logo.png"/>
        <ul>
            <li className='active'>Full Stack - MERN</li>
            <li>Data Science & Gen AI</li>
            <li>Self Learn</li>
            <li>Masterclass</li>
        </ul>
        <div className='sign-in-wrapper'>
            <span id='sign-in'>Sign In</span>
            <span className='book-class-btn'>Book Free Class</span>
        </div>
        
    </nav>
  )
}

export default Navbar
