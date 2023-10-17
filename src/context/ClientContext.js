import { createContext, useEffect, useState } from "react";
import { baseUrl } from "../utils";
// import axios from "axios";

const ClientContext = createContext();

function ClientProvider({ children }) {
  const [client, setClient] = useState(null);

  useEffect(() => {
    fetch(`${baseUrl}/me`).then((r) => {
      if (r.ok) {
        r.json().then((user) => setClient(user));
      }
    });
  }, []);

  return (
    <ClientContext.Provider value={{ client, setClient }}>
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
