import React from 'react'

const Button = ({dest,handleClick}) => {
  return (
    <div>
      <button onClick={handleClick}>Click to go to {dest}</button>
    </div>
  )
}

export default Button
