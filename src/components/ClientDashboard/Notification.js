import React from "react";
import "./Notification.css";

function Notification({ message, onClose }) {
  return (
    <div className="notification">
      <p>{message}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default Notification;
