import React, { useEffect, useState } from "react";
import getUserInfo from "../../Services/getUserInfo";

const Profile = () => {
  const [info, setInfo] = useState();
  const token = localStorage.getItem("token");
  useEffect(() => {
    getUserInfo(token, 4).then((resp) => setInfo(resp));
  }, [token]);

  console.log(info);
  return (
    <div>
      <div>
        <h1>Welcome {info?.username}</h1>
        <img src={info?.image} alt='profile'/>
      </div>
      <h2>Info</h2>
      <table>
        <ul>
          <li>Firstname: {info?.name}</li>
          <li>Lastname: {info?.lastname}</li>
          <li>Email: {info?.email}</li>
          <li>Phone: {info?.phone}</li>
        </ul>
      </table>
    </div>
  );
};

export default Profile;
