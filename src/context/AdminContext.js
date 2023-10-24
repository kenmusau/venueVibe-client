import { createContext, useEffect, useState } from "react";
// import { baseUrl } from "../utils";
// import axios from "axios";

const AdminContext = createContext();

function AdminProvider({ children }) {
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    const admin = JSON.parse(localStorage.getItem("person"));
    if (admin) {
      setAdmin(admin);
    }
  }, []);

  return (
    <AdminContext.Provider value={{ admin, setAdmin }}>
      {children}
    </AdminContext.Provider>
  );
}

export { AdminContext, AdminProvider };
