import React, { useContext } from "react";
import { ClientContext } from "../../context/ClientContext";
import { useNavigate } from "react-router-dom";
import "./ClientDashboard.css";
import { baseUrl } from "../../utils";
import { Link, Outlet, useLocation } from "react-router-dom";

function ClientDashboard() {
  const { setClient } = useContext(ClientContext);

  const location = useLocation();

  const navigate = useNavigate();

  function handleLogoutClick() {
    fetch(`${baseUrl}/logout`, { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setClient(null);
        localStorage.removeItem("client");
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
          <li
            className={
              location.pathname === "/client/dash" ||
              location.pathname === "/client/dash/viewProfile"
                ? "active"
                : ""
            }
          >
            <Link to="dash">Dashboard</Link>
          </li>
          <li
            className={
              location.pathname === "/client/spaces" ||
              location.pathname === "/client/spaces/booking"
                ? "active"
                : ""
            }
          >
            <Link to="spaces">Spaces</Link>
          </li>
          <li
            className={location.pathname === "/client/recents" ? "active" : ""}
          >
            <Link to="recents">Recents</Link>
          </li>
          <li className={location.pathname === "/client/help" ? "active" : ""}>
            <Link to="help">Help</Link>
          </li>
          <li
            className={location.pathname === "/client/settings" ? "active" : ""}
          >
            <Link to="settings">Settings</Link>
          </li>
          <li onClick={handleLogoutClick} className="client-logout">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="client-logout-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
              />
            </svg>
            <p className="client-logout-text">logout</p>
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
