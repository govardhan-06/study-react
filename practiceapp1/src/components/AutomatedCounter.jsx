import React, { useEffect, useState } from 'react'

const AutomatedCounter = () => {
  var [count, setCount] = useState(0)
    useEffect(()=>{
        const interval = setInterval(() => {
            setCount(count + 1)
        }, 1000)

        return () => clearInterval(interval)
    })
  return (
    <div>
      <h1>Count:{count}</h1>
    </div>
  )
}

export default AutomatedCounter
