import React from 'react'
import './toptiers.css'
import tiers from '../../tiers.json'
import Card from './Card'


const TopTiers = () => {
  console.log(tiers);
  return (
    <div className='top-tiers'>
      <h1>🔥 Our Learners are excelling at top-tier<br/> product companies!</h1>
      <div className='card-wrapper'>
        <div className='card-container'>
          {
            tiers.map((student)=>{
              return <Card {...student}/>
            })

            
          
          }
           {
            tiers.map((student)=>{
              return <Card {...student}/>
            })

            
          
          }

        </div>
      </div>
    </div>
  )
}

export default TopTiers
