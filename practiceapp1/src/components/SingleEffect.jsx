import React from 'react';
import { useEffect } from 'react';

const SingleEffect = () => {
    useEffect(()=>{
        alert("Trigger on first Render");
        return()=>{
            alert("Cleanup - Trigger on Unmount");
        }
    },[]); // empty dependency array means it runs only on first render and cleanup on unmount
  return (
    <div>
      <h1>Single Effect</h1>
    </div>
  )
}

export default SingleEffect
