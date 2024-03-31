import React from 'react'
import "./fullStackCourse.css"

const FullStackCourse = () => {
  return (
    <div className='course'>
      <div>
      <div className='course-Detail'>
        <h2>India’s 1st <span className='ai-powered'> AI Powered</span></h2>
        <p><span className='ai-powered'>AI Powered </span>Full Stack Web Development Course  </p>
      </div>
      <img src="/Vector.png" id="vector"/>
      <p>Future-Proof Your Career with AI Powered Web Development and Lead in an AI-Dominant World</p>
      </div>
      <div className='video'>
      <img src="/Ashishmaglani.png"></img>
      <i class="fa-solid fa-play"></i>
      </div>
    </div>
  )
}

export default FullStackCourse
