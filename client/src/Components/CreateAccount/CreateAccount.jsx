import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import createAccount from "../../Services/createAccountService";


const CreateAccount = () => {
  const navigate = useNavigate()
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
    lastname: "",
    phone: "",
    image: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
  })
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await createAccount(values)
    if(resp !== undefined){
      Swal.fire({
        background: "#DFDCD3",
        icon: "success",
        title: "User created",
      })
      navigate('/')
    } else {
      Swal.fire({
        background: "#DFDCD3",
        confirmButtonColor: "#B6893E",
        icon: "error",
        title: "A problem has occurred, please try again",
      })
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        id="email"
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Username"
        id="username"
        name="username"
        value={values.username}
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Password"
        id="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Repeat Password"
        id="rpassword"
        name="rpassword"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Firstname"
        id="name"
        name="name"
        value={values.name}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Lastname"
        id="lastname"
        name="lastname"
        value={values.lastname}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Phone"
        id="phone"
        name="phone"
        value={values.phone}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Url Profile Image"
        id="image"
        name="image"
        value={values.image}
        onChange={handleChange}
      />
      <button type="submit"> Create Account </button>
    </form>
  );
};

export default CreateAccount;
