import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import getUserInfo from "../../Services/getUserInfo";


const Profile = () => {
  const navigate = useNavigate()
  const [info, setInfo] = useState();
  const token = localStorage.getItem("token");
  const {id } = useParams()
  useEffect(() => {
    getUserInfo(token, id).then((resp) => setInfo(resp));
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();
    //agregar confirmacion con swal
    window.localStorage.removeItem("token")
    navigate('/login')
  }

  return (
    <div>
      <div>
        <h1>Welcome {info?.username}</h1>
        <img src={info?.image} alt='profile'/>
      </div>
      <div>
        <h2>Info</h2>
        <table>
          <ul>
            <li>Firstname: {info?.name}</li>
            <li>Lastname: {info?.lastname}</li>
            <li>Email: {info?.email}</li>
            <li>Phone: {info?.phone}</li>
          </ul>
        </table>
        <button onClick={handleLogout}> Logout </button>
      </div>

    </div>
  );
};

export default Profile;
