import React from "react";
import "./SpaceCard.css";

function SpaceCard({ space }) {
  console.log(space);
  const { name, image, description, location, price } = space;
  return (
    <div className="space-card">
      <img src={image} alt={name} className="space-card-image" />
      <h2 className="space-card-name">{name}</h2>
      <p className="space-card-location">{location}</p>
      <p className="space-card-description">{description}</p>
      <p>{price}</p>
    </div>
  );
}

export default SpaceCard;
