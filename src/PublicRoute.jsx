import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom';

const PublicRoute = () => {

    const isLogged = useSelector((state) => state.auth.isLoggedIn);
    const navigate = useNavigate();

    useEffect(()=>{

      if(isLogged) navigate("/home")

    },[isLogged])

     return <Outlet/>;

}

export default PublicRoute
