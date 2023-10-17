import { Route, Routes } from 'react-router-dom';
import './App.css'
import Login from './pages/Login';
import { useEffect, useState } from 'react';
import Signup from './pages/Signup';
import Sign_in from './pages/Sign_in';

function App() {

  const [user, setUser] = useState({})

  useEffect(()=>{
    console.log(user)
  },[user])
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login onSave={setUser}/>}/>
        <Route path="/signup" element={<Signup onSave={setUser}/>}/>
        <Route path="/sign_in" element={<Sign_in onSave={setUser}/>}/>
      </Routes>
    </div>
  );
}

export default App;
