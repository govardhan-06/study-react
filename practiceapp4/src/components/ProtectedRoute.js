import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from './Login';

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
        isAuthenticated?children:<Login/>
    )
}

export default ProtectedRoute;
