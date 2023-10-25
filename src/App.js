import { Route, Routes, useNavigate } from "react-router-dom";
import Admin from "./components/admin/Admin";
import AdminDashboard from "./components/admin/AdminDashboard";
import "./App.css";
import AddUser from "./components/admin/AddUser";
import SpacesManagement from "./components/admin/SpacesManagement";
import AddSpace from "./components/admin/AddSpace";
import UserManagement from "./components/admin/UserManagement";
import Profile from "./components/admin/Profile";
import { useEffect, useRef, useState } from "react";
import Login from "./components/signup and login/Login";
import Signup from "./components/signup and login/Signup";
import Landing from "./components/Landing";
// import { Routes, Route } from "react-router-dom";
import MainRoutes from "./components/Routes/Routes";
import SpaceDetails from "./components/admin/SpaceDetails";
// import BookingModal from "./components/ClientDashboard/BookingModal";

function App() {
  const [newUser, setNewUser] = useState();
  const [newSpace, setNewSpace] = useState();
  const [user, setUser] = useState([]);
  const [admin, setAdmin] = useState();
  const userRef = useRef(null);
  const [loggedin, setLoggedin] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the session data and check if the user is authenticated
    fetch("https://venuevibe-server.onrender.com/me")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Session problem");
        }
      })
      .then((data) => {
        setUser(data);

        // If the session data is empty or invalid, navigate to the landing page
        if (!data) {
          navigate("/");
          setLoggedin(false);
        }
        setLoggedin(true);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, [navigate]);

  useEffect(() => {
    console.log(userRef);
  }, [userRef]);

  const isAdmin = localStorage.getItem("person") ? true : false;

  return (
    <div className="App">
      {isAdmin ? (
        <Routes>
          <Route
            path="/dashboard"
            element={<AdminDashboard userRef={userRef} />}
          />
          <Route
            path="/add-user"
            element={<AddUser setNewUser={setNewUser} />}
          />
          <Route
            path="/AdminSpaces"
            element={<SpacesManagement userRef={userRef} newSpace={newSpace} />}
          />
          <Route
            path="/add-space"
            element={<AddSpace setNewSpace={setNewSpace} />}
          />
          <Route
            path="/users"
            element={<UserManagement userRef={userRef} newUser={newUser} />}
          />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      ) : (
        <MainRoutes />
      )}
      <Routes>
        <Route
          path="/login"
          element={<Login setUser={setUser} userRef={userRef} />}
        />
        <Route
          path="/signup"
          element={<Signup setUser={setUser} setAdmin={setAdmin} />}
        />

        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
