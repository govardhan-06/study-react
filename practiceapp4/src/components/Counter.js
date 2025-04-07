import React, { startTransition, useReducer } from 'react'

function reducer(state,action){
    switch(action.type){
        case "INCREMENT": 
        if(state.count<5){
            return {count:state.count+1,error:""};
        }
        else{
            return {...state,error:"Max number"};
        }
        case "DECREMENT":
        if(state.count>0){
            return {count:state.count-1,error:""};
        }
        else{
            return {...state,error:"Min number"};
        }
        default:
            return state;
    }
}

const Counter = () => {
    const [state,dispatch]=useReducer(reducer,{count:0,error:""});
  return (
    <div>
      <h1>Count : {state.count}</h1>
      {state.error ? (<h3>{state.error}</h3>):null}
      <button onClick={()=>{return dispatch({"type":"INCREMENT"})}}>Increment</button>
      <button onClick={()=>{return dispatch({"type":"DECREMENT"})}}>Decrement</button>
    </div>
  )
}

export default Counter
