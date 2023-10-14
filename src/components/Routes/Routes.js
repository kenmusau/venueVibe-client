import { Routes, Route, Navigate } from "react-router-dom";
import SignUpForm from "../SignUpForm/SignUpForm";
import PageNotFound from "../PageNotFound/PageNotFound";
import LogInForm from "../LogInForm/LogInForm";
import ClientDashboard from "../ClientDashboard/ClientDashboard";
import SpacesList from "../ClientDashboard/SpacesList";
import DashBoard from "../ClientDashboard/DashBoard";
import { ClientContext } from "../../context/ClientContext";
import { useContext } from "react";
import Help from "../ClientDashboard/Help";
import Settings from "../ClientDashboard/Settings";
import Recents from "../ClientDashboard/Recents";

function MainRoutes() {
  const { client } = useContext(ClientContext);

  return (
    <div>
      <Routes>
        <Route path="/" element={<SignUpForm />} />
        <Route path="/login" element={<LogInForm />} />
        <Route path="/client" element={<ClientDashboard />}>
          <Route path="/client" element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<DashBoard client={client} />} />
          <Route path="spaces" element={<SpacesList />} />
          <Route path="recents" element={<Recents />} />
          <Route path="help" element={<Help />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default MainRoutes;
