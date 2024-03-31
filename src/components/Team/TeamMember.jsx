import React from 'react'

const TeamMember = (props) => {
  return (
    <div className="team-member">
    <div className='image-wrapper'>
    <img src={props.image}/>
    <i class="fa-solid fa-play"></i>
    </div>
    <div className='member-info'>
     <h3>{props.name}</h3>
     <p id="position">{props.position}</p>
     <p id="swe">SWE</p>
     <img src={props.company}/>
    </div>
 
</div>
  )
}

export default TeamMember
