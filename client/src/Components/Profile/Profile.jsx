import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import getUserInfo from "../../Services/getUserInfo";
import styles from "./styles/Profile.module.css";

const Profile = () => {
  const navigate = useNavigate();
  const [info, setInfo] = useState();
  const token = localStorage.getItem("token");
  const { id } = useParams();
  useEffect(() => {
    getUserInfo(token, id).then((resp) => setInfo(resp));
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();
    //agregar confirmacion con swal
    Swal.fire({
      background: "#d2fff3",
      confirmButtonColor: '#3B3B3B',
      icon: "question",
      title: "Are you sure?",
      showCancelButton: true,
    }).then((result) => {
      if(result.isConfirmed){
        window.localStorage.removeItem("token");
        navigate("/");
      } 
    });
  };

  return (
    
      <div className={styles.container}>
        <h1 className={styles.title}>Welcome {info?.username}</h1>
        <div className={styles.content}>
          <img className={styles.image} src={info?.image} alt="not profile img" />
          <ul className={styles.infoContainer}>
            <li className={styles.info}>Firstname: {info?.name}</li>
            <li className={styles.info}>Lastname: {info?.lastname}</li>
            <li className={styles.info}>Email: {info?.email}</li>
            <li className={styles.info}>Phone: {info?.phone}</li>
          </ul>
        </div>
        <div>
          <button onClick={handleLogout} className={styles.logoutButton}>
            {" "}
            Logout{" "}
          </button>
        </div>
      </div>
    
  );
};

export default Profile;
