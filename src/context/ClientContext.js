import { createContext, useEffect, useState } from "react";
import { baseUrl } from "../utils";
// import axios from "axios";

const ClientContext = createContext();

function ClientProvider({ children }) {
  const [client, setClient] = useState(null);

  useEffect(() => {
    fetch(`${baseUrl}/me`)
      .then((r) => {
        if (!r.ok) {
          throw new Error("Network response was not ok");
        }
        return r.json();
      })
      .then((user) => {
        console.log("Fetched client:", user);
        setClient(user);
      })
      .catch((error) => {
        console.error("Error fetching client:", error);
      });
  }, []);

  // console.log(client);
  return (
    <ClientContext.Provider value={{ client, setClient }}>
      {children}
    </ClientContext.Provider>
  );
}

export { ClientContext, ClientProvider };
