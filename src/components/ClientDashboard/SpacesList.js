import React, { useEffect, useState } from "react";
import "./SpaceList.css";
import { baseUrl } from "../../utils";
import SpaceCard from "./SpaceCard";

function SpacesList() {
  const [spaces, setSpaces] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/spaces`)
      .then((resp) => resp.json())
      .then((data) => {
        setSpaces(data);
      })
      .catch((error) => console.error("Error fetching client:", error));
  }, [setSpaces]);
  return (
    <div className="space-list">
      <h1 className="space-list-header">Recent Offers</h1>
      <li className="cols-space-grid">
        {spaces.map((space) => (
          <SpaceCard key={space.id} space={space} />
        ))}
      </li>
    </div>
  );
}

export default SpacesList;
