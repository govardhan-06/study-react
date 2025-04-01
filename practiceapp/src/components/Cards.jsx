import React, { useState } from "react";
import "./Cards.css";
import photo from "../photo.jpg";

export default function Cards(props){
    const name=props.name || "Govardhan";
    const regno=props.regno || "23BCE1771";
    var [color,setColor]=useState(props.style?.backgroundColor || "aquamarine");
    const appliedStyle={"backgroundColor":color};
    // props are immutable so we can't change them directly
    console.log(props.style);
    return (
        <div className="card" style={appliedStyle}>
            <img src={photo} alt="" />
            <h1>{name}</h1>
            <h3>{regno}</h3>
            <button onClick={()=>{setColor("black")}}>Click</button>
            {/* setcolor(color="black")<- will throw an error; give only the new value */}
        </div>
    )
}