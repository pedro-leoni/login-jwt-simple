import { Routes, Route } from 'react-router-dom';
import CreateAccount from './Components/CreateAccount/CreateAccount';
import Login  from './Components/Login/Login';
import Profile from './Components/Profile/Profile';

function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/createaccount' element={<CreateAccount/>} />
      <Route path='/user/:id' element={<Profile/>} />
    </Routes>
  );
}

export default App;
