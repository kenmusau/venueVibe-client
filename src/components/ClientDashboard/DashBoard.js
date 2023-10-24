import React, { useState } from "react";
import { createPortal } from "react-dom";
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
  console.log(client);
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
            Welcome, <span>{client.username}!</span>
          </h1>
          <p className="client-current-time">Today is {today}</p>
        </div>
        <div className="client-intro-profile">
          <div className="client-profile-details">
            <h2 className="client-name">{`${client.first_name} ${client.last_name}`}</h2>
            <p>{client?.data?.email}</p>
            <Link
              to="viewProfile"
              className="client-update-profile-bnt"
              onClick={() => setModalOpen(true)}
            >
              Update Profile
            </Link>
            {modalOpen &&
              createPortal(
                <ProfileModal
                  onClose={handleCloseModal}
                  // onCancel={handleCloseModal}
                />,
                document.body
              )}
          </div>
          <div className="client-profile-pic">
            <img src={client.profile_picture} alt="profile user" />
          </div>
        </div>
      </div>
      <div className="client-dashboard-content">
        <h2 className="client-dashboard-header-message">
          Find your next perfect <span>HangOut</span> <br /> chill spot with
          ease.
        </h2>
        <p>
          VenueVibe will help you find your next spot fast, easy and
          comfortable. <br /> Our expert support is always available.
        </p>
      </div>
    </div>
  );
}

export default DashBoard;
