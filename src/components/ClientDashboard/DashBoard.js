import React from "react";
import "./DashBoard.css";

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
  const today = formatToday(new Date());
  return (
    <div className="client-DashBoard">
      <div className="client-intro">
        <div className="client-intro-greeting">
          <h1>
            Welcome, <span>{client?.data?.username}!</span>
          </h1>
          <p className="client-time">Today is {today}</p>
        </div>
        <div className="client-intro-profile">
          <div className="client-profile-pic">
            <img src="#" alt="profile user" />
          </div>
          <div className="client-profile-details">
            <h3>client.name</h3>
            <h3>client.email</h3>
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
