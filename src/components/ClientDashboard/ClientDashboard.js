import React, { useContext } from "react";
import { ClientContext } from "../../context/ClientContext";
import { useNavigate } from "react-router-dom";
import "./ClientDashboard.css";
import { baseUrl } from "../../utils";

function ClientDashboard() {
  const { client, setClient } = useContext(ClientContext);

  console.log(client?.data);

  const navigate = useNavigate();

  function handleLogoutClick() {
    fetch(`${baseUrl}/logout`, { method: "DELETE" }).then((r) => {
      if (r.ok) {
        // onSetLoggedUser(null);
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
          <li>Dashboard</li>
          <li>Spaces</li>
          <li>Recents</li>
          <li>Help</li>
          <li>Settings</li>
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
        {/* <p onClick={handleLogoutClick}>
          <span class="material-symbols-outlined">logout</span> logout
        </p> */}
      </div>

      <div className="client-view-content">
        <h1>Welcome {client?.data?.username}</h1>
      </div>
    </div>
  );
}

export default ClientDashboard;
