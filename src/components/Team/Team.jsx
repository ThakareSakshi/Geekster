import React from 'react'
import "./team.css"
import TeamMember from './TeamMember'
import data from "./team-member.json"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Team = () => {
  return (
    <div className='team'>
        <h1>Our Team of Experts</h1>
        <p>Aspire, Learn and Grow with awesome mentors 🌟</p>

        <div>
            <div className='team-member-wrapper'>
               {
                data.map((member)=> <TeamMember {...member}/>)
               }
            </div>
        </div>
        <div className='glow'></div>
        <div className='view-more-btn'>View More <KeyboardArrowDownIcon/></div>

    </div>
  )
}

export default Team
