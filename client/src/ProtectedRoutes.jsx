import React, { useEffect, useState } from 'react'
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
  } else {
    return <p>Cargando</p>
  } 
}
export default ProtectedRoutes