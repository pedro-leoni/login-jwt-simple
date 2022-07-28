import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import login from "../../Services/loginService";
import getUserId from "../../Services/getUserId";

const Login = () => {
  const navigate = useNavigate()
  
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await login(values)
    if( response.length ) {
      window.localStorage.setItem("token",response)
      const token = localStorage.getItem("token")
      const id = await getUserId(token);
      navigate(`/user/${id}`)
    } else {
      console.log('error en inicio de sesion')
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <button type="submit">
        Login
      </button>
      <Link to='/createaccount'>
        Haven't account? Create, it's free
      </Link>
    </form>
  );
};

export default Login;
