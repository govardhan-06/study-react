import React,{useState} from "react";
import Button from "./Button";

export default function Counter(props){
    var [count,setCount] = useState(0);
    //We can also pass the functions as props to the child components
    const handleClick=()=>{
        setCount(count+1);
    }
    return(
        <div>
            <h1>{props.children}</h1>
            <h2>{count}</h2>
            <Button handleClick={handleClick}>Click me</Button>
        </div>
    )
}