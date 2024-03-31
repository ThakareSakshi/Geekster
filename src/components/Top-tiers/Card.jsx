import React from 'react'

const Card = ({student,company}) => {
    console.log(student)
  return (
    <div className='card'>
        <img src={student}/>
        <img src={company}/>
      
    </div>
  )
}

export default Card
