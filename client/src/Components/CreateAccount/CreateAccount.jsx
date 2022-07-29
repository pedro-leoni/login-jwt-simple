import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import createAccount from "../../Services/createAccountService";
import styles from './styles/CreateAccount.module.css';

const validate = (values, validatePassword) => {
  let errors = {};
  console.log(validatePassword)
  //username
  if (values.username) {
    if (values.username.length > 32) {
      errors.username = "This field cannot contain more than 32 characters";
    }
    if (values.username.match(/[^A-Za-z0-9-.\n]/)){
      errors.username = "This field can only contain letters, numbers, dot and dash"
    } 
  } else {
    errors.username = "This field is required";
  }
  //email
  if (values.email) {
    if (values.email.length > 32) {
      errors.email = "This field cannot contain more than 32 characters";
    }
  } else {
    errors.email = "This field is required";
  }
  //password
  if (values.password) {
    if( values.password.length < 7){
      errors.password = "Min 7 characters"
    }
    if (values.password.length > 32) {
      errors.password = "This field cannot contain more than 32 characters";
    } 
    if( values.password !== values.rpassword){
      errors.password = "Passwords not match"
    }
  } else {
    errors.password = "This field is required";
  }
  //name
  if (values.name) {
    if (values.name.length > 32) {
      errors.name = "This field cannot contain more than 32 characters";
    }
    if (values.name.replace(/ /g, "").match(/[^A-Za-z]/)){
      errors.name = "This field can only contain letters"
    }
  } else {
    errors.name = "This field is required";
  }
  //lastname
  if (values.lastname) {
    if (values.lastname.length > 32) {
      errors.lastname = "This field cannot contain more than 32 characters";
    }
    if (values.lastname.replace(/ /g, "").match(/[^A-Za-z]/)){
      errors.lastname = "This field can only contain letters"
    }
  } else {
    errors.lastname = "This field is required";
  }
  //phone
  if (values.phone) {
    if (values.phone.length > 32) {
      errors.phone = "This field cannot contain more than 32 characters";
    }
    if (values.phone.match(/[^0-9-]/)) {
      errors.phone = "This field can only contain numbers and dash"
    }
  } 
  //image
  if (values.image) {
    if (values.image.length > 150) {
      errors.image = "This field cannot contain more than 150 characters";
    }
  }

  return errors;
};

const CreateAccount = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
    lastname: "",
    phone: "",
    image: "",
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
      if( values.username || values.email || values.password || values.name || values.lastname){
        const resp = await createAccount(values);
        if (resp !== undefined) {
          Swal.fire({
            background: "#DFDCD3",
            icon: "success",
            title: "User created",
          });
          navigate("/");
        } else {
          Swal.fire({
            background: "#DFDCD3",
            confirmButtonColor: "#B6893E",
            icon: "error",
            title: "Email already exist",
          });
        }
      } else {
        Swal.fire({
          background: "#DFDCD3",
          confirmButtonColor: "#B6893E",
          icon: "error",
          title: "Fields cannot be empty",
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
  return (
    <form onSubmit={handleSubmit} className={styles.container}>
        <h3 className={styles.title}>
          Create account
        </h3>

        <input
          type="email"
          placeholder="Email"
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          className={styles.normalInput}
          
        />
        {errors.email && (<p className={styles.danger}>{errors.email}</p>)}
        <input
          type="text"
          placeholder="Username"
          id="username"
          name="username"
          value={values.username}
          onChange={handleChange}
          className={styles.normalInput}
          
        />
        {errors.username && (<p className={styles.danger}>{errors.username}</p>)}
        
          <input
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            className={styles.normalInput}
            
          />
          {errors.password && (<p className={styles.danger}>{errors.password}</p>)}
          <input
            type="password"
            placeholder="Repeat Password"
            id="rpassword"
            name="rpassword"
            onChange={handleChange}
            className={styles.normalInput}
            
          />
     
        {errors.password && (<p className={styles.danger}>{errors.password}</p>)}
        
          <input
            type="text"
            placeholder="Firstname"
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
            className={styles.normalInput}
            
          />
          {errors.name && (<p className={styles.danger}>{errors.name}</p>)}
          <input
            type="text"
            placeholder="Lastname"
            id="lastname"
            name="lastname"
            value={values.lastname}
            onChange={handleChange}
            className={styles.normalInput}
            
          />
          {errors.lastname && (<p className={styles.danger}>{errors.lastname}</p>)}
        <input
          type="text"
          placeholder="Phone"
          id="phone"
          name="phone"
          value={values.phone}
          onChange={handleChange}
          className={styles.normalInput}
          
        />
        {errors.phone && (<p className={styles.danger}>{errors.phone}</p>)}
        <input
          type="text"
          placeholder="Url Profile Image"
          id="image"
          name="image"
          value={values.image}
          onChange={handleChange}
          className={styles.normalInput}
          
        />
        {errors.image && (<p className={styles.danger}>{errors.image}</p>)}
      <div className={styles.buttonsContainer}>
        <Link to='/' className={styles.textLink}>Go Back</Link>
        <button type="submit" className={styles.submitButton}> Create Account </button>
      </div>
    </form>
  );
};

export default CreateAccount;
