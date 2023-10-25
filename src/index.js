import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { ClientProvider } from "./context/ClientContext";
import { AdminProvider } from "./context/AdminContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AdminProvider>
      <ClientProvider>
        <App />
      </ClientProvider>
    </AdminProvider>
  </BrowserRouter>
);
