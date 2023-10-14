import React from "react";

function DashBoard({ client }) {
  return (
    <div>
      <h1>Welcome {client?.data?.username?} </h1>
    </div>
  );
}

export default DashBoard;
