import React from "react";

export default function Button(props){
    return(
        <button onClick={()=>{
            console.log("Button Clicked");
            props.handleClick();
        }}>
            {props.children}
        </button>
    );
}