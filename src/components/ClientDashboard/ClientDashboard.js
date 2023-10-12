import React, { useContext } from "react";
import { ClientContext } from "../../context/ClientContext";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../utils";

function ClientDashboard() {
  const { client, setClient } = useContext(ClientContext);

  console.log(client);

  const navigate = useNavigate();

  function handleLogoutClick() {
    fetch(`${baseUrl}/logout`, { method: "DELETE" }).then((r) => {
      if (r.ok) {
        // onSetLoggedUser(null);
        setClient(null);
        navigate("/login");
      }
    });
  }

  return (
    <div>
      <h1>Welcome User</h1>
      <button onClick={handleLogoutClick}>Log out</button>
    </div>
  );
}

export default ClientDashboard;
