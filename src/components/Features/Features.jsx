
import React from 'react'
import "./features.css"
import data from "./features.json"
import FeatureCard from './FeatureCard'

const Features = () => {
  return (
    <div className='features'>
        <h1>Learn the Geekster Way</h1>
        <p>Build your skills step-by-step with our momentum-driven approach.</p>
      <div className='features-wrapper'>
        {
          data.map((feature)=><FeatureCard {...feature}/> )
        }
        
        
      </div>
    </div>
  )
}

export default Features
