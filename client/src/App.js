import { Routes, Route } from 'react-router-dom';
import CreateAccount from './Components/CreateAccount/CreateAccount';
import Login  from './Components/Login/Login';

function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/createaccount' element={<CreateAccount/>} />
    </Routes>
  );
}

export default App;
