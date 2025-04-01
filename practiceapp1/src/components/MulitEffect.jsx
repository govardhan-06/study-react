import React from 'react'
import { useState,useEffect } from 'react'

const MulitEffect = () => {
    var [count,setCount]=useState(0);
    var [total,setTotal]=useState(0);
    useEffect(()=>{
        alert("Count updated to "+count+" and total updated to "+total);
    }
    ,[count,total]); // runs when count or total changes
  return (
    <div>
        <h1>Count: {count}</h1>
      <button onClick={()=>{setCount(count+1)}}>Count</button>
      <h1>Total:{total}</h1>
      <button onClick={()=>{setTotal(total+1)}}>Total</button>
    </div>
  )
}

export default MulitEffect
