import React from "react"
import Button from "./Button";
import { useNavigate } from "react-router-dom"

export default function Home(){
    const navigate=useNavigate()

    function toHome(){
        navigate('/dashboard');
    }
    return(
        <div>
            <h1>Home</h1>
            <Button dest="Dashboard" handleClick={toHome}/>
        </div>
    )
}