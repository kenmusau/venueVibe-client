import React, { useEffect, useState } from "react";
import "./SpaceList.css";
import { baseUrl } from "../../utils";
import SpaceCard from "./SpaceCard";
import { ClipLoader } from "react-spinners";
import Space from "./Space";
function SpacesList() {
  const [spaces, setSpaces] = useState([]);
  const [loading, isLoading] = useState(false);
  const [selectedSpace, setSelectedSpace] = useState(null);

  useEffect(() => {
    isLoading(true);
    fetch(`${baseUrl}/spaces`)
      .then((resp) => resp.json())
      .then((data) => {
        setSpaces(data);
        isLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching client:", error);
        isLoading(true);
      });
  }, [selectedSpace]);

  if (selectedSpace)
    return (
      <Space selectedSpace={selectedSpace} onSelectedSpace={setSelectedSpace} />
    );

  if (loading)
    return (
      <div className="space-list-loader">
        {/* <h1 className="space-list-header">Recent Offers</h1>
        <p>Loading ...</p> */}
        <ClipLoader color="#ff5d22" />
      </div>
    );
  return (
    <div className="space-list">
      <h1 className="space-list-header">Recent Offers</h1>
      <li className="cols-space-grid">
        {spaces.map((space) => (
          <SpaceCard
            key={space.id}
            space={space}
            onSelectedSpace={setSelectedSpace}
          />
        ))}
      </li>
    </div>
  );
}

export default SpacesList;
