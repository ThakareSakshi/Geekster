import React from 'react'
import "./banner.css"
import Form from '../Form/Form'

const Banner = () => {
  return (
    <div className='banner-wrapper'>
      <div>
      <div>
        <img src="/ai-powered.png"/>
      </div>
      
        <h1>Fullstack Web Development </h1>
        <h2>with placement assistance</h2>
        <h3>In collaboration with:</h3>
     
      <div className='image-wrapper'>
        <img src="/iit-guwahati.png"/>
        <img src="/nsdc.png"/>

      </div>
      <div className='key-point'>
        <img src="/workspace_premium.png"/>
        <p>Learn DSA, MERN, AWS to become top 1% developer</p>
      </div>
      <div className='key-point'>
        <img src="/business_center.png"/>
        <p>Curriculum design and delivered by experts from Google Microsoft and Amazon</p>
      </div>
      <div className='key-point'>
        <img src="/developer_mode_tv.png"/>
        <p>Build projects like Google Drive, Amazon, Myntra, boAT</p>
      </div>

      <div className='metrics-wrapper'>
        <div className='metrics'>
          <h2>1000+
          </h2>
          <p>Live Learning Hours</p>
        </div>
        <div className='metrics'>
          <h2>800+
          </h2>
          <p>Hiring Partners</p>
        </div>
        <div className='metrics'>
          <h2>33 LPA
          </h2>
          <p>Highest CTC Offered</p>
        </div>
        <div className='metrics'>
          <h2> 8 LPA
          </h2>
          <p>Average CTC</p>
        </div>

      </div>
    
      </div>
      <Form/>
      
    </div>
  )
}

export default Banner;

