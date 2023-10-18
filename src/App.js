import { Route, Routes } from 'react-router-dom';
import './App.css'
import Login from './components/Login';
import { useEffect, useState } from 'react';
import Signup from './components/Signup';
import Sign_in from './components/Sign_in';

function App() {

  const [user, setUser] = useState()
  const [admin, setAdmin] = useState()
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login onSave={setUser}/>}/>
        <Route path="/signup" element={<Signup setUser={setUser} setAdmin={setAdmin}/>}/>
        <Route path="/sign_in" element={<Sign_in onSave={setUser}/>}/>
      </Routes>
    </div>
  );
}

export default App;
