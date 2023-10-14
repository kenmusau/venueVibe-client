import React, { useContext, useState } from "react";
import { ClientContext } from "../../context/ClientContext";
import { useNavigate } from "react-router-dom";
import "./ClientDashboard.css";
import { baseUrl } from "../../utils";
import { Link, Outlet } from "react-router-dom";

function ClientDashboard() {
  const { client, setClient } = useContext(ClientContext);
  const [selectedMenuItem, setSelectedMenuItem] = useState("dashboard");

  console.log(client?.data);

  const navigate = useNavigate();

  function handleLogoutClick() {
    fetch(`${baseUrl}/logout`, { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setClient(null);
        navigate("/login");
      }
    });
  }

  return (
    <div className="client-dashboard">
      <div className="client-sidebar">
        <h1 className="sidebar-logo">
          Venue<span>Vibe</span>
        </h1>
        <ul className="sidebar-menu">
          <li className={selectedMenuItem === "dashboard" ? "active" : ""}>
            <Link
              to="dashboard"
              onClick={() => setSelectedMenuItem("dashboard")}
            >
              Dashboard
            </Link>
          </li>
          <li className={selectedMenuItem === "spaces" ? "active" : ""}>
            <Link to="spaces" onClick={() => setSelectedMenuItem("spaces")}>
              Spaces
            </Link>
          </li>
          <li className={selectedMenuItem === "recents" ? "active" : ""}>
            <Link to="recents" onClick={() => setSelectedMenuItem("recents")}>
              Recents
            </Link>
          </li>
          <li className={selectedMenuItem === "help" ? "active" : ""}>
            <Link to="help" onClick={() => setSelectedMenuItem("help")}>
              Help
            </Link>
          </li>
          <li className={selectedMenuItem === "Settings" ? "active" : ""}>
            <Link to="Settings" onClick={() => setSelectedMenuItem("Settings")}>
              Settings
            </Link>
          </li>
          <li onClick={handleLogoutClick} className="client-logout">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="logout-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
              />
            </svg>
            <p>logout</p>
          </li>
        </ul>
      </div>

      <div className="client-view-content">
        <Outlet />
      </div>
    </div>
  );
}

export default ClientDashboard;
