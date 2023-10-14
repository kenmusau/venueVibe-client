import { Routes, Route, Navigate } from "react-router-dom";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import LogInForm from "./components/LogInForm/LogInForm";
import ClientDashboard from "./components/ClientDashboard/ClientDashboard";
import SpacesList from "./components/ClientDashboard/SpacesList";
import DashBoard from "./components/ClientDashboard/DashBoard";
import { ClientContext } from "./context/ClientContext";
import { useContext } from "react";
function App() {
  const { client } = useContext(ClientContext);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignUpForm />} />
        <Route path="/login" element={<LogInForm />} />
        <Route path="/client" element={<ClientDashboard />}>
          <Route path="/client" element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<DashBoard client={client} />} />
          <Route path="spaces" element={<SpacesList />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
