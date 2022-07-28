import React, { useEffect, useState } from 'react'
import apiAuth from './Services/apiAuth';
import NotAllowed from './Components/NotAllowed/NotAllowed';
const token = localStorage.getItem("token")

const ProtectedRoutes = ({children }) => {
  const [ auth, setAuth ] = useState(null)
  const [ loading, setLoading ] = useState(true)
  useEffect(()=>{
    apiAuth(token).then((res)=> {
      setAuth(res);
      setLoading(false)
    })
  },[])
  if(auth){
    return children;
  } else if(loading) {
    return <p>Cargando</p>
  } else {
    return <NotAllowed />
  }
}
export default ProtectedRoutes