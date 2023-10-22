import { createContext, useEffect, useState } from "react";
import { baseUrl } from "../utils";
// import axios from "axios";

const ClientContext = createContext();

function ClientProvider({ children }) {
  const [client, setClient] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const client = JSON.parse(localStorage.getItem("client"));
    if (client) {
      setClient(client);
      setIsLoggedIn(true);
    } else {
      fetch(`${baseUrl}/me`).then((r) => {
        if (r.ok) {
          r.json().then((user) => {
            setClient(user);
          });
        }
      });
    }
  }, []);

  return (
    <ClientContext.Provider value={{ client, setClient, isLoggedIn }}>
      {children}
    </ClientContext.Provider>
  );
}

export { ClientContext, ClientProvider };

// useEffect(() => {
//   fetch(`${baseUrl}/me`)
//     .then((r) => {
//       if (r.ok) {
//         r.json().then((user) => {
//           console.log("Fetched client:", user);
//           console.log(user);
//           setClient(user);
//         });
//       } else {
//         throw new Error("Network response was not ok");
//       }
//     })
//     .catch((error) => {
//       console.error("Error fetching client:", error);
//     });
// }, []);

// console.log(client)
