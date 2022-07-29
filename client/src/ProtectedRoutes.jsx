import React, { useEffect, useState } from 'react'
import NotAllowed from './Components/NotAllowed/NotAllowed';
import apiAuth from './Services/apiAuth';

const ProtectedRoutes = ({children }) => {
  const token = localStorage.getItem("token")
  const [ auth, setAuth ] = useState(null)
  const [ loading, setLoading ] = useState(true)
  useEffect(()=>{
    apiAuth(token).then((res)=>setAuth(res))
    setLoading(false)
  },[auth, token])
  if(auth){
    return children;
  } else if(loading){
    return <p>Loading...</p>
  } else {
    return <NotAllowed/>
  }
}
export default ProtectedRoutes