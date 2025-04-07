import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () =>{
    const [username,setUserName]=useState();
    const [pwd,setPwd]=useState();
    const navigate=useNavigate();
    const handleClick=(e)=>{
        e.preventDefault();
        console.log(username);
        console.log(pwd);
        localStorage.setItem("isAuthenticated",true);
        console.log("Logged in");
        navigate("/settings")
    }
    return(
        <div>
            <form>
            <input 
            name="username" 
            type="text" 
            placeholder="Enter username"
            onChange={(e)=>{setUserName(e.target.value)}}
            />
            <input 
            name="pwd" 
            type="password"
            placeholder="Enter the password"
            onChange={(e)=>{setPwd(e.target.value)}}
            />
            <button onClick={handleClick}>Login</button>
            </form>
        </div>
    )
}

export default Login