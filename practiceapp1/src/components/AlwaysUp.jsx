import React,{useEffect,useState} from "react";

export default function AlwaysUp(){
    useEffect(()=>{
        alert("Trigger on all Renders");
        return()=>{
            alert("Cleanup - Trigger on all Renders");
        }
    }); // no dependency array means it runs on every render
    return(
        <div>
            <h1>Always Up</h1>
        </div>
    )
}