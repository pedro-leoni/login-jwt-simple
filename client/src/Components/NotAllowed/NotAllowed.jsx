import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const NotAllowed = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        setTimeout(() => {
            navigate('/')
        }, 5000);
    },[])
  return (
    <div>
        <h3>
            To see the profile you must be logged in
        </h3>
        <p>
            You will be redirected to login in 
            5 seconds
        </p>
    </div>
  )
}

export default NotAllowed