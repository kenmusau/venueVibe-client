import { createContext, useEffect, useState } from "react";
import { baseUrl } from "../utils";
import axios from "axios";

const ClientContext = createContext();

function ClientProvider({ children }) {
  const [client, setClient] = useState(null);

  useEffect(() => {
    axios.get(`${baseUrl}/loggedInClient`).then((client) => {
      setClient(client);
    });
  });
  return (
    <ClientContext.Provider value={{ client, setClient }}>
      {children}
    </ClientContext.Provider>
  );
}

export { ClientContext, ClientProvider };
