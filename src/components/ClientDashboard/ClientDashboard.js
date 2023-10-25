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
              location.pathname === "/client/dash" ||
              location.pathname === "/client/dash/viewProfile"
                ? "active"
                : ""
            }
          >
            <Link to="dash">
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
              <BiAnalyse /> History
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
