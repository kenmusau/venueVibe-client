import { Route, Routes } from 'react-router-dom';
import './App.css'
import Login from './pages/Login';
import { useEffect, useState } from 'react';

function App() {

  const [user, setUser] = useState({})

  useEffect(()=>{
    console.log(user)
  },[user])
  return (
    <div className="App">
      <div className='App'>
      {/* <h2>Venue Vibe Loading ......</h2> */}
      <Routes>
        <Route path="/login" element={<Login onSave={setUser}/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
