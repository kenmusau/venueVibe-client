import React, { useContext } from "react";
import { ClientContext } from "../../context/ClientContext";
import { useNavigate } from "react-router-dom";
import "./ClientDashboard.css";
import { baseUrl } from "../../utils";
import { Link, Outlet, useLocation } from "react-router-dom";
import { BiSolidDashboard } from "react-icons/bi";
import { BiBuildingHouse } from "react-icons/bi";
import { BiAnalyse } from "react-icons/bi";
import { BiSolidHelpCircle } from "react-icons/bi";
import { CiSun } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";

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
              location.pathname === "/client/dashboard" ||
              location.pathname === "/client/dashboard/viewProfile"
                ? "active"
                : ""
            }
          >
            <Link to="dashboard">
              <BiSolidDashboard /> Dashboard
            </Link>
          </li>
          <li
            className={
              location.pathname === "/client/spaces" ||
              location.pathname === "/client/spaces/booking"
                ? "active"
                : ""
            }
          >
            <Link to="spaces">
              <BiBuildingHouse /> Spaces
            </Link>
          </li>
          <li
            className={location.pathname === "/client/recents" ? "active" : ""}
          >
            <Link to="recents">
              <BiAnalyse /> Recents
            </Link>
          </li>
          <li className={location.pathname === "/client/help" ? "active" : ""}>
            <Link to="help">
              <BiSolidHelpCircle /> Help
            </Link>
          </li>
          <li
            className={location.pathname === "/client/settings" ? "active" : ""}
          >
            <Link to="settings">
              <CiSun /> Settings
            </Link>
          </li>
          <li onClick={handleLogoutClick} className="client-logout">
            {/* <svg
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
            </svg> */}
            <Link>
              <CiLogout />
              logout
            </Link>
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
