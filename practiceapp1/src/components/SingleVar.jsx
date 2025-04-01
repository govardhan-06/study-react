import React from 'react'
import { useState,useEffect } from 'react';

const SingleVar = () => {
    var [count,setCount]=useState(0);
    useEffect(()=>{
        alert("Count updatdd to "+count);
    },[count]);
  return (
    <div>
        <h1>Count: {count}</h1>
      <button onClick={()=>setCount(count+1)}>Click me</button>
    </div>
  )
}

export default SingleVar
