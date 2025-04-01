import React from 'react'

const Card = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.name}</h2>
      <input type="text" onChange={(e)=>{props.setName(e.target.value)}}/>
    </div>
  )
}

export default Card
