import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'

const ProtectedRoute = () => {

    const isLogged = useSelector((state)=>state.auth.isLoggedIn)
    const navigate = useNavigate();

    useEffect(()=>{
     
     if(!isLogged) navigate("/login")
    
    },[])
     
    return <Outlet/>

  
    
    
}

export default ProtectedRoute
