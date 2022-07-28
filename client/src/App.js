import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import CreateAccount from "./Components/CreateAccount/CreateAccount";
import Login from "./Components/Login/Login";
import Profile from "./Components/Profile/Profile";
import apiAuth from "./Services/apiAuth";

function App() {
  const navigate = useNavigate()
  const token = localStorage.getItem("token");
  const [isAuth, setIsAuth] = useState(null);
  useEffect(() => {
    apiAuth(token).then((resp) => {
      setIsAuth(resp)
    });
  }, []);
  console.log(isAuth)
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/createaccount" element={<CreateAccount />} />
      <Route
        path="/user/:id"
        element={
          isAuth ? <Profile/> : navigate('/login')
        }
      />
    </Routes>
  );
}

export default App;
