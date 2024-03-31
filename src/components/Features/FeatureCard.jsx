import React from 'react'
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import ForumIcon from '@mui/icons-material/Forum';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';

const FeatureCard = (props) => {
  return (
    <div className='feature'>
          <div className='heading'>
          <img src={props.icon}/><h4>{props.title}</h4>
          </div>
          <hr/>
          {
          props.features.map((feature)=> <li><i class="fa-solid fa-check"></i> {feature}</li>)
          }
          
          

        </div>
  )
}

export default FeatureCard
