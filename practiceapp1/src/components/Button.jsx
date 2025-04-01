import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../App";

export default function Button(){
    const {theme,setTheme}=useContext(ThemeContext);
    return(
        <button className="btn btn-primary" onClick={()=>{
            setTheme(theme==="light"?"dark":"light")
            console.log(theme)
        }}>Click Me</button>
    )
}