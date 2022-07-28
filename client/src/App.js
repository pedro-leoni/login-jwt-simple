import { Routes, Route } from "react-router-dom";
import CreateAccount from "./Components/CreateAccount/CreateAccount";
import Login from "./Components/Login/Login";
import Profile from "./Components/Profile/Profile";
import ProtectedRoutes from "./ProtectedRoutes";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/createaccount" element={<CreateAccount />} />
      <Route
        path="/user/:id"
        element={
            <ProtectedRoutes>
              <Profile/>
            </ProtectedRoutes>
        }
      />
    </Routes>
  );
}

export default App;
