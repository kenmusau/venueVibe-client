import React, { useState } from "react";
import "./DashBoard.css";
import { Link } from "react-router-dom";
import ProfileModal from "./ProfileModal";

function formatToday(date) {
  const options = {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
}

function DashBoard({ client }) {
  const [modalOpen, setModalOpen] = useState(false);
  const today = formatToday(new Date());

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="client-DashBoard">
      <div className="client-intro">
        <div className="client-intro-greeting">
          <h1>
            Welcome, <span>{client?.data?.username}!</span>
          </h1>
          <p className="client-current-time">Today is {today}</p>
        </div>
        <div className="client-intro-profile">
          <div className="client-profile-details">
            <h2 className="client-name">{`${client?.data?.first_name} ${client?.data?.last_name}`}</h2>
            <p>{client?.data?.email}</p>
            <Link
              to="viewProfile"
              className="client-update-profile-bnt"
              onClick={() => setModalOpen(true)}
            >
              View Profile
            </Link>
            {modalOpen && (
              <ProfileModal
                onClose={handleCloseModal}
                onCancel={handleCloseModal}
              />
            )}
          </div>
          <div className="client-profile-pic">
            <img src="#" alt="profile user" />
          </div>
        </div>
      </div>
      <div className="client-dashboard-content">
        <h2>Some content here</h2>
      </div>
    </div>
  );
}

export default DashBoard;
