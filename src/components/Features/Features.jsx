
import React from 'react'
import "./features.css"
import data from "./features.json"
import FeatureCard from './FeatureCard'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const Features = () => {
  return (
    <div className='features'>
        <h1>Learn the Geekster Way <AutoAwesomeIcon style={{color:"#edba36"}}/></h1>
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
