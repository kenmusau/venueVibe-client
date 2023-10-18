import React from "react";
import "./Space.css";

function Space({ selectedSpace, onSelectedSpace }) {
  const { image, name, location, status, description } = selectedSpace;
  return (
    <div className="space-item">
      <button onClick={() => onSelectedSpace(null)} className="close-space-btn">
        Back
      </button>
      <div className="space-item-details-booking">
        <div className="space-item-details">
          <h1 className="space-item-name">{name}</h1>
          <img src={image} alt={name} />
          <div className="space-location">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="space-item-location-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            <p className="space-item-location">{location}</p>
          </div>
          <p className="space-item-description">Description: {description}</p>
        </div>

        <div className="space-reservation">
          <button>{status ? "available" : "booked"}</button>
          <button>book</button>
        </div>
      </div>
    </div>
  );
}

export default Space;
