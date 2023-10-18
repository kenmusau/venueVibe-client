import { Route, Routes } from "react-router-dom";
import Admin from "./components/Admin";
import AdminDashboard from "./components/AdminDashboard";
import './App.css'
import AddUser from "./components/AddUser";
import SpacesManagement from "./components/SpacesManagement";
import AddSpace from "./components/AddSpace";
import UserManagement from "./components/UserManagement";
import Profile from "./components/Profile";
import { useState } from "react";

function App() {
  const [newUser, setNewUser] = useState()
  const [newSpace, setNewSpace] = useState()
  return (
    <div className="App">
      {/* <h2>Venue Vibe Loading ......</h2>
      <a href="/home">dash</a> */}
      <Routes>
        <Route path="/dashboard" element={<AdminDashboard/>}/>
        <Route path="/add-user"  element={<AddUser setNewUser={setNewUser}/>}/>
        <Route path="/spaces" element={<SpacesManagement newSpace={newSpace}/>}/>
        <Route path="/add-space" element={<AddSpace setNewSpace={setNewSpace}/>}/>
        <Route path="/users" element={<UserManagement newUser={newUser}/>}/>
        <Route path="/profile" element={<Profile/>}/>
        {/* <Route path="/home/dashboard" element={<AdminDashboard/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
