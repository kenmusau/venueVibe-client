import React, { useContext, useEffect, useState } from "react";
import { baseUrl } from "../../utils";
import { ClientContext } from "../../context/ClientContext";
import SpaceCard from "./SpaceCard";
import "./Recents.css"; // Import your CSS file

function Recents() {
  const { client } = useContext(ClientContext);
  const id = client.id;
  const [filteredBookings, setFilteredBookings] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/bookings`)
      .then((res) => res.json())
      .then((bookings) => {
        const filtered = bookings.filter(
          (booking) => booking.client.id === id && booking.status === true
        );
        setFilteredBookings(filtered);
      });
  }, [id]);

  return (
    <div className="recents-container">
      <h1 className="recents-heading">Your Previous Bookings</h1>
      <div className="space-card-container">
        {filteredBookings.map((booking) => (
          <SpaceCard
            key={booking.id}
            space={booking.space}
            onSelectedSpace={null}
          />
        ))}
      </div>
    </div>
  );
}

export default Recents;
