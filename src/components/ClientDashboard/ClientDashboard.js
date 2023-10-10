import React, { useContext } from "react";
import { ClientContext } from "../../context/ClientContext";

function ClientDashboard() {
  const { client } = useContext(ClientContext);

  console.log(client);
  return (
    <div>
      <h1>Welcome User</h1>
    </div>
  );
}

export default ClientDashboard;
