import { Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin";
import AdminDashboard from "./pages/AdminDashboard";
import './App.css'
import AddUser from "./pages/AddUser";
import SpacesManagement from "./pages/SpacesManagement";
import AddSpace from "./pages/AddSpace";
import UserManagement from "./pages/UserManagement";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      {/* <h2>Venue Vibe Loading ......</h2>
      <a href="/home">dash</a> */}
      <Routes>
        <Route path="/dashboard" element={<AdminDashboard/>}/>
        <Route path="/add-user" element={<AddUser/>}/>
        <Route path="/spaces" element={<SpacesManagement/>}/>
        <Route path="/add-space" element={<AddSpace/>}/>
        <Route path="/users" element={<UserManagement/>}/>
        <Route path="/profile" element={<Profile/>}/>
        {/* <Route path="/home/dashboard" element={<AdminDashboard/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
