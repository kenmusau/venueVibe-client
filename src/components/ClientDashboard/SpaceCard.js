import React from "react";
import "./SpaceCard.css";

function SpaceCard({ space }) {
  const { name, image, description, location, price } = space;
  return (
    <div className="space-card">
      <img src={image} alt={name} className="space-card-image" />
      <div className="space-card-content">
        <h4 className="space-card-name">{name}</h4>
        <div className="space-location">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="location-icon"
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
          <p className="space-card-location">{location}</p>
        </div>
        <p className="space-card-description">{description}</p>
        <p className="space-card-price">${price} /hr</p>
      </div>
    </div>
  );
}

export default SpaceCard;
