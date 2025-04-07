import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({children})=>{
    const [isAuthenticated,setAuthenticated]=useState(false);
    const navigate=useNavigate();

    useEffect(()=>{
        const authState=()=>{
            setAuthenticated(localStorage.getItem("isAuthenticated") ? true: false);
        }
        authState();
        console.log(isAuthenticated?"User Logged in":"User Not Logged in");
        console.log(isAuthenticated);
    });
    return(
        isAuthenticated?children:navigate("/login")
    )
}

export default ProtectedRoute;