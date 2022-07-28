import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import login from "../../Services/loginService";
import getUserId from "../../Services/getUserId";
import Swal from "sweetalert2";

const validate = (values) => {
  let errors = {}; 
  if(values.email){
    if(values.email.length > 32 ){
      errors.email = 'This field cannot contain more than 32 characters'
    } 
  }
  if(values.password){
    if(values.password.length > 32){
      errors.password = 'This field cannot contain more than 32 characters'
    }
  } else {
    errors.password = 'This field is required'
  }

  return errors
}

const Login = () => {
  const navigate = useNavigate()
  
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({})
  

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
    setErrors(validate({
      ...values,
      [e.target.name]: e.target.value,
    }))
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!Object.values(errors).length){
      if(values.email.length && values.password.length){
        const response = await login(values)
        if( response.length ) {
          window.localStorage.setItem("token",response)
          const token = localStorage.getItem("token")
          const id = await getUserId(token);
          Swal.fire({
            background: "#DFDCD3",
            icon: "success",
            title: "Success",
            showConfirmButton: false,
            timer: 1000
          })
          navigate(`/user/${id}`)
        } else {
          Swal.fire({
            background: "#DFDCD3",
            confirmButtonColor: "#B6893E",
            icon: "error",
            title: "Incorrect email or password",
          })
        }
      } else {
        Swal.fire({
          background: "#DFDCD3",
          confirmButtonColor: "#B6893E",
          icon: "error",
          title: "Email cannot be empty",
        })
      }
    } else {
      Swal.fire({
        background: "#DFDCD3",
        confirmButtonColor: "#B6893E",
        icon: "error",
        title: "Check errors",
      })
    }
  };

  console.log('errors => ', errors)
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
        Haven't account? Create one, it's free
      </Link>
    </form>
  );
};

export default Login;
